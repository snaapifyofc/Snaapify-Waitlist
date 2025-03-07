import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
import { User } from "@/model/waitlist.model";
import { SendEmail } from "@/helpers/SendEmail";

//interface declaration for userdata save in the database
interface RequestBody {
  name: string;
  email: string;
  phone: number;
  role: string;
}

module.exports.POST = async function (req: Request): Promise<Response> {
  const { name, email, phone, role }: RequestBody = await req.json();
  // Validate required fields

  if (!name || !email || !phone || !role) {
    return NextResponse.json(
      {
        message: "name, email, phone and role are required",
      },
      { status: 400 }
    );
  }
  // Error handling
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Database connection error" },
      { status: 500 }
    );
  }

  const user = new User({ name, email, phone, role });
  await user.save();

  // Send email to the user.
  const emailResponse = await SendEmail(email, name);
  const emailData = await emailResponse.json();
  console.log(emailData);
  
  // Validation for email sending
  if (!emailData.success) {
    return NextResponse.json(
      { message: "Email sending error" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "User listed" }, { status: 201 });
};
