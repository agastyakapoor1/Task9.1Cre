import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import PostPage from './PostPage';
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentView, setCurrentView] = useState('');
  const [user, setUser] = useState(null); 

  const showLogin = () => setCurrentView('login');
  const showSignUp = () => setCurrentView('signup');
  const redirectToHome = () => setCurrentView('home');
  const showPostPage = () => setCurrentView('post');


  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user); 
    });
  }, []);

  const signOutUser = () => {
    auth.signOut()
      .then(() => {
        setUser(null); 
        setCurrentView('home'); 
        alert("Successfully signed out!");
      })
      .catch((error) => {
        alert("Sign out failed. Please try again.");
      });
  };

  return (
    <div>
      <Header
        showLogin={showLogin}
        showPostPage={showPostPage}
        user={user} 
        signOutUser={signOutUser} 
      />
      {currentView === 'login' && <Login showSignUp={showSignUp} redirectToHome={redirectToHome} />}
      {currentView === 'signup' && <SignUp showLogin={showLogin} />}
      {currentView === 'home' && <h1>Welcome to the Home Page!</h1>}
      {currentView === 'post' && <PostPage />}
    </div>
  );
}

export default App;
