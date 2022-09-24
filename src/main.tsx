import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, useRoutes, useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from '~react-pages'
import { useLocalStorageWallet } from './hooks/useLocalStorageWallet'

const App = () => {
  const navigation = useNavigate()
  useLocalStorageWallet()
  
  useEffect(()=>{
    const path = localStorage.getItem('path')
    if (path) {
      localStorage.removeItem('path')
      navigation(path)
    }
  }, [])

  return <Suspense fallback={<p>Loading...</p>}>
    <div className='h-screen w-screen'>{useRoutes(routes)}</div>
  </Suspense>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
