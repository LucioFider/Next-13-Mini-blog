import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Nextjs-Blog",
  description: "Created by Fid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
