import { inter } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./index.scss";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Kryzel",
    description: "World’s First AI-Powered Decentralized Sports Betting Protocol",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <head>

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={"World’s First AI-Powered Decentralized Sports Betting Protocol"} />
                <meta name="author" content="GFFCA" />

                <meta property="og:title" content="Kryzel" />
                <meta property="og:description" content="World’s First AI-Powered Decentralized Sports Betting Protocol" />
                <meta property="og:image" content="/logo/logo.png" />

                <title>{"Kryzel"}</title>
                <link rel="shortcut icon" href="favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </head>
            <body>
                <Toaster />
                {children}
            </body>
        </html>
    );
}
