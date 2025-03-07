// import * as React from "react";

// interface EmailTemplateProps {
//   firstName: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <table 
//       border={0} 
//       cellPadding="0" 
//       cellSpacing="0" 
//       style={{ 
//         backgroundColor: "#FFFFFF", 
//         margin: "0 auto", 
//         maxWidth: "680px", 
//         width: "100%" 
//       }}
//     >
//       <tbody>
//         <tr>
//           <td>
//             {/* Logo Section */}
//             <table 
//               align="center" 
//               border={0}
//               cellPadding="0" 
//               cellSpacing="0" 
//               style={{ 
//                 backgroundColor: "#ffffff", 
//                 borderRadius: "0", 
//                 width: "680px", 
//                 margin: "0 auto" 
//               }}
//             >
//               <tbody>
//                 <tr>
//                   <td style={{ padding: "5px 0" }}>
//                     <div style={{ textAlign: "center", padding: "0 20px" }}>
//                       <div style={{ maxWidth: "204px", margin: "0 auto" }}>
//                         <a href="https://www.example.com" style={{ outline: "none" }} target="_blank">
//                           <img alt="Gallery Logo" height="auto" src="../../assets/images/snaapify_black.png" style={{ display: "block", height: "auto", border: "0", width: "100%" }} width="204"/>
//                         </a>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Divider */}
//             <table 
//               align="center" 
//               border={0}
//               cellPadding="0" 
//               cellSpacing="0" 
//               style={{ 
//                 backgroundColor: "#ffffff", 
//                 width: "680px", 
//                 margin: "0 auto" 
//               }}
//             >
//               <tbody>
//                 <tr>
//                   <td style={{ padding: "0 20px 0 0" }}>
//                     <div style={{ borderTop: "1px solid #dddddd", margin: "10px 0" }}></div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Main Content */}
//             <table 
//               align="center" 
//               border={0}
//               cellPadding="0" 
//               cellSpacing="0" 
//               style={{ width: "680px", margin: "0 auto" }}
//             >
//               <tbody>
//                 <tr>
//                   <td style={{ padding: "5px 0" }}>
//                     {/* Welcome Message */}
//                     <div style={{ color: "#000000", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "33px", textAlign: "center", margin: "0 20px" }}>
//                       <p>Hey {firstName}, We've Got a Surprise Waiting 🎁</p>
//                     </div>

//                     {/* Confirmation Message */}
//                     <div style={{ color: "#101112", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "16px", textAlign: "center", margin: "10px 20px" }}>
//                       <p>You've successfully joined the waitlist for Snaapify™, We're excited to have you on board and can't wait to joining. We'll keep you updated and exciting news.</p>
//                     </div>

//                     {/* Banner Image */}
//                     <div style={{ margin: "20px 0", textAlign: "center" }}>
//                       <div style={{ maxWidth: "680px" }}>
//                         <img alt="Exhibition Piece Placeholder" height="auto" src="../../assets/images/Banner.png" style={{ display: "block", height: "auto", border: "0", width: "100%" }} width="680"/>
//                       </div>
//                     </div>

//                     {/* Features Section */}
//                     <div style={{ margin: "20px 0" }}>
//                       <div style={{ color: "#000000", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "23px", margin: "0 20px", textAlign: "left" }}>
//                         <p><strong>Things you can do on Snaapify™</strong></p>
//                       </div>

//                       <div style={{ color: "#000000", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "16px", margin: "16px 20px 10px", textAlign: "left" }}>
//                         <p>1️⃣ <strong>Book a Photographer in Minutes!</strong> <br/>Need a photographer last-minute? No problem! With Snaapify, you can browse, compare, and book vetted local photographers instantly no waiting, no hassle.</p>
//                         <p>&nbsp;</p>
//                         <p>2️⃣ <strong>Find the Perfect Match for Any Occasion!</strong> <br/>Whether it's a wedding, birthday, corporate event, or casual shoot, Snaapify connects you with skilled photographers tailored to your needs and budget.</p>
//                         <p>&nbsp;</p>
//                         <p>3️⃣ <strong>Seamless Booking & Secure Payments!</strong> <br/>Say goodbye to back-and-forth negotiations! Snaapify handles scheduling, payments, and photo delivery, ensuring a stress-free experience from booking to final shots.</p>
//                       </div>

//                       {/* Learn More Button */}
//                       <div style={{ margin: "10px 20px", textAlign: "left" }}>
//                         <a href="https://www.linkedin.com/company/snaapify" style={{ color: "#000000", textDecoration: "none" }} target="_blank">
//                           <span style={{ 
//                             backgroundColor: "transparent", 
//                             border: "1px solid #000000", 
//                             borderRadius: "0px", 
//                             color: "#000000", 
//                             display: "inline-block", 
//                             fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", 
//                             fontSize: "12px", 
//                             padding: "5px 20px", 
//                             textAlign: "center", 
//                             lineHeight: "24px"
//                           }}>
//                             LEARN MORE
//                           </span>
//                         </a>
//                       </div>
//                     </div>

//                     {/* Divider */}
//                     <div style={{ borderTop: "1px solid #dddddd", margin: "20px 10px" }}></div>

