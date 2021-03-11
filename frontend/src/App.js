import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import HomeScreen from "./screens/HomeScreen"
// import RegisterScreen from "./screens/RegisterScreen"
import LoginScreen from "./screens/LoginScreen";
// import ProfileScreen from "./screens/ProfileScreen"

const App = () => {
   return (
      <Router>
         <Header />
         <Route path="/login" component={LoginScreen} />
         {/*<Route path='/register' component={RegisterScreen} />
     <Route path='/profile' component={ProfileScreen} />
     <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact /> */}
         hodor
      </Router>
   );
};

export default App;
