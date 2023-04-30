import './App.css'
import Header from '../ToolBar/Header'
import FilterForm from '../FilterForm/FilterForm'
import DataTable from '../DataTable/DataTable'
import Pagination from '../Pagination/Pagination'

function App() {

  return (
    <>
    <Header />
    <FilterForm />
    <DataTable />
    <Pagination />
    </>
  )
}

export default App
