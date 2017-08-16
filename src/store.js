import { createStore } from 'redux'
import reducer from './store/reducers'
import * as actions from './store/actions'

export function addTodo(text) {
    store.dispatch(actions.addTodo(text))
}

export function clearCompleted() {
    store.dispatch(actions.clearCompleted())
}

export function completeAll() {
    store.dispatch(actions.completeAll())
}

export function completeTodo(id) {
    store.dispatch(actions.completeTodo(id))
}

export function deleteTodo(id) {
    store.dispatch(actions.deleteTodo(id))
}

export function editTodo(id, text) {
    store.dispatch(actions.editTodo(id, text))
}
 
const store = createStore(reducer)

export default store