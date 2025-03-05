import localFont from "next/font/local";
import "./globals.scss";

export const metadata = {
  title: "Manu Maldonado",
  description: "Software engineer - Creative developer",
};

const palindrome = localFont({
  variable: "--font-palindrome",
  src: [
    {
      path: "./assets/fonts/palindrome.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${palindrome.variable}`}>{children}</body>
    </html>
  );
}
