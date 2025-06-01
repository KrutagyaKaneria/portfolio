import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css"; 
import { ThemeProvider } from "@/components/ThemeProvider";



export const metadata: Metadata = {
  title: "Krutagya Kaneria | Full Stack Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "Krutagya Kaneria's Portfolio",
  keywords: [
    "Krutagya Kaneria",
    "Rai School of Engineering",
    "Software Engineer",
    "Full Stack Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="font-outfit antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
