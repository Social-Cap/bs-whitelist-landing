import LandingPage from './landing-03';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Scorpion Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap">
            <LandingPage/>
        </div>  
    </>
  )
}