import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Main from './components/main/Main'
import AllProducts from './components/main/AllProducts'

function App() {
  return (
    <>  
        <Routes future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/product/all/:catId' element= {<AllProducts />} />
            <Route path='/product/:subId' element= {<AllProducts />} />
          </Route>
        </Routes>
    </>
  )
}

export default App