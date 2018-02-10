import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {

  render() {

    return (
      <div>
        <h1>Todo</h1>

        <TodoForm />
        
        <hr/>
        <br /><br /><br />
        <div>
          <ul>
            { 
              this.props.tasks.map((task, index) => {
                return (

                    <TodoList key={index} index={index} task={task} />
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    tasks: state.rootReducer.tasks
  })
}

// function mapDispatchToProps(dispatch) {

//   return ({
//     addTodoInList: function (task) {
//       return dispatch(addTodo(task))
//     },
//   })
// }

export default connect(mapStateToProps)(App);
