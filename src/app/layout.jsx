// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import header from "@/components/header";
// import Footer from "@/components/footer";
// import Header from "@/components/header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "E-store",
//   description: "Generated to next.js",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >

//         {/* header*/}
//         <Header/>
      


//         {children}
//         {/* footer */}

//         <Footer/>
//       </body>
//     </html>
//   );
// }
// import '../globals.css'; // adjust path if needed
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
