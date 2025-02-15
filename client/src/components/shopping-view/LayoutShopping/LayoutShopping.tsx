import { Outlet } from 'react-router-dom'
import HeaderShopping from '../HeaderShopping'

export default function LayoutShopping() {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
      <HeaderShopping />
      <main className='flex flex-col w-full'>
        <Outlet />
      </main>
    </div>
  )
}
