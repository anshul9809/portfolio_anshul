import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section>
          <Navbar />
        </section>
        <section><button>chcecut</button></section>
        <section>2</section>
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <section>6</section>
      </div>
    </>
  )
}

export default App
