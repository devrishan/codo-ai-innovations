import { Outfit, Space_Grotesk, Inter, DM_Sans } from "next/font/google";
import "@/app/globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Codo Academy - Theme 1",
    description: "Excellence in Tech Education",
};

export default function Theme1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable} ${inter.variable}`} data-theme="theme1">
                {children}
            </body>
        </html>
    );
}
