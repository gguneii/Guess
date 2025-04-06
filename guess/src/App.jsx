import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Main from './components/main/Main'

function App() {
  return (
    <>  
        <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/menu' />
          </Route>
        </Routes>
    </>
  )
}

export default App