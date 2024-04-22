import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";

export interface AddUserInput {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  country: string;
  password: string;
  role: string;
}

export interface IUser extends AddUserInput {
  _id: string;
}

export interface FetchUserResponse {
  statusCode: number;
  message: string;
  data: IUser[];
}

export interface ISelectGroupProps {
  label: string;
  options: any[];
  icon: ReactElement;
  defaultOption?: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
}
