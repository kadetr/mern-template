import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUser } from "../actions/userActions";
import UserListAdmin from "../components/UserListAdmin";

const UserListScreen = () => {
   const dispatch = useDispatch();

   const userList = useSelector((state) => state.userList);
   const { loading, error, users } = userList;

   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   const userDelete = useSelector((state) => state.userDelete);
   const { success: successDelete } = userDelete;

   useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
         dispatch(listUsers());
      } else {
         history.push("/login");
      }
   }, [dispatch, history, successDelete, userInfo]);

   const deleteHandler = (id) => {
      if (window.confirm("Are you sure")) {
         dispatch(deleteUser(id));
      }
   };

   return <UserListAdmin submitHandler={submitHandler} />;
};

export default UserListScreen;
