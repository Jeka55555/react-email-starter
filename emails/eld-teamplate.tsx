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

interface IEldTeamolateProps {
  username: string;
}

const EldTeamolate = ({ username }: IEldTeamolateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Log in with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img style={img} src={`${baseUrl}/static/top-insert.png`} />
          <Text style={name}>Dear {username},</Text>
          <Text style={welcomeMessage}>
            Thank you for registering on the Core ELD Platform. We would like to
            inform you that your account is currently in a "Temporary" status.
          </Text>
          <Text style={introText}>
            This means that our team is in the process of verifying the
            information you provided during registration. You will be able to
            log into the system and access certain features, although some
            functionality may be limited until verification is complete.
          </Text>
          <Text style={introText}>
            If you have any questions or need assistance, please contact us at
            [Support Email].
          </Text>
          <Text style={message}>
            Best regards,
            <br /> Core ELD team.
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

EldTeamolate.PreviewProps = {
  username: "Vlad",
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
  textAlign: "center" as const,
  marginBottom: "35px",
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

const message = {
  fontSize: "15px",
  marginBottom: "35px",
  textAlign: "center" as const,
};

const addition = {
  fontSize: "11px",
  padding: "0 20px",
};
