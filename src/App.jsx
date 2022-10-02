import {lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "routes/privateRoutes";
import PublicRoute from "routes/publicRoutes";
import { Loader } from "components";
import  Layout from "Pages/Layout";
//import  HomePage from "Pages/HomePage";
//import OtherRocketDetailsPage from 'Pages/OtherRocketDetailsPage'; 
//import LoginPage from "Pages/LoginPage";
//import RegisterPage from "Pages/RegisterPage";
//import FavoritesPage from "Pages/FavoritesPage"; 
//import ErrorPage from "Pages/ErrorPage";
//import UserProfilePage from "Pages/UserProfilePage";

const HomePage = lazy(() => import('Pages/HomePage'));
const OtherRocketDetailsPage = lazy(() => import('Pages/OtherRocketDetailsPage'));
const LoginPage = lazy(() => import('Pages/LoginPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage'));
const FavoritesPage = lazy(() => import('Pages/FavoritesPage'));
const UserProfilePage = lazy(() => import('Pages/UserProfilePage'));
const ErrorPage = lazy(() => import('Pages/ErrorPage'));




export const App = () => {
 
  
  return (

<Suspense fallback={<Loader/>}>
    <Routes>

      <Route path='/' element={<Layout/>}>

        <Route index element={<HomePage/>}/>

        <Route path='more/:rocketId' element={<OtherRocketDetailsPage/>}/>

        <Route 
          path='wishlist'
          element={
            <PrivateRoute >
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        
        <Route 
          path='login' 
          element={
            <PublicRoute >
              <LoginPage/>
            </PublicRoute>
          }
        />
        <Route 
          path='register' 
          element={
            <PublicRoute >
              <RegisterPage/>
            </PublicRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />

        <Route 
          path='profile'
          element={
            <PrivateRoute >
              <UserProfilePage/>
            </PrivateRoute>
          }
        />
      </Route>

      
      
    </Routes>
    </Suspense>

  );
}

