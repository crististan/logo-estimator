import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const [count, setCount] = useState(0)
  const {loading, data, error} = useFetch("http://localhost/logo-estimator/data/data.json");

  return (
    <>
      <h1>Logo estimator</h1>
      {loading && 'Loading...'}
      {JSON.stringify(data)}
    </>
  )
}

export default App
