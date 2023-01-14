import './App.css';
import DashBoardHOC from './Pages/Dashboard/DashBoardHOC';
import SearchHOC from './Pages/Search/SearchHOC';
import DashBoard from './Pages/Dashboard/DashBoard';
import Search from './Pages/Search/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="app">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardHOC DashBoard={DashBoard}/>}/>
        <Route path="search" element={<SearchHOC Search={Search}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
