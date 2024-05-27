import * as UserApi from "../../apis/userRequest";

export const getUser = () => async (dispatch) => {
  dispatch({ type: "USER_START" }); //load api
  try {
    const response = await UserApi.getUser(); //lấy data => error
    dispatch({ type: "USER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_FAIL" });
  }
};

export const createUser = (data) => async (dispatch) => {
  dispatch({ type: "USER_START" }); //load api
  try {
    await UserApi.createUserRequest(data);
  } catch (error) {
    dispatch({ type: "USER_FAIL" }); //error
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "USER_START" });
  try {
    await UserApi.deleteUser(id);
    dispatch({ type: "USER_DELETE_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "USER_FAIL" }); //error
  }
};
