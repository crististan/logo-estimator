import { useState } from 'react'
import { 
  QueryClient,
  QueryClientProvider 
} from '@tanstack/react-query'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import Intro from './components/Intro'

function App() {
  // const [count, setCount] = useState(0)
  // const {loading, data, error} = useFetch("https://jsonplaceholder.typicode.com/albums"); //http://localhost/logo-estimator/data/data.json

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* <h1>Logo estimator</h1>
      {loading && 'Loading...'}
      {JSON.stringify(data)} */}
      <Intro />
    </QueryClientProvider>
  )
}

export default App
