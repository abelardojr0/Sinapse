import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/utils/globalStyle';
import type { Metadata } from 'next';
import { Space_Grotesk, Poppins } from 'next/font/google';
import Head from 'next/head';

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
  title: 'Sinapse HealthTech',
  description: 'Software House Sinapse HealthTech',
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
      <Head>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
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
