import React from 'react';
import ListItem from './ListItem'
import NewListItemForm from './NewListItemForm'

function ToDoList(props){
  return(
    <div>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <NewListItemForm onNewToDoListItem={props.onNewToDoListItem} />
    </div>
  )
}

export default ToDoList
