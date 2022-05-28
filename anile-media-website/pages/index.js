import Head from 'next/head'
import Navbar from '../components/Navbar'
import Landing from 'components/Landing'
import Experiences from 'components/Experiences'
import Marketing from 'components/Marketing'
import Clients from 'components/Clients'
import Blogs from 'components/Blogs'
import Contact from 'components/Contact'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Anile Media</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
       <Navbar/>
   
      <main>
         <Landing/>
         <Experiences/>
         <Marketing/>
         <Clients/>
         <Blogs/>
         <Contact/>
</main>
</div>
  )
}
