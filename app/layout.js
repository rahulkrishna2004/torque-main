"use client";

import ChatBox from "./Chat_Bot/ChatBox";
import "./globals.css";
import { CartProvider } from "../app/context/CartContext";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Basic Meta Tags */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Torque is your trusted partner for premium car and bike care solutions including Ceramic Coating, PPF, Detailing, and Sunfilms. Quality, precision, and protection" />
                <meta name="keywords" content="your, keywords, here" />
                <meta name="author" content="Your Name or Company" />

                {/* Open Graph (Facebook) */}
                <meta property="og:title" content="Torque" />
                <meta property="og:description" content="Detailing Studio" />
                <meta property="og:image" content="/Torque-PNG-02.png" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Website Title" />
                <meta name="twitter:description" content="A short description of your website." />
                <meta name="twitter:image" content="/path-to-your-image.jpg" />
                <meta name="twitter:site" content="@yourtwitterhandle" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                <title> Torque | Detailing Studio </title>
            </head>
            <body>
                <CartProvider>
                    {children}
                    <ChatBox />
                </CartProvider>
            </body>
        </html>
    );
}
