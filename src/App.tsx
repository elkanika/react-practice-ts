import Button from "./components/button"
import Counter from "./components/Counter"
import './App.css'

function greet(name: string): string {
  return `hola ${name}`
}

function App() {
  const handleClick = () => alert("Ya estoy clickeado!")
  console.log(greet("Ezequiel"))

  return (
    <>
      <Button onclick={handleClick} label={"Click me"}/>
      <Counter />
    </>
  )
}

export default App
