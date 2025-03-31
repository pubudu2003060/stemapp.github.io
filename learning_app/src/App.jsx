import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Error from "./pages/Error.jsx";
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';
import Logout from './pages/Logout.jsx';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="student" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="courses" element={<Courses/>}/>
                    <Route path="SignIn" element={<SignIn/>}/>
                    <Route path="SignUp" element={<SignUp/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="logout" element={<Logout/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
