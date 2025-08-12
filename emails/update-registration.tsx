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
            Thank you for registering with CORE ELD.
          </Text>
          <Text style={welcomeMessage}>
            After a thorough review, we regret to inform you that we are unable
            to approve your registration at this time.
          </Text>
          <Text style={introText}>
            If you believe this decision was made in error or if you would like
            to provide additional information, please don’t hesitate to reach
            out to us. You can contact us via email at
            <SupportEmail /> or by phone at
            <SupportPhone /> . Our team is available to assist you and provide
            guidance on the next steps.
          </Text>
          <Text style={introText}>
            We sincerely appreciate your interest in CORE ELD and hope to have
            the opportunity to work with you in the future.
          </Text>
          <Text style={introText}>
            Best regards,
            <br /> <b>Core ELD Team.</b> <br /> <b>Phone:</b>
            <SupportPhone />
            <br />
            <b>Email:</b>
            <SupportEmail />
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
