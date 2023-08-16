import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './HookApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

import './index.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MultipleCustomHooks />
  // </React.StrictMode>,
)
