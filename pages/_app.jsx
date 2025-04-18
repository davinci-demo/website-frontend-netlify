import RootLayout from '@/components/layout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);
  return getLayout(<Component {...pageProps} />);
  
}
