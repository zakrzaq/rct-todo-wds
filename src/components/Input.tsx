type Props = {
  label: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const Input = ({ label, onChange }: Props) => {
  return (
    <>
      <label htmlFor={label} className="flex flex-col max-w-md mb-4">
        <span className="text-slate-500 mb-2 font-bold">{label}</span>
        <input className='border-slate-500 border rounded-s px-4 py-1' type="text" id={label} onChange={onChange} />
      </label>
    </>
  )
}

export default Input

