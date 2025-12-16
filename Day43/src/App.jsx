
import './App.css'
import HelloStudent from './Day43/Task-1'
import StudentInfo from './Day43/Task-2'
import Message from './Day43/Task-3'
import Button from './Day43/Task-4'
import Card from './Day43/Task-5'
import Profile from './Day43/Task-6'
import imag from './assets/dhoni.jpg'
import Button2 from './Day43/Task-7'
import ProductItem from './Day43/Task-8'
import Layout from './Day43/Task-9'
import App3456 from './Day43/Task-10'




function App() {

  return (
    <>
    <HelloStudent/>
    <hr />
    <StudentInfo name="Naresh" age="21"/>
    <hr /> 
    <Message/>
     <Button/>
     <Card/>
     <Profile name='Naresh.V' job='Developer' imag={imag}/>
     <hr />
     <Button2 />                <Button2 />               <Button2 />
     <hr />
          <ProductItem title="Wireless Headphones" price={99.99} />
      <ProductItem title="Mechanical Keyboard" price={149.0} />
      <ProductItem title="USB-C Hub" price={39.99} currency="€" />
      <hr />
      <Layout/>
      <ProductItem title="Laptop" price={999.99} />
      <ProductItem title="Monitor" price={299.99} />
      <hr />
      <App3456/>






      
    </>
  )
}

export default App;
