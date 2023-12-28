import { inter } from '@/app/ui/fonts';
import './ui/global.css';

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
