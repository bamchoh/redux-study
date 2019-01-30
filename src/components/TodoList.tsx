import * as React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state:any) => ({
  todos: state.todos
})

const TodoList = ({todos} : {todos:any}) => (
  <ul>
    {todos.map((todo:any) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    )}
  </ul>
)

export default connect(mapStateToProps)(TodoList)

