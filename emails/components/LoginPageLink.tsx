import React from "react";
interface ILoginPageLinkProps {
  login?: string;
}
const LoginPageLink = ({ login = " Login Page Link" }: ILoginPageLinkProps) => {
  return <span style={{ color: "blue" }}>{login}</span>;
};

export default LoginPageLink;
