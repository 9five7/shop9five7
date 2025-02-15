import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface CheckAuthProps {
  isAuthenticated: boolean
  user?: { role?: 'admin' | 'user' }
  children: ReactNode
}

export default function CheckAuth({ isAuthenticated, user, children }: CheckAuthProps) {
  const location = useLocation()
  // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
  if (!isAuthenticated && !['/login', '/register'].some((path) => location.pathname.includes(path))) {
    return <Navigate to='/auth/login' replace />
  }
  if (location.pathname === '/') {
    if (!isAuthenticated) {
      return <Navigate to='auth/login' />
    } else {
      if (user?.role === 'admin') {
        return <Navigate to='/admin/dashboard' />
      } else {
        return <Navigate to='/shop/home' />
      }
    }
  }
  // Nếu đã đăng nhập nhưng cố vào trang login/register, chuyển hướng phù hợp
  if (isAuthenticated && ['/login', '/register'].some((path) => location.pathname.includes(path))) {
    return <Navigate to={user?.role === 'admin' ? '/admin/dashboard' : '/shop/home'} replace />
  }
  // Nếu user không phải admin nhưng cố truy cập trang admin, chặn lại
  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
    return <Navigate to='/unauth-page' replace />
  }
  // Nếu admin nhưng cố vào trang shop, chuyển về admin dashboard
  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shop')) {
    return <Navigate to='/admin/dashboard' replace />
  }

  return children
}
