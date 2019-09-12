import React from 'react'

class NewListItemForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listItem: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewToDoListItem(this.state.listItem)
  }

  handleChange = (event) => {
    let tempState = this.state
    tempState.listItem = event.target.value
    this.setState(tempState)
    console.log(this.state)
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit} >
      <input type="text" name="listItem" onChange={this.handleChange}/>
      <input type="submit" value="Add"/>
      </form>
      </div>
    )
  }
}

export default NewListItemForm
