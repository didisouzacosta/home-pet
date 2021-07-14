import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HomePet - Aqui seu pet se diverte</title>
        <meta name="description" content="Viaje com tranquilidade deixando seu filinho em segurança com um cuidado especial"></meta>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.homepetbicas.com.br/"></meta>
        <meta property="og:title" content="HomePet - Aqui seu pet se diverte"></meta>
        <meta property="og:description" content="Viaje com tranquilidade deixando seu filinho em segurança com um cuidado especial"></meta>
        <meta property="og:image" content="/images/meta.png"></meta>

        {/* Twitter */}
        <meta property="twitter:card" content="/images/meta.png"></meta>
        <meta property="twitter:url" content="https://www.homepetbicas.com.br/"></meta>
        <meta property="twitter:title" content="HomePet - Aqui seu pet se diverte"></meta>
        <meta property="twitter:description" content="Viaje com tranquilidade deixando seu filinho em segurança com um cuidado especial"></meta>
        <meta property="twitter:image" content=""></meta>
      </Head>

      <main>
        <div>
          <Link href="https://www.instagram.com/homepet_ceciliaalves/">
            <a><Image src="/images/home-pet-logo.png" width={240} height={240} /></a>
          </Link>
        </div>
        <p className={styles.description}>
          Viaje com tranquilidade deixando seu filhinho em segurança com cuidado especial.
        </p>
        <div>
          <Link href="https://api.whatsapp.com/send?phone=+553288880916">
            <a>
              <Image src="/images/whatsapp.png" width={80} height={80} />
              <p className={styles.phone}>Não perca tempo, <br/>entre em contato</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
