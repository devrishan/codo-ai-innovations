import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Codo AI Innovations",
    description: "Pioneering the future of digital intelligence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
