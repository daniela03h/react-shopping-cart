import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Prueba tecnica de React -
        <span>@pistacho</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}