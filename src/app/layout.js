import { Outfit } from 'next/font/google';
import './globals.css';

const fontOutfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Train 45 APK Download - Official Latest Version',
  description: 'Download Train 45 APK latest version. Explore gameplay, system requirements, and complete features guide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontOutfit.variable}`}>
      <body className="font-sans bg-[#F9F8F6] text-[#222222] antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}