import './globals.css';
import ReactQueryProvider from '@utils/ReactQueryProvider';

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

export const metadata = {
  title: 'Danko Radakovic Profesionalni Upravnik',
  description:
    'Danko Radaković - Profesionalni upravnik zgrada. Nudimo usluge profesionalnog upravljanja stambenim i poslovnim zgradama. Dugogodišnje iskustvo, pouzdanost i stručnost u rešavanju svih potreba zgrada. Sremska Mitrovica.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
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
