import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "@/app/globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Codo Corporate - Theme 3",
    description: "Innovation Ecosystem",
};

export default function Theme3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable}`} data-theme="theme3">
                {children}
            </body>
        </html>
    );
}
