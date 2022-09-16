import React from 'react';
import Home from './Home/Home';
import SignUp from './comps/SignUp';
import { Container } from 'react-bootstrap';
import AuthProvider from './contexts/AuthContext';
import { Routes, Route} from 'react-router-dom';
import Login from './comps/Login';
import PrivateRoute from './comps/PrivateRoute';
import ForgotPassword from './comps/ForgotPassword';

function App() {

  return (
      <>
            
          <AuthProvider>
            <Routes>
                <Route element = { <PrivateRoute />}>
                  <Route exact path = "/" element = { <Home /> } />
                </Route>
                <Route exact path = "/signUp" 
                  element = {<Container  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                  ><div className="w-100" style={{ maxWidth: "400px" }}><SignUp/></div></Container> }/>
                <Route exact path = "/login" element = {<Container  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                  ><div className="w-100" style={{ maxWidth: "400px" }}><Login/></div></Container> }/>
                <Route exact path = "/forgot-password" element = {<Container  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                  ><div className="w-100" style={{ maxWidth: "400px" }}><ForgotPassword/></div></Container> } />
            </Routes>
          </AuthProvider>
         
      </>
  );
}

export default App;
