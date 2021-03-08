import React from 'react';

class ToDoDisplay extends React.Component {

    state = { isCheckedBox: true }

    onClickHandler = () => {
        this.setState(prevState => ({ isCheckedBox: !prevState.isCheckedBox }));
        console.log(this.state.isCheckedBox);
        console.log("displayColor", this.props.bgColor);
    }

    render() {
        return (
            <div className="todoItem">
                <input
                    className="chkbox"
                    type="checkbox"
                    onChange={this.onClickHandler}
                />
                <p className={this.state.isCheckedBox ? "inputText" : "notChkbox"}> {this.props.item}</p>
                <i className="material-icons">delete</i>

            </div>
        );
    }
};

export default ToDoDisplay;