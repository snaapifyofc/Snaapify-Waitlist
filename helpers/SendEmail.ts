import { NextResponse } from "next/server";
import { resend } from "@/helpers/resend";
import * as React from "react";
import EmailTemplate from "@/emails";

export const SendEmail = async (email: string, name: string) => {
  //Send Email Functionality
  try {
    await resend.emails.send({
      from: "noreply@snaapify.com",
      to: [email],
      subject: "We've Got a Surprise Waiting 🎁",
      react: EmailTemplate({ firstName: name }) as React.ReactElement,
    });
    return NextResponse.json(
      {
        success: true,
        message: "verification email sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email sending error" },
      { status: 500 }
    );
  }
};
