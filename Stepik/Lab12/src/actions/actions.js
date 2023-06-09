export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    payload: user,
  };
}

export function deleteUser(user) {
  return {
    type: DELETE_USER,
    payload: user,
  };
}
