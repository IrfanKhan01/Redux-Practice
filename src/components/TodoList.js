
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../store/actions/action';
import { Grid, Input, Button, List } from 'semantic-ui-react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false
        }
    }
    removeTodo(index) {
        this.props.deleteTodo(index)
        console.log('Delete Todo', index);

    }
    editTodo(index) {
        this.setState({
            isEditing: true
        })

    }

    updateItem(event) {
        event.preventDefault();

        this.props.updateTodo(this.input.value, this.props.index);

        this.setState({
            isEditing: false
        })

    }

    render() {
        const { isEditing } = this.state;
        return (

            <div>
                <Grid>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>
                        {
                            isEditing ?

                                <div>
                                    <form onSubmit={this.updateItem.bind(this)}>
                                        <div className='ui fluid action input'>
                                            <input  type="text" defaultValue={this.props.task} ref={(value) => {
                                                this.input = value;
                                            }} />
                                            <Button className='ui brown button' type='submit'>Update</Button>
                                        </div>

                                        

                                    </form>
                                </div>
                                :
                                <div>
                                    <List divided celled relaxed index={this.props.index}>
                                        <List.Item>
                                            <List.Content floated="right">
                                                <Button inverted color='blue' onClick={(event) => {
                                                    event.stopPropagation();
                                                    this.removeTodo.bind(this, this.props.index)();
                                                }}>Delete</Button>
                                                <Button inverted color='purple' onClick={(event) => {
                                                    event.stopPropagation();
                                                    this.editTodo.bind(this, this.props.index)()
                                                }}>Edit</Button>
                                            </List.Content>
                                            <List.Content verticalAlign='middle'>
                                                {this.props.task}
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                  
                                </div>
                        }
                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        tasks: state.rootReducer.tasks
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        deleteTodo: (index) => {
            dispatch(
                deleteTodo(index)
            )
        },
        updateTodo: (updatedValue, index) => {
            dispatch(
                updateTodo(updatedValue, index)
            )
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);