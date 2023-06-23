type Props = {
  children: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button = ({ children, onClick  }: Props) => {
  return (
    <button className='px-4 py-2 border-slate-500 border rounded-s bg-transparent max-w-md' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
