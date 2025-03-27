import '@/scss/theme.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppinSans = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Teddy Hendryanto',
  description: 'Teddy Hendryanto - Software Engineer - Jakarta, Indonesia',
  openGraph: {
    title: 'Teddy Hendryanto - Software Engineer - Jakarta, Indonesia',
    description: 'Portfolio showcasing projects, skills, and contact details.',
    images: ['/og-image.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinSans.variable}`}>
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
