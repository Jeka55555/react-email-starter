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
import UserName from "./components/Username";
import LoginPageLink from "./components/LoginPageLink";
import SupportEmail from "./components/SupportEmail";
import SupportPhone from "./components/SupportPhone";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const EldTeamolate = () => {
  return (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img style={img} src={`${baseUrl}/static/top-insert.png`} />
          <Text style={name}>
            Dear <UserName />,
          </Text>
          <Text style={welcomeMessage}>
            Congratulations! We are thrilled to inform you that your
            registration with CORE ELD has been successfully approved.
          </Text>
          <Text style={introText}>
            You can now log in to your account and start exploring the features
            that will simplify your operations and enhance your fleet
            management. Here are your login details
          </Text>
          <Text style={introText}>
            <b>Username:</b> <UserName />
            <br />
            <b>Login Link:</b> <LoginPageLink />
          </Text>
          <Text style={introText}>
            If you need any guidance to get started or have any questions, don’t
            hesitate to reach out to our support team at
            <SupportEmail /> or
            <SupportPhone /> .
          </Text>
          <Text style={introText}>
            Welcome aboard, and we look forward to a successful partnership!
          </Text>
          <Text style={introText}>
            Best regards,
            <br /> <b>Core ELD Team.</b> <br /> <b>Phone:</b> <SupportEmail />
            <br />
            <b>Email:</b> <SupportPhone />
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

export default EldTeamolate;

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

const addition = {
  fontSize: "8px",
  padding: "0 20px",
  lineHeight: "1.2",
};
const blueText = {
  color: "#0000FF",
};
