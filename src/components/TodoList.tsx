import * as React from 'react'
import { connect } from 'react-redux'
import { TodoState } from '../reducers/todos'
import { CombineState } from '../reducers'

const mapStateToProps = (state:CombineState) => ({
  todos: state.todos
})

const TodoList = ({todos} : {todos:TodoState[]}) => (
  <ul>
    {todos.map((todo:TodoState) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    )}
  </ul>
)

export default connect(mapStateToProps)(TodoList)

