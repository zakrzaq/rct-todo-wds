import { useState } from 'react'

import Button from './components/Button'
import Input from './components/Input'
import Todo from './components/Todo'

import { Item } from './types'


const App = () => {
  const [newItem, setNewItem] = useState('')
  const [items, setItems] = useState<Item[] | []>([])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>  setNewItem(e.target.value)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>  {
    e.preventDefault()
    const item: Item = {
      id: Math.random(),
      title: newItem,
      complete: false,
    }
    setItems(prevItems => [...prevItems, item])
    setNewItem('')
  }

  return (
    <form action="" className='flex flex-col'>
      <div className="flex flex-col">
        <Input label="New Item" onChange={handleInput} value={newItem} />
      </div>
      <Button onClick={handleClick}>Add</Button>
      <div>
        <h2>Todo List</h2>
        <ul>
          {items.map((item: Item) => <Todo key={item.id} item={item} />)}
        </ul>
      </div>
    </form>
  )
}

export default App
