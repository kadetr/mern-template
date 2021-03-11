import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Message from '../components/Message'
// import Loader from '../components/Loader'

import { login } from "../actions/userActions";
import Login from "../components/Login";

const LoginScreen = ({ location, history }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   //    const dispatch = useDispatch();

   //    const userLogin = useSelector((state) => state.userLogin);
   //    const { loading, error, userInfo } = userLogin;

   //    const redirect = location.search ? location.search.split("=")[1] : "/";

   //    useEffect(() => {
   //       if (userInfo) {
   //          history.push(redirect);
   //       }
   //    }, [history, userInfo, redirect]);

   //    const submitHandler = (e) => {
   //       e.preventDefault();
   //       dispatch(login(email, password));
   //    };

   return <Login />;
};

export default LoginScreen;
