import { useRoutes } from 'react-router-dom'
import './App.css'

import AdminLayout from './components/admin-view/AdminLayout'
import CheckAuth from './components/common/Check-auth'
import LayoutShopping from './components/shopping-view/LayoutShopping'
import path from './constants/path'
import Layout from './layouts/MainLayout'
import Dashboard from './pages/admin-view/Dashboard'
import Features from './pages/admin-view/Features'
import Orders from './pages/admin-view/Orders'
import ProductAdmin from './pages/admin-view/ProductAdmin'
import Login from './pages/Login'
import NotFound from './pages/not-found/NotFound'
import Register from './pages/Register'
import Account from './pages/shopping-view/Account'
import CheckOut from './pages/shopping-view/CheckOut'
import Home from './pages/shopping-view/Home'
import Listing from './pages/shopping-view/Listing'
import UnauthPage from './pages/unauth-page'

function App() {
  const isAuthenticated = false
  const userRole: 'admin' | 'user' | undefined = isAuthenticated ? 'user' : undefined
  const user = isAuthenticated ? { role: userRole } : undefined
  const element = useRoutes([
    // {
    //   path: '/',
    //   element: <CheckAuth isAuthenticated={isAuthenticated} user={user}>

    //   </CheckAuth>
    // },
    {
      path: '/auth',
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <Layout />
        </CheckAuth>
      ),
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/register',
          element: <Register />
        }
      ]
    },
    {
      path: '/admin',
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: path.dashboard,
          element: <Dashboard />
        },
        {
          path: path.feature,
          element: <Features />
        },
        {
          path: path.product,
          element: <ProductAdmin />
        },
        {
          path: path.order,
          element: <Orders />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    },
    {
      path: '/shop',
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <LayoutShopping />
        </CheckAuth>
      ),
      children: [
        {
          path: '/shop/home',
          element: <Home />
        },
        {
          path: '/shop/listing',
          element: <Listing />
        },
        {
          path: '/shop/checkout',
          element: <CheckOut />
        },
        {
          path: '/shop/account',
          element: <Account />
        }
      ]
    },
    {
      path: '/unauth-page',
      element: <UnauthPage />
    }
  ])
  return <div className='min-h-screen'>{element}</div>
}

export default App
