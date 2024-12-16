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
import PasswordLink from "./components/PasswordLink";
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
            Dear <UserName /> ,
          </Text>
          <Text style={welcomeMessage}>
            We received a request to reset the password for your CORE ELD
            account. If you made this request, please follow the link below to
            reset your password:
          </Text>
          <Text style={introText}>
            <PasswordLink />
          </Text>
          <Text style={introText}>
            For security reasons, this link will expire in 24 hours. If you did
            not request a password reset, please contact us immediately at
            <SupportEmail /> or <br />
            <SupportPhone /> .
          </Text>
          <Text style={introText}>
            We take your account's security seriously and are here to assist
            with any concerns you may have.
          </Text>
          <Text style={introText}>
            Best regards,
            <br /> <b>Core ELD Team.</b> <br /> <b>Phone:</b>
            <SupportEmail />
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
