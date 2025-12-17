import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Logged from './Day44/Task-1'
import PremiumUseer from './Day44/Task-2'
import City from './Day44/Task-3'
import Prop from './Day44/Task-4'
import EmptyArray from './Day44/Task-5'
import TodoList from './Day44/Task-6'
import TodoList2 from './Day44/Task-7'
import naList2 from './Day44/Task-7'
import UserList from './Day44/Task-8'
import NotificationBadge from './Day44/Task-9'
import AttendanceList from './Day44/Task-10'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logged/>
    <hr />
    <PremiumUseer/>
    <City/>
    <Prop/>
    <EmptyArray/>
    <TodoList/>
    <naList2/>
    <hr />
    <UserList/>
    <NotificationBadge/>
    <AttendanceList/>
 
    </>
  )
}
