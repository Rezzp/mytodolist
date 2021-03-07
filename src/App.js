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

  }

  onSubmitHandler = (Text) => {

    console.log("i'm", Text);
    this.setState(
      prevState => ({ todoItem: [...prevState.todoItem, Text] }),
    );
  }

  render() {
    return (
      <div className="App">
        <div className="Heading">
          <h1>To Do List</h1>
        </div>
        <ToDoInput onSubmit={this.onSubmitHandler} />
        <ItemToDisplay listItem={this.state.todoItem} />

      </div>
    );
  }
}

export default App;
