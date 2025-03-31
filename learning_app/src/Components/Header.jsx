import { Link } from "react-router-dom";
import { useState } from "react";

function Course() {


    const [isLogin, setIsLogin] = useState(false);

    return (
        <header className="w-full">
  {/* Upper header section */}
  <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between p-4">
    {/* Left side: logo and main navigation */}
    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
      <div className="header-main-image mr-4">
        <img src="#" alt="logo" className="w-16 h-16" />
      </div>
      <nav className="flex-1">
        <ul className="flex flex-wrap space-x-4">
          <li>
            <Link to="/student" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/student/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/student/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/student/courses" className="hover:text-blue-500">
              STEM
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    {/* Right side: account links */}
    {isLogin ? (
      <div className="account">
        <ul className="flex space-x-4">
          <li>
            <Link to="/student/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/student/logout" className="hover:text-blue-500">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    ) : (
      <div className="account">
        <ul className="flex space-x-4">
          <li>
            <Link to="/student/SignIn" className="hover:text-blue-500">
              Login
            </Link>
          </li>
          <li>
            <Link to="/student/SignUp" className="hover:text-blue-500">
              Register
            </Link>
          </li>
        </ul>
      </div>
    )}
  </div>

  {/* Lower header section */}
  <div className="bg-blue-100 p-2">
    <nav>
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/student" className="hover:text-blue-700">
            Science
          </Link>
        </li>
        <li>
          <Link to="/student/contact" className="hover:text-blue-700">
            Technology
          </Link>
        </li>
        <li>
          <Link to="/student/about" className="hover:text-blue-700">
            Engineering
          </Link>
        </li>
        <li>
          <Link to="/student/courses" className="hover:text-blue-700">
            Maths
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>

    )
}

export default Course;