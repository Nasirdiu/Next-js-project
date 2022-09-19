import Banner from '../components/Home/Banner'
import Images from '../components/Home/Images'
import Footer from '../components/share/Footer'
import Navbar from '../components/share/Navbar'

export default function Home() {
  return (
    <div className='bg-black'>
          <Navbar/>
          <Banner></Banner>
          <Images/>
          <Footer></Footer> 
    </div>
  )
}
