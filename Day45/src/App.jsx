import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingInput from './Day45/Task-1'
import UppercaseInput from './Day45/Task-2'
import ControlledCheckbox from './Day45/Task-3'
import CountrySelect from './Day45/Task-4'
import PasswordMatch from './Day45/Task-5'
import LoginForm from './Day45/Task-6'
import Appna from './Day45/Task-7'
import ProfileUpdateForm from './Day45/Task-8'
import ValidatedForm from './Day45/Task-9'
import FeedbackForm from './Day45/Task-10'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GreetingInput/>
     <UppercaseInput/>
      <ControlledCheckbox/>
      <CountrySelect/>
      <PasswordMatch/>
      <LoginForm/>
      < Appna/>
      <ProfileUpdateForm/>
      <ValidatedForm/>
      <FeedbackForm/>

    </>
  )
}

export default App
