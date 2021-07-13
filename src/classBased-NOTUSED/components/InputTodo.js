import React, { Component } from 'react'


export class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        //take the value entered into the input and assign it to the title state prop. 
    //    this.setState({
    //        title: e.target.value
    //    })

    //this will allow for multiple inputs to set state by calling state as an array of the event targets name and then attaching the value. Name coimes from the <input title=""> tag
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    handleSubmit = e => {
        //prevent screen from refreshing when submit happens
        e.preventDefault()
        if (this.state.title.trim()) {
             this.props.addTodoProps(this.state.title);
            //reset input to blank
            this.setState({
                title: ""
            })
        }
        else {
            alert("Please write item")
        }
       
    }

    render() {
        //this will return a form that will contain a text input object and a button to submit. 
        //since we will be getting input from the user this must be a class component since it will hold state 
        return (
            <form onSubmit={this.handleSubmit} className="form-container"> 
                <input 
                    type="text" 
                    name="title" 
                    id="addtodo" 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                    className="input-text"
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo
