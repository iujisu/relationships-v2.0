import React from 'react';
import './App.css' ;
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './pages/Login';
import MyRelationships from './pages/MyRelationships';
import Signup from './pages/Signup';

const styles = {
  Body:{
    display:"flex",
    justifyContent: "center",
  }
}
const App = () => {
  return (
    <div>
      <Header/>
      <div className="BodyLeyout" style={styles.Body}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/myRelationships" component={MyRelationships} />
            <Route path="/signup" component={Signup} />
            <Redirect from="/" exact to="/login" />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
