import './App.css'
import Header from './components/Header'
import BodyContainer from './components/BodyContainer'
import AppStateContextProvider from './context/AppState'

const App = () => (
    <AppStateContextProvider>
        <div className='App'>
            <Header title={'Tree Traversal'} />
            <BodyContainer bodyMessage='' />
        </div>
    </AppStateContextProvider>
)

export default App
