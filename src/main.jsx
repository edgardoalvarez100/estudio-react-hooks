import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './HookApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'

import './index.css'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FormWithCustomHook />
  // </React.StrictMode>,
)
