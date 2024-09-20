import { createRoot } from 'react-dom/client'
import './index.css'
import App from './TodoApp/App'

createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
