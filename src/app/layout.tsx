import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/utils/globalStyle';
import type { Metadata } from 'next';
import { Space_Grotesk, Poppins } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Meu Site',
  description: 'Um site incrível usando Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${poppins.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
