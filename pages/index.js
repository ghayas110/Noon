import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bannerone from './Bannerone'
import Bannertwo from './Bannertwo'
import Curosal from './Curosal'
import Header from './Header'
import Headertwo from './Headertwo'
import ItemDisplay from './ItemDisplay'
import ProductDisplay from './ProductDisplay'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Header/>
       <Headertwo/>
       <Bannerone/>
       <Bannertwo/>
       <Curosal/>
       <ItemDisplay/>
       <ProductDisplay/>
      </main>

      
    </div>
  )
}
