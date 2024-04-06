import {StyleSheet, View, Text, TextInput} from 'react-native';
import {useState,useEffect} from 'react'

import MyButton from './MyButton'

const UpdateForm = ({ id, amount, date, onFormClose, onFormSubmit }) => {

  const [e_amount,setSamount] = useState(amount)
  const [e_date,setSdate] = useState(date)

  const handleAmount = (tt) => {
    setSamount(tt)
  }

  const handleSubmit = () => {

    onFormSubmit({
          id : id, 
          amount : e_amount, 
          date : date,
        })

    setStitle('');

    console.log("Pressing update button")

  }

  
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Expense</Text>
        <View style={styles.textInputContainer}>
          <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          onChangeText={handleAmount}
          value={e_amount}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Date</Text>
        <View style={styles.textInputContainer}>
          <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          value={e_date}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <MyButton small color="#21BA45" title="Update" onPress={handleSubmit} hovercolor='#bbfa91'/>
        <MyButton small color="#DB2828" title="Cancel" onPress={onFormClose} hovercolor='#f7a774' />
      </View>
    </View>
  )
}

export default UpdateForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#bd4db2',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
