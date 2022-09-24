import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, useRoutes, useNavigate } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import './index.css'
import routes from '~react-pages'

const App = () => {
  const navigation = useNavigate()
  useEffect(()=>{
    const path = localStorage.getItem('path')
    if (path) {
      localStorage.removeItem('path')
      navigation(path)
    }
  }, [])

  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
