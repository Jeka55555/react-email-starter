import React from "react";
interface ISupportEmailProps {
  email?: string;
}
const SupportEmail = ({
  email = " eld24@corelines.us",
}: ISupportEmailProps) => {
  return <span style={{ color: "blue" }}>{email}</span>;
};

export default SupportEmail;
