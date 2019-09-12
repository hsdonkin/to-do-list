import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ToDoList from './ToDoList'



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toDoList:["This is an initial item"]
    }
  }

  handleNewToDoListItem = (listItem) => {
    let tempState = this.state
    tempState.toDoList.push(listItem)
    console.log(tempState)
    this.setState(tempState)
    console.log(this.state)
  }

  render(){
    return(
      <BrowserRouter>
        <div className="wrapper">
          <ToDoList onNewToDoListItem={this.handleNewToDoListItem}/>
        </div>
      </BrowserRouter>

    )
  }

}


export default App;
