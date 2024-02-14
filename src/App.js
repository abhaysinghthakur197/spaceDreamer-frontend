import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Welcome from './component/Home/Welcome'
import News from './component/Home/SpaceNews/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addnews from './component/Addnews/Addnews';
import SignUp from './component/Signup/Signup'
import SignIn from './component/Signin/Signin'
import ArticleView from './component/ArticleView/ArticleView'

import { AuthProvider } from './component/auth/AuthContext';

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <div className='bg-black'>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Welcome />} />

              <Route path='/news' element={<News />} />

              <Route path='/addnews' element={<Addnews />} />

              <Route path='/Signup' element={<SignUp />} />

              <Route path='/Signin' element={<SignIn />} />
              
              <Route path="/article/:id" element={<ArticleView authed={true} />} />
            </Routes>
          </AuthProvider>
        </div>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
