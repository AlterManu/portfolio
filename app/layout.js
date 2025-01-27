import "./globals.scss";
import localFont from "next/font/local";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const palindrome = localFont({
  src: [
    {
      path: "./assets/fonts/palindrome.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-palindrome",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${palindrome.variable}`}>{children}</body>
    </html>
  );
}
