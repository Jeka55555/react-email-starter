import React from "react";
interface IPasswordLinkProps {
  link?: string;
}
const UserPassword = ({ link = "0000000" }: IPasswordLinkProps) => {
  return <span style={{ color: "black" }}>{link}</span>;
};

export default UserPassword;
