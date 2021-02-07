import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Title from '../components/title'
export default function Home() {
  return (
    <div  >
      <Head>
      
        <title>Test Tiktok</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        <link rel="stylesheet" href={'/css/bootstrap.min.css'}/>
        <link rel="stylesheet" href={'/css/style.css'}/>
      </Head>
      <div className="position-relative bg-black" style={{height:'100vh'}}>
          <Navbar/>
          {/* Content */}
          <div className="position-absolute h-100 align-items-center d-flex">
            <img src="/img/img1.jpg" style={{width:'100%'}} />
          </div>
          <Menu />
          <Title />
          <Footer />
      </div>
      
    </div>
  )
}
