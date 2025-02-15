import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex min-h-screen w-full'>
      {/* Phần sidebar bên trái */}
      <div className='hidden lg:flex items-center justify-center bg-slate-500 w-1/2 px-12'>
        <div className='max-w-md space-y-6 text-center'>
          <h1 className='text-4xl font-extrabold tracking-tighter text-white'>
            Chào mừng bạn đến với sàn thương mại điện tự 9five7
          </h1>
        </div>
      </div>

      {/* Phần nội dung chính */}
      <div className='flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <Outlet /> {/* Đây là nơi các trang Login, Register sẽ được hiển thị */}
      </div>
    </div>
  )
}
