import { 
  QueryClient,
  QueryClientProvider 
} from '@tanstack/react-query'
import './App.css'
import Form from './components/Form'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className="container">
        <h1 className="text-3xl font-bold mb-5">
          Logo estimator
        </h1>
        <Form />
      </main>
    </QueryClientProvider>
  )
}

export default App
