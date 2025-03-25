import axiosClient from "../config";

export const login = async (email, password) => {
  try {
    const response = await axiosClient.post(`/auth`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const register = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  role,
  phoneNumber
) => {
  try {
    const response = await axiosClient.post(`/auth`, {
      firstName,
      lastName,
      userName,
      email,
      password,
      role,
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
