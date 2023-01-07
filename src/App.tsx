import './App.css';
import DashBoardHOC from './Pages/Dashboard/DashBoardHOC';
import SearchHOC from './Pages/Search/SearchHOC';
import DashBoard from './Pages/Dashboard/DashBoard';
import Search from './Pages/Search/Search';


function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
   {/* <DashBoardHOC DashBoard={DashBoard}/> */}
   <SearchHOC Search={Search}/>
    </div>
  );
}

export default App;
