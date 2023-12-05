import Head from 'next/head';
import Topo from '../componentes/Topo';
import Rodape from '../componentes/Rodape';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title> Trabalho Final </title>
      </Head>

      <Topo/>

      <h2> Bandeiras </h2>
      <p className='site'> Esse site tem o intuito de mostrar as bandeiras que existe pelo mundo, como: bandeira de país, de estado, de cidade e de sexualidade. </p>
      <a href="/Bandeiras"> Ver bandeiras </a>

      <Rodape/>
    </div>
  )
}