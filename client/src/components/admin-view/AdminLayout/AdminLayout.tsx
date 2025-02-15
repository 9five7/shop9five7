import { Outlet } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'
import HeaderAdmin from '../HeaderAdmin'

export default function AdminLayout() {
  return (
    <div className='flex min-h-screen w-full'>
      <AdminSidebar />
      <div className='flex flex-1  flex-col'>
        <HeaderAdmin />
        <main className='flex flex-1 bg-black bg-inherit p-4 md:p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
