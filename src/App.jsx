import React from 'react'
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/root';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App

/**
   const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel='noreferrer'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  )

 */