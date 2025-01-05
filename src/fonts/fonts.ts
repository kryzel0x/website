
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
})