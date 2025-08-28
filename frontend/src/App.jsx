import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import useAuth from "./hooks/userHooks/useAuth";
import FriendRequestPage from "./pages/FriendRequestPage";
import ChatPage from "./pages/ChatPage";
import useSocketHook from "./hooks/socketHook/useSocketHook";



const App = () => {
  const { authUser, isLoading } = useAuth()
  // const { connectSocket } = useSocketHook()

  // useEffect(() => {
  //   if (authUser?._id) {
  //     connectSocket(authUser._id); // reload pe socket auto connect
  //   }
  // }, [authUser]);
  const isAuthenticated = Boolean(authUser)
  if (isLoading) return <p>Loading...</p>
  return (
    <div>
      
      <Routes>
        <Route path="/" element={ isAuthenticated ? <HomePage />: <Navigate to = "/login"/>} />
        <Route path="/login" element={ !isAuthenticated ? <LoginPage />: <Navigate to ="/"/>} />
        <Route path="/signUp" element={ !isAuthenticated ? <SignUpPage />: <Navigate to ="/"/> } />
        <Route path="/profile" element={ isAuthenticated ? <ProfilePage />: <Navigate to = "/login"/>} />
        <Route path="/friendreqs" element={ isAuthenticated ? <FriendRequestPage />: <Navigate to = "/login"/>} /> 
        <Route path="/chat/:friendId" element={ isAuthenticated ? <ChatPage />: <Navigate to = "/login"/>} /> 
        {/* <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={  <LoginPage />} />
        <Route path="/signUp" element={  <SignUpPage />} />
        <Route path="/profile" element={  <ProfilePage />} />
        <Route path="/friendreqs" element={  <FriendRequestPage />} />
        <Route path="/chat" element={  <ChatPage />} /> */}
      </Routes>
    </div>
  );
};

export default App

