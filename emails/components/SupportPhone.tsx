import React from "react";
interface ISupportPhoneProps {
  phone?: string;
}
const SupportPhone = ({ phone = " (509) 579-3104" }: ISupportPhoneProps) => {
  return <span style={{ color: "blue" }}>{phone}</span>;
};

export default SupportPhone;
