
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './Pages/Project';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import FooterComponent from './component/FooterComponent';
import PrivateRoute from './component/OnlyAdminPrivateRoute';
import CreatePost from './Pages/CreatePost';
import OnlyAdminPrivateRoute from './component/OnlyAdminPrivateRoute';
import PostPage from './Pages/PostPage';
import CallToAction from './component/CallToAction';


function App() {


  return (


    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route  element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard />} />
          
        </Route>
        <Route  element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost />} />
          
        </Route>



        <Route path='/projects' element={<Project />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<Signin />} />

      </Routes>

      <FooterComponent />

    </BrowserRouter>


  )
}

export default App
