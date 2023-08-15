import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './HookApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

import './index.css'
import { SimpleForm } from './02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SimpleForm />
  // </React.StrictMode>,
)
