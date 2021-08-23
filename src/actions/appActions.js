export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenuVisibility = () => ({
  type: TOGGLE_MENU
})
export const SET_APP_COMMENT_IS_OPEN = 'SET_APP_COMMENT_IS_OPEN';
export const setAppCommentIsOpen = (bool) => ({type: SET_APP_COMMENT_IS_OPEN, value: bool});