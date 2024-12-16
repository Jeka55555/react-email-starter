import React from "react";
interface IUserNameProps {
  user?: string;
}
const UserName = ({ user = " VLAD" }: IUserNameProps) => {
  return <>{user}</>;
};

export default UserName;
