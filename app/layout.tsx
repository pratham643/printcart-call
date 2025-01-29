import { Clarity } from "@/components/Clarity";
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "PrintCart GD Connection Portal",
    description: "Make Your Design With The Help Of GD",
    keywords: "Designing, Live, Graphic Designer, Connection, Instant Connection"
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col justify-between min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                    {children}
                   
                </main>
                <Clarity />
                <Toaster />
            </body>
        </html>
    );
}
