import * as Select from '@radix-ui/react-select'

interface FormControl {
  name: string
  label: string
  placeholder?: string
  componentType: 'input' | 'select' | 'textarea'
  type?: string
  options?: { id: string; label: string }[] // Chỉ dùng cho select
}

interface CommonFormProps {
  formControls: FormControl[]
  formData: Record<string, string>
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  buttonText?: string
}

export default function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }: CommonFormProps) {
  function renderInputsByComponentType(getControlItem: FormControl) {
    let element = null
    const value = formData[getControlItem.name] || ''

    switch (getControlItem.componentType) {
      case 'input':
        element = (
          <input
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            name={getControlItem.name}
            type={getControlItem.type || 'text'}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value
              })
            }
          />
        )
        break
      case 'select':
        element = (
          <Select.Root
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value
              })
            }
            value={value}
          >
            <Select.Trigger className='w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition'>
              <Select.Value placeholder={getControlItem.placeholder} />
            </Select.Trigger>
            <Select.Content className='bg-white border border-gray-300 rounded-lg shadow-md'>
              {getControlItem.options?.map((optionItem) => (
                <Select.Item
                  key={optionItem.id}
                  value={optionItem.id}
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition'
                >
                  {optionItem.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        )
        break
      case 'textarea':
        element = (
          <textarea
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value
              })
            }
          />
        )
        break
      default:
        element = (
          <input
            className='w-full px-4 py-2 border border-gray-300 rounded-lg'
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
          />
        )
        break
    }

    return element
  }

  return (
    <form onSubmit={onSubmit} className='p-6 bg-white shadow-md rounded-lg'>
      <div className='flex flex-col gap-4'>
        {formControls.map((controlItem) => (
          <div className='grid w-full gap-2' key={controlItem.name}>
            <label className='text-gray-700 font-medium text-left'>{controlItem.label}</label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <button
        type='submit'
        className='mt-4 w-full bg-slate-500 text-white py-2 px-4 rounded-lg hover:bg-slate-400 transition'
      >
        {buttonText || 'Submit'}
      </button>
    </form>
  )
}
