let nextTodoId = 0
const addTodo = (text:any) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export default addTodo
