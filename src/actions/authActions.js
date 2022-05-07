export const GET_ME = "GET_ME";
export const getMe = () => ({ type: GET_ME });
export const GET_ME_SUCCESS = "GET_ME_SUCCESS";
export const getMeSuccess = (data) => ({ type: GET_ME_SUCCESS, value: data });
export const LOGOUT = "LOGOUT";
export const logout = () => ({ type: LOGOUT });
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
