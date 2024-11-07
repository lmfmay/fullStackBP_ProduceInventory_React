import './App.css'
import FilterableTable from './pages/FilterableTable'
import CreateForm from './pages/CreateForm'
import UpdateForm from './pages/UpdateForm'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<FilterableTable/>}/>
      <Route path='/addProduce' element={<CreateForm/>}/>
      <Route path='/updateProduce/:id' element={<UpdateForm/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