//                     {/* About Section */}
//                     <div style={{ padding: "10px 0" }}>
//                       <div style={{ fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", padding: "10px 20px 10px 20px" }}>
//                         <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 10px 0" }}>About Snaapify</p>
//                         <p style={{ fontSize: "16px", margin: "0" }}>
//                           Snaapify is transforming the way people book photographers. Our innovative marketplace seamlessly connects clients with top-rated local photographers, ensuring professional photography is just a click away. Whether you need a last-minute photographer for an event, a pre-planned session, or corporate coverage, Snaapify simplifies the entire process. Browse portfolios, compare transparent pricing, and secure a photographer instantly, all within minutes. From scheduling to payment and final image delivery, our platform guarantees a hassle-free experience for both clients and photographers.
//                           <br/><br/>
//                           Feel free to reach out to us: <a href="mailto:snaapifyofficial@gmail.com" style={{ textDecoration: "none", color: "#000000" }}>snaapifyofficial@gmail.com</a>
//                         </p>
//                       </div>

//                       {/* Why Us Section */}
//                       <div style={{ fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", padding: "10px 20px 10px 20px" }}>
//                         <p style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 10px 0" }}>Why US?</p>
//                         <p style={{ fontSize: "16px", margin: "0 0 10px 0" }}>Finding a reliable photographer can be time-consuming, with unpredictable availability and hidden costs. Snaapify eliminates these challenges by offering:</p>
//                         <ul style={{ fontSize: "16px" }}>
//                           <li><strong>Instant, Last-Minute Bookings</strong> – Secure a professional photographer in real time, even at the eleventh hour.</li>
//                           <li><strong>Verified Local Talent</strong> – Every photographer on our platform is carefully vetted for professionalism and quality.</li>
//                           <li><strong>Transparent Pricing</strong> – No hidden fees or lengthy negotiations—just upfront, competitive rates.</li>
//                           <li><strong>Seamless Booking Process</strong> – From selection to payment, everything happens in one place for a stress-free experience.</li>
//                         </ul>
//                       </div>

//                       {/* Note */}
//                       <div style={{ color: "#000000", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "18px", textAlign: "center", margin: "20px 20px" }}>
//                         <p><strong>Note: We're offering exclusive <span style={{ color: "#ff9f12" }}>FREEBIES</span> to everyone who joins the waitlist!</strong></p>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Footer */}
//             <table 
//               align="center" 
//               border={0}
//               cellPadding="0" 
//               cellSpacing="0" 
//               style={{ 
//                 backgroundColor: "#000000", 
//                 width: "680px", 
//                 margin: "0 auto" 
//               }}
//             >
//               <tbody>
//                 <tr>
//                   <td style={{ padding: "5px 0" }}>
//                     {/* Logo */}
//                     <div style={{ textAlign: "center", padding: "5px 0" }}>
//                       <div style={{ maxWidth: "170px", margin: "0 auto" }}>
//                         <img alt="" height="auto" src="../../assets/images/Secondary_Logo.png" style={{ display: "block", height: "auto", border: "0", width: "100%" }} width="170"/>
//                       </div>
//                     </div>

//                     {/* Tagline */}
//                     <div style={{ color: "#ffffff", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "14px", textAlign: "center" }}>
//                       <p>Hire best photographer nearby</p>
//                     </div>

//                     {/* Divider */}
//                     <div style={{ borderTop: "1px solid #dddddd", margin: "10px" }}></div>

//                     {/* Social Links */}
//                     <table 
//                       align="center" 
//                       border={0}
//                       cellPadding="0" 
//                       cellSpacing="0" 
//                       style={{ width: "100%" }}
//                     >
//                       <tbody>
//                         <tr>
//                           <td style={{ width: "25%", textAlign: "center", padding: "5px" }}>
//                             <a href="https://www.linkedin.com/company/snaapify" style={{ color: "#ffffff", textDecoration: "underline" }} target="_blank">Linkedin</a>
//                           </td>
//                           <td style={{ width: "25%", textAlign: "center", padding: "5px" }}>
//                             <a href="https://x.com/snaapify" style={{ color: "#ffffff", textDecoration: "underline" }} target="_blank">Twitter</a>
//                           </td>
//                           <td style={{ width: "25%", textAlign: "center", padding: "5px" }}>
//                             <a href="https://www.facebook.com/snaapify/" style={{ color: "#ffffff", textDecoration: "underline" }} target="_blank">Facebook</a>
//                           </td>
//                           <td style={{ width: "25%", textAlign: "center", padding: "5px" }}>
//                             <a href="https://www.instagram.com/snaapify/" style={{ color: "#ffffff", textDecoration: "underline" }} target="_blank">Instagram</a>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Disclaimer */}
//             <table 
//               align="center" 
//               border={0}
//               cellPadding="0" 
//               cellSpacing="0" 
//               style={{ width: "680px", margin: "0 auto" }}
//             >
//               <tbody>
//                 <tr>
//                   <td>
//                     <div style={{ borderTop: "1px solid #dddddd", margin: "10px" }}></div>
//                     <div style={{ color: "#101112", fontFamily: "Lato, Tahoma, Verdana, Segoe, sans-serif", fontSize: "16px", textAlign: "center", padding: "10px" }}>
//                       <p>You have received this mail because your e-mail ID is registered with www.snaapify.com<br/>This is a system-generated e-mail, please do not reply to this message.</p>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

// export default EmailTemplate;

import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default EmailTemplate;