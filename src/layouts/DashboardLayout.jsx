import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const DashboardLayout = () => {
  return (
    <div className='space-y-10'>
      <Navbar />
      <div className='w-300 mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout 
