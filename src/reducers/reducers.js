import { combineReducers } from 'redux'
import {
  ADD_CHAT,
} from '../actions/chat'

function chat(state = [], action) {
  switch (action.type) {
    case ADD_CHAT:
      return [
        ...state,
        {
          text: action.text,
        }
      ]
    default:
      return state
  }
}
const gitdrnkReducer = combineReducers({
  chat,
})
export default gitdrnkReducer;
