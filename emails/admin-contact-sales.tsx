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

interface AdminContactSalesProps {
  companyName?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  fleetSize?: string;
  notes?: string;
}

const AdminContactSales = ({
  companyName = "Test Company",
  fullName = "John Doe",
  email = "test@example.com",
  phone = "+1 234-567-8900",
  fleetSize = "50-100",
  notes = "Looking for a scalable ELD solution",
}: AdminContactSalesProps) => {
  return (
    <Html>
      <Head />
      <Preview>📩 New Contact Sales Request Submitted</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img style={img} src={`${baseUrl}/static/top-insert.png`} />
          <Text style={name}>Hello Super Admin,</Text>
          <Text style={welcomeMessage}>
            A new Contact Sales inquiry has been submitted via the Corelines platform. Below are the details provided:
          </Text>
          <Text style={detailsText}>
            <b>Company Name:</b> {companyName}<br />
            <b>Full Name:</b> {fullName}<br />
            <b>Contact Email:</b> {email}<br />
            <b>Contact Phone:</b> {phone}<br />
            <b>Fleet Size:</b> {fleetSize}<br />
            <b>Notes:</b> "{notes}"
          </Text>
          <Text style={introText}>
            Best regards,<br />
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

export default AdminContactSales;

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