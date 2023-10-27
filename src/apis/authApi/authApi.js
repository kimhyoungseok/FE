import {axiosImgInstance,  
  axiosInstance
} from '../axiosInstance/axiosInstance';

export const signUp = async (signupData) => {
  const response = await axiosImgInstance.post('auth/signup', signupData);
  console.log(response.data)
  return response.data;
}

export const login = async (loginData) => {
  const response = await axiosInstance.post('auth/login', loginData);
  return response;
  
};

export const checkEmail = async (checkEmailData) => {
  const response = await axiosInstance.post('auth/idcheck', checkEmailData);
  return response;
};
