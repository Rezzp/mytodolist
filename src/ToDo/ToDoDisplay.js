import React from 'react';

function ToDoDisplay(props) {

    return (
        <div className="todoItem">
            <p className="inputText">{props.item}</p>
            <i className="material-icons">delete</i>

        </div>
    );
}
export default ToDoDisplay;