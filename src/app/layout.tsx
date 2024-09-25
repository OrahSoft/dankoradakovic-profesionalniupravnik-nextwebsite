import ReactQueryProvider from '@utils/ReactQueryProvider';
import './globals.css';

import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';

export const metadata = {
  title: 'Danko Radakovic Profesionalni Upravnik',
  description:
    'Danko Radaković - Profesionalni upravnik zgrada. Nudimo usluge profesionalnog upravljanja stambenim i poslovnim zgradama. Dugogodišnje iskustvo, pouzdanost i stručnost u rešavanju svih potreba zgrada. Sremska Mitrovica.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className="min-h-screen pb-[32px]">
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
