import {StyleSheet, View, Text} from 'react-native';

const ExpenseBox = ({
    totalAmount,
    averageAmount,
  }) => {

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.amount}>Total Expense: {totalAmount}</Text>
      <Text style={styles.date}>Per Day Expense: {averageAmount}</Text>
    </View>
  )
}

export default ExpenseBox;

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: '#ebf5fc',
    borderColor: '#08283d',
    borderWidth: 1,
    borderRadius: 0,
    padding: 0,
    margin: 0,
    marginBottom: 0,
  },
  amount: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  date: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
  },
});