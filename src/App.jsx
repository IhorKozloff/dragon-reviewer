import { Routes, Route } from "react-router-dom";
import PrivateRoute from "routes/privateRoutes";
import PublicRoute from "routes/publicRoutes";
import { Layout, HomePage, OtherRocketDetailsPage, LoginPage, RegisterPage, FavoritesPage, ErrorPage, UserProfilePage } from "Pages";






export const App = () => {
 
  
  return (


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

  );
}

