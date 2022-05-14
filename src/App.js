import './App.css';
import { Footer } from './components/footer/Footer';
import { HomePage } from './components/homePage/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Profile';
import { useSelector } from 'react-redux';
import { TabPannel } from './components/tabPannel/TabPannel';

function App() {

  const user = useSelector(state => state.loggedInUser)

  return (
    <div className="App">
      <Router>
          {
            user ?
                <div className='main-home-page'>
                  <Routes>
                      <Route path='/profile' exact element={<Profile />}/> 
                      <Route path='/' exact element ={<Home/>}/>
                  </Routes>
                </div>
            : <div>
                    <HomePage />
                    {/* <TabPannel /> */}
                    <Footer />
            </div> 
          }
      </Router>
    </div>
  );
}

export default App;
