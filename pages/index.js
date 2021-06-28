import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nassi - Ateliê do conhecimento</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Administradora ▫️Esp. Engenharia de Produção e Gestão Pública📚 Utilizo o ateliê para compartilhar conhecimento com você🚀 NASSI ateliê do conhecimento"></meta>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://landing-page-nassi-atelie.vercel.app/"></meta>
        <meta property="og:title" content="Nassi - Ateliê do conhecimento"></meta>
        <meta property="og:description" content="Administradora ▫️Esp. Engenharia de Produção e Gestão Pública📚 Utilizo o ateliê para compartilhar conhecimento com você🚀 NASSI ateliê do conhecimento"></meta>
        <meta property="og:image" content="/images/meta.png"></meta>

        {/* Twitter */}
        <meta property="twitter:card" content="/images/meta.png"></meta>
        <meta property="twitter:url" content="https://landing-page-nassi-atelie.vercel.app/"></meta>
        <meta property="twitter:title" content="Nassi - Ateliê do conhecimento"></meta>
        <meta property="twitter:description" content="Administradora ▫️Esp. Engenharia de Produção e Gestão Pública📚 Utilizo o ateliê para compartilhar conhecimento com você🚀 NASSI ateliê do conhecimento"></meta>
        <meta property="twitter:image" content=""></meta>
      </Head>

      <main>
        <div>
          <Link href="https://www.instagram.com/taiana.nassi/">
            <a><Image src="/images/nassi-atelie-logo.png" width={320} height={320} /></a>
          </Link>
        </div>
        <div className={styles.instagram}>
          <Link href="https://www.instagram.com/taiana.nassi/">
            <a>
              <Image src="/images/instagram-icon.png" width={44} height={44} alt="Nassi Ateliê do conhecimento" />
              <br />
              @taiana.nassi
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
