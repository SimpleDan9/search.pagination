import { Route, Routes, Link } from "react-router-dom"
import Search from "./pages/search"
import Pagination from "./pages/pagination"


function App() {


  return (
    <>
     <div>
        <div className="container ">
        <div className="flex gap-[15px] py-3 w-full  ">
          <Link to="/">Search</Link>
          <Link to="/pagination">Pagination</Link>
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/pagination" element={<Pagination/>}/>
        </Routes>
      </div>
     </div>
    </>
  )
}

export default App
