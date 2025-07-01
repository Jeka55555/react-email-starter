import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Img,
} from "@react-email/components";
import React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface AdminNewCompanyProps {
  companyName?: string;
  firstName?: string;
  lastName?: string;
  mcNumber?: string;
  dotNumber?: string;
  email?: string;
  phone?: string;
}

const AdminNewCompany = ({
  companyName = "Test Company",
  firstName = "John",
  lastName = "Doe",
  mcNumber = "MC123456",
  dotNumber = "12345678",
  email = "test@example.com",
  phone = "+1 234-567-8900",
}: AdminNewCompanyProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Company Account Registration on Corelines</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img style={img} src={`${baseUrl}/static/top-insert.png`} />
          <Text style={name}>Hello Super Admin,</Text>
          <Text style={welcomeMessage}>
            A new company account has just been registered on Corelines. Below
            are the submitted details:
          </Text>
          <Text style={detailsText}>
            <b>Company Name:</b> {companyName}
            <br />
            <b>First Name:</b> {firstName}
            <br />
            <b>Last Name:</b> {lastName}
            <br />
            <b>MC Number:</b> {mcNumber}
            <br />
            <b>DOT Number:</b> {dotNumber}
            <br />
            <b>Email:</b> {email}
            <br />
            <b>Phone:</b> {phone}
            <br />
            <b>Status:</b> Pending Account Verification
          </Text>
          <Text style={introText}>
            To review, verify, or manage this account, log into your Superadmin
            panel.
          </Text>
          <Text style={introText}>
            Best regards,
            <br />
            <b>Corelines Admin Team</b>
          </Text>
          <Text style={addition}>
            Core ELD has undergone rigorous testing in accordance with the
            FMCSA's Test Plan and Procedures and meets the functional
            requirements included in the 49 CFR Appendix A to Subpart B of Part
            395 - Appendix A to Subpart B of Part 395-Functional Specifications
            for All Electronic Logging Devices (ELDs).
          </Text>
          <Img style={img} src={`${baseUrl}/static/bottom-insert.png`} />
        </Container>
      </Body>
    </Html>
  );
};

export default AdminNewCompany;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
};

const img = {
  width: "100%",
};

const name = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "35px",
  padding: "0 20px",
};

const welcomeMessage = {
  fontSize: "15px",
  fontWeight: "bold",
  marginBottom: "35px",
  padding: "0 20px",
};

const introText = {
  fontSize: "15px",
  marginBottom: "35px",
  padding: "0 20px",
};

const detailsText = {
  fontSize: "15px",
  marginBottom: "35px",
  padding: "0 20px",
  lineHeight: "1.5",
};

const addition = {
  fontSize: "8px",
  padding: "0 20px",
  lineHeight: "1.2",
};
