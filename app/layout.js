import localFont from "next/font/local";
import "./globals.css";
import { Fragment_Mono } from 'next/font/google'
import Navbar from "./components/Navbar";
import FooterndBanner from "./components/FooterndBanner";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const walteraltebold = localFont({
  src: './fonts/walteraltebold.woff2',
  display: 'swap',
  variable: '--font-mystenwalteraltebold'
})
const walteralteregular = localFont({
  src: './fonts/ten.woff2',
  display: 'swap',
  variable: '--font-mystenwalteralteregular'
})
export const fragmentmono = Fragment_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-fragmentmono' })





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${walteraltebold.variable} ${fragmentmono.variable} ${walteralteregular.variable}`}>
      <body
        className={` antialiased`}
      >
        <div className="min-h-[100vh] min-w-full b12t14:w-[1200px] flex text-[12px] items-center  flex-col h-min justify-start relative">

          <Navbar />
          {children}
          <FooterndBanner />
        </div>
      </body>
    </html>
  );
}
