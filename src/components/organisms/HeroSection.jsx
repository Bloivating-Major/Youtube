import Sidebar from '../molecules/Sidebar'
import { Outlet } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="flex ">
      <Sidebar  />
       <Outlet />
    </div>
  )
}

export default HeroSection
