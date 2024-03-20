import {StyleSheet, View, Text} from 'react-native';

import MyButton from './MyButton'

const ExpenseBox = ({
    id,
    amount,
    date,
    onEditFormOpen, 
    onRemove,
  }) => {

    const makeDate = () =>{
      const dateString = date.split(" ").slice(1).join(" ");
      return dateString;
    }

    return (
      <View style={styles.timerContainer}>
        <Text style={styles.amount}>Expense: {amount}</Text>
        <Text style={styles.date}>Date: {makeDate()}</Text>
        <View style={styles.buttonGroup}>
          <MyButton color="#108bde" small title="Edit" onPress={onEditFormOpen} hovercolor='#8cc9ed'/>
          <MyButton color="orangered" small title="Remove" onPress={() => onRemove(id)} hovercolor='red'/>
        </View>
      </View>
    )
}

export default ExpenseBox;

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#08283d',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 0,
  },
  amount: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
  date: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});