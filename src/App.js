import React from 'react';
import './App.css';
import ToDoDisplay from './ToDo/ToDoDisplay';
import ToDoInput from './ToDo/ToDoInput';



function ItemToDisplay(props) {
  return (
    props.listItem.map(item => <ToDoDisplay item={item} key={item.index} />)
  );
}


class App extends React.Component {

  state = {
    todoItem: [],
    //changeColor: false
  }

  onSubmitHandler = (Text) => {

    console.log("i'm", Text);
    console.log("i'm color", this.state.changeColor);
    this.setState(prevState => ({ todoItem: [...prevState.todoItem, Text] }),);
    //this.setState(prevState => ({ changeColor: !prevState.changeColor }),);
    console.log("i'm new color", this.state.changeColor)
  }

  render() {
    return (
      <div className="App">
        <div className="Heading">
          <h1>To Do List</h1>
        </div>
        <ToDoInput onSubmit={this.onSubmitHandler} />
        <ItemToDisplay listItem={this.state.todoItem} bgColor={this.state.changeColor} />

      </div>
    );
  }
}

export default App;
