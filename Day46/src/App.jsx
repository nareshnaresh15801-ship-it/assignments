import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Day46/Task-1'
import Example2 from './Day46/Task-2'
import Counter from './Day46/task-3'
import NameInput from './Day46/Task-4'
import TitleCounter from './Day46/Task-5'
import LiveClock from './Day46/Task-6'
import GitHubUser from './Day46/Task-7'
import SearchUsers from './Day46/Task-8'
import CharacterCounter from './Day46/Task-9'
import ThemeSwitcher from './Day46/Task-10'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Example/>
     <Example2/>
     <Counter/>
     <NameInput/>
     <TitleCounter/>
     <LiveClock/>
     <GitHubUser/>
     <SearchUsers/>
     <CharacterCounter/>
     <ThemeSwitcher/>



    </>
  )
}

export default App
