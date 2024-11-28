import { Avatar, Button, Navbar,Dropdown } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/theme/themeSlice.js';
import { signoutSuccess } from './redux/user/userSlice.js';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Blog<span className="text-yellow-300">Flow</span>.com
        </Link>
      </div>

      {/* Theme Toggle Button */}
      <div className="flex items-center gap-4 ml-auto md:order-2">
        <Button
          className="w-10 h-10 flex items-center justify-center bg-white text-indigo-600 rounded-full shadow hover:bg-gray-200"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun size={18} /> : <FaMoon size={18} />}
        </Button>

        {/* User Profile or Sign-In Button */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentUser.profilePicture}
                rounded
                className="border-2 border-white"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              gradientDuoTone="purpleToBlue"
              className="text-white font-medium"
            >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} className="text-white font-medium">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/about'}
          className="text-white font-medium"
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/projects'}
          className="text-white font-medium"
        >
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}