
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-title' >
       infobae
      </div>
      <GoogleSignIn/>
    </div>
  );
};

export default Navbar;
