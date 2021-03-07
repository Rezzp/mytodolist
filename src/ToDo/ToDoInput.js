import React from 'react';

class ToDoInput extends React.Component {

    state = {
        todoText: ''
    }

    changeHandler = (e) => {
        this.setState({
            todoText: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.todoText);
        console.log("i'm in forms:", this.state.todoText);
        this.setState({
            todoText: ''
        });
        console.log(e.target);
    }

    render() {
        return (
            <div className="inputs">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="To Do item..."
                        onChange={(e) => this.changeHandler(e)}
                        value={this.state.todoText} />
                </form>
            </div>
        );
    };
}


export default ToDoInput;