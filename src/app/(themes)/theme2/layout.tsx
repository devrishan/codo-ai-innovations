import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "@/app/globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Codo Agency - Theme 2",
    description: "Future Tech Solutions",
};

export default function Theme2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable}`} data-theme="theme2">
                {children}
            </body>
        </html>
    );
}
