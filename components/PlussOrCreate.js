import {StyleSheet, View} from 'react-native'
import {useState} from 'react'

import MyButton from './MyButton'
import CreateFrom from './CreateFrom'

const PlussOrCreate = ({onFormSubmitOfCreation}) => {

  const [isCreationOpen,setIsCreationOpen] = useState(false)

  const creationFormOpen = () => {
    setIsCreationOpen(true);
  }

  const creationFormClose = () => {
    setIsCreationOpen(false);
  }

  const createFormSubmit = (expense) => {
    onFormSubmitOfCreation(expense)
    setIsCreationOpen(false);
  }

  return (
    <View style={[styles.container, !isCreationOpen && styles.buttonPadding]}>
      {
        isCreationOpen ? 
        <CreateFrom 
          onFormClose={creationFormClose}
          onFormSubmit={createFormSubmit}
        /> : <MyButton small color='#bd4db2' title={"+"} onPress={creationFormOpen} hovercolor='pink'/>
      }
    </View>
  )
}

export default PlussOrCreate;

const styles = StyleSheet.create({
container: {
paddingVertical: 0,
backgroundColor: '#ebf5fc',
},
buttonPadding: {
paddingHorizontal: 10,
},
});
