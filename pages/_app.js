import '@/styles/globals.css'
import { DataGet } from "@/context/DataContext";
import Layout from '@/layout/Layout';


export default function App({ Component, pageProps }) {
  return (
    <DataGet>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataGet>
  )
}
