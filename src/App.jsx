import { useState } from 'react'
// import './App.css'
import {CommentsList} from './Components/CommentsList/coments_list'
import './Components/CommentsList/coments_list.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommentsList/>
    </>
  )
}

export default App
