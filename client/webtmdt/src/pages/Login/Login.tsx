import { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonForm from '../../components/common/Form'
import { loginFormControls } from '../../config/FormController'

const initialState: Record<string, string> = {
  email: '',
  password: ''
}

export default function Login() {
  const [formData, setFormData] = useState(initialState)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Đăng nhập tài khoản</h1>
        <p className='mt-2'>
          Bạn chưa có tài khoản?
          <Link className='font-medium hover:underline ml-2' to='/auth/register'>
            Đăng ký
          </Link>
        </p>
        <div className=''>
          <CommonForm
            formControls={loginFormControls}
            buttonText='Đăng Nhập'
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
