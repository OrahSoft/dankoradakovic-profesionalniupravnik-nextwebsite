import './globals.css';
import ReactQueryProvider from '@utils/ReactQueryProvider';

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

export const metadata = {
  title: 'Danko Radakovic Profesionalni Upravnik',
  description: 'Profesionalni upravnik zgrada. Sremska Mitrovica.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
