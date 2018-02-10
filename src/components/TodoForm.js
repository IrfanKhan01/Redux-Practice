import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../store/actions/action';
import { Grid, Input } from 'semantic-ui-react'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoInput: ''
        }
    }

    _onChange(event) {

        this.setState({
            todoInput: event.target.value
        })
    }
    _submit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
        this.setState({
            todoInput: ''
        })
    }
    render() {
        return(
            <div>
                <Grid columns={3}>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                        <h1>Todo</h1>
                <form onSubmit={this._submit.bind(this)}>
                    <Input fluid type="text" value={this.state.todoInput} 
                            onChange={this._onChange.bind(this)} 
                            action={{color: 'teal', content: 'Add'}}
                            placeholder='Type something...'/>
                    {/* <Button style={{visibility: 'hidden'}} type='submit'>Add</Button> */}
                </form>
                </Grid.Column>
                <Grid.Column width={4}></Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return({

    })
}
function mapDispatchToProps(dispatch) {
    return({
        addTodo:(value) => {
            dispatch(addTodo(value))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)