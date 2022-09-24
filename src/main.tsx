import React, { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import './index.css'
import routes from '~react-pages'

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
