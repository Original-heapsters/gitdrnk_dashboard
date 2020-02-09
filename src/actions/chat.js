/*
 * action types
 */
export const ADD_CHAT = 'ADD_CHAT'
/*
 * action creators
 */
export function addChat(text) {
  return { type: ADD_CHAT, text }
}
