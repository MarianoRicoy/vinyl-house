export interface LoginServiceResponse {
  message: string;
  data?: LoginResponse;
  errors?: any; // Define the type of errors if needed
}

export interface LoginResponse {
  login: boolean;
  user: IUser;
  token: string;
}

