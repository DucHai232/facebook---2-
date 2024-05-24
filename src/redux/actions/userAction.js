import * as UserApi from "../../apis/userRequest";

export const getUser = () => async (dispatch) => {
  dispatch({ type: "USER_START" }); //load api
  try {
    const response = await UserApi.getUser(); //lấy data
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
