import React from "react";
interface IPasswordLinkProps {
  link?: string;
}
const PasswordLink = ({
  link = " Reset Password Link",
}: IPasswordLinkProps) => {
  return <span style={{ color: "blue" }}>{link}</span>;
};

export default PasswordLink;
