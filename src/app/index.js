import App from './App.html'
import store from 'store'
import { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } from '../store/actions'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../store/constants/ActionTypes'

function selector(state) {
    return {
        todos: state.todos
    }
}

export default function(stateRouter) {
    stateRouter.addState({
        name: 'app',
        route: '/app',
        template: App,
        resolve: (data, parameters, cb) => {
            const state = store.getState()

            cb(null, selector(state))
        },
        activate: ({ domApi: svelte }) => {
            store.subscribe(() => {
                svelte.set(selector(store.getState()))
            })

            svelte.on(ADD_TODO, (text) => {
                store.dispatch(addTodo(text))
            })

            svelte.on(DELETE_TODO, (id) => {
                store.dispatch(deleteTodo(id))
            })

            svelte.on(EDIT_TODO, ({ id, text }) => {
                store.dispatch(editTodo(id, text))
            })

            svelte.on(COMPLETE_TODO, (id) => {
                console.log(id, ' complete')
                store.dispatch(completeTodo(id))
            })

            svelte.on(COMPLETE_ALL, () => {
                store.dispatch(completeAll())
            })

            svelte.on(CLEAR_COMPLETED, () => {
                store.dispatch(clearCompleted())
            })
        }
    })
}