import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import nowaBg from "../../public/nowa-bg.svg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nowa d.o.o.",
  description: "Brand engineering agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`m-auto ${inter.variable} bg-light text-dark overflow-x-hidden`}
      >
        <div className="fixed top-1/3 lg:top-1/4 left-0 w-[100vw] h-[25vw] lg:h-[21vw]">
          <Image
            src={nowaBg}
            alt="Nowa Background"
            style={{
              objectFit: "cover",
              backgroundPosition: "center",
              opacity: "0.03",
            }}
            fill={true}
          />
        </div>
        <main className="max-w-[1238px] m-auto">{children}</main>
      </body>
    </html>
  );
}
