interface FormControl {
  name: string
  label: string
  placeholder?: string
  componentType: 'input' | 'select' | 'textarea'
  type?: string
  options?: { id: string; label: string }[] // Chỉ dùng cho select
}

export const registerFormControls: FormControl[] = [
  {
    name: 'userName',
    label: 'Tên đăng nhập',
    placeholder: 'Tên của bạn',
    componentType: 'input', // ✅ Đúng kiểu
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email của bạn',
    componentType: 'input', // ✅ Đúng kiểu
    type: 'email'
  },
  {
    name: 'password',
    label: 'Mật khẩu',
    placeholder: 'Mật khẩu của bạn',
    componentType: 'input', // ✅ Đúng kiểu
    type: 'password'
  }
]
export const loginFormControls: FormControl[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Email của bạn',
    componentType: 'input', // ✅ Đúng kiểu
    type: 'email'
  },
  {
    name: 'password',
    label: 'Mật khẩu',
    placeholder: 'Mật khẩu của bạn',
    componentType: 'input', // ✅ Đúng kiểu
    type: 'password'
  }
]
