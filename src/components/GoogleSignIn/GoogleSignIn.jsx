import { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import './GoogleSignIn.css'; 

const GoogleSignIn = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  

  return (
    <div className="google-signin-container">
      {user ? (
        <div className="user-info">
          <div className="user-details">
            <p className="user-name">Hola, {user.displayName}</p>
            <button onClick={handleLogout} className="logout-btn">
              Cerrar sesión
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleLogin} className="login-btn">
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
};

export default GoogleSignIn;
