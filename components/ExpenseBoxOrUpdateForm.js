import {useState} from 'react'

import UpdateForm from './UpdateForm'
import ExpenseBox from './ExpenseBox'

const ExpenseBoxOrUpdateForm = ({
  id,
  amount,
  date,
  onEditFormSubmit,
  onRemove,
}) => {

  const[updateFormOpen,setUpdateFormOpen] = useState(false)

  const handleFormClose = () => {
    setUpdateFormOpen(false)
  }

  const handleFormSubmit = (expense) => {
    onEditFormSubmit(expense)
    setUpdateFormOpen(false)
  }

  if(updateFormOpen) {
    return (
       <UpdateForm 
        id={id} 
        amount={amount} 
        date={date} 
        onFormClose={handleFormClose}
        onFormSubmit={handleFormSubmit}
       />
    )
  }
  return (
    <ExpenseBox
      id={id}
      amount={amount}
      date={date}
      onEditFormOpen={() => setUpdateFormOpen(true)}
      onRemove={onRemove}
    />
  )
}

export default ExpenseBoxOrUpdateForm;