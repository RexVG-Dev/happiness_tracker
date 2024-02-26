import { Provider } from 'react-redux'
import './App.css'
import { NavBar } from './components'
import { Home } from './pages'
import { LayoutContainer } from './styled-components'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <NavBar/>
        <LayoutContainer>
          <Home/>
        </LayoutContainer>
      </div>
    </Provider>
  )
}

export default App
