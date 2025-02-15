import { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonForm from '../../components/common/Form'
import { registerFormControls } from '../../config/FormController'

const initialState: Record<string, string> = {
  userName: '',
  email: '',
  password: ''
}

export default function Register() {
  const [formData, setFormData] = useState(initialState)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Đăng ký tài khoản mới</h1>
        <p className='mt-2'>
          Bạn đã có tài khoản?
          <Link className='font-medium hover:underline ml-2' to='/auth/login'>
            Đăng Nhập
          </Link>
        </p>
        <div className=''>
          <CommonForm
            formControls={registerFormControls}
            buttonText='Đăng Ký'
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
