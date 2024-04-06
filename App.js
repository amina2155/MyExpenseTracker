import { Text, View, StyleSheet, ScrollView, FlatList, AsyncStorage } from 'react-native';
import {useState, useEffect} from 'react'
import * as Crypto from 'expo-crypto';

import PlussOrCreate from './components/PlussOrCreate'
import ExpenseBoxOrUpdateForm from './components/ExpenseBoxOrUpdateForm'
import {newExpense} from './components/ExpenseInfo'
import TotalAndAverageInfoBox from './components/TotalAndAverageInfoBox'




const App = () => {

  const [expenses,setExpenses] = useState([
   
  ]);
  

  const [totalExpense, setTotalExpense] = useState(0);
  const [averageExpensePerDay, setAverageExpensePerDay] = useState(0);

  useEffect(() => {
      setExpenses(expenses.map(expense => {
        return expense
      }))

      let total = 0;

      for (const expense of expenses) {
        let amount = parseInt(expense.amount)
        total += parseFloat(amount);
      }      
      let totalStringy = String(total);
      setTotalExpense(totalStringy);

      const datesArray = expenses.map((expense) => expense.date);
      const uniqueDatesSet = new Set(datesArray);

      const average = (uniqueDatesSet.size === 0 ? 0 : (total / uniqueDatesSet.size));

      setAverageExpensePerDay(average);
  
  }, [expenses]);
  
  useEffect(() => {
    loadExpenses();
    loadExpensesAsync();
  }, []);



  const saveExpensesAsync = async (expenses) => {

      await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
    
  };

  const saveExpenses = (expenses) => {

       localStorage.setItem('expenses', JSON.stringify(expenses));
    
  };

  const loadExpensesAsync = async () => {
      const storedExpenses = await AsyncStorage.getItem('expenses');
      if (storedExpenses !== null) {
        setExpenses(JSON.parse(storedExpenses));
      }
  };

  const loadExpenses =  () => {
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses !== null) {
        setExpenses(JSON.parse(storedExpenses));
      }
  };


  const handleCreateFormSubmit = (expense) => {
    setExpenses([newExpense(expense),...expenses])
    saveExpenses([newExpense(expense),...expenses]);
    saveExpensesAsync([newExpense(expense),...expenses]);
    console.log(expenses)
  }

  const handleFormUpdate = (updated_expense) => {
    setExpenses(
      expenses.map(expense => {
        if(expense.id === updated_expense.id){
          return {
            ...expense,
            amount : updated_expense.amount,
            date : updated_expense.date
          }
        }
        return expense
      })
    )
    saveExpenses(expenses);
    saveExpensesAsync(expenses);
  }

    const handleRemove = (expense_id) => {
    setExpenses(expenses.filter(e => e.id !== expense_id))
    saveExpenses(expenses.filter(e => e.id !== expense_id));
    saveExpensesAsync(expenses.filter(e => e.id !== expense_id));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Expense Tracker</Text>
      </View>
      <TotalAndAverageInfoBox totalAmount={totalExpense} averageAmount={averageExpensePerDay} />
      <View>
        <PlussOrCreate onFormSubmitOfCreation={handleCreateFormSubmit}/>
      </View>
      <FlatList
        style={styles.expenseList}
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseBoxOrUpdateForm
            id={item.id}
            amount={item.amount}
            date={item.date}
            onEditFormSubmit={handleFormUpdate}
            onRemove={handleRemove}
          />
        )}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#08283d',
    backgroundColor: '#08283d',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  expenseList: {
    paddingBottom: 15,
    backgroundColor: '#ebf5fc',
  },
});