import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import { LayoutContainer } from './styled-components'

function App() {

  return <div className='App'>
    <NavBar/>
    <LayoutContainer>
      <Home/>
    </LayoutContainer>
  </div>
}

export default App
