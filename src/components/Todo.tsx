import { Item } from '../types'
type Props = {
  item:  Item,
}

const Todo = ({ item }: Props) => {

  return (
    <li className="flex max-w-md">
      <label>
        <input type="checkbox" />
        <span>{item.title}</span>
      </label>
      <button>Delete</button>
    </li>
  )
}

export default Todo
