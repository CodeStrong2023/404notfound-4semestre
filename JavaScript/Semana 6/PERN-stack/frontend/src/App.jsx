import { Route, Routes,} from "react-router-dom"
import {Container} from ".Components/ui/Container"

import { ProtectedRoute } from "./components/ProtectedRoute"

import { useAuth } from "./context/AuthContext"
import {TareasProvider} from "./context/TareasContext";

import HomePage from './pages/HomePage'

import { Routes, Route, Outlet } from "react-router-dom";

import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareaFormPage from './pages/TareaFormPage'
import NotFound from "./pages/NotFound"
import Navbar from "./components/navbar/NavBar"

function App() {

  const {isAuth, loading} = useAuth();
  console.log(loading);

  if (loading){
    return <h1>Cargando...</h1>;
  }
  

  return (
    <>
   <Navbar/>
   <Container className="p-5">
   <Routes>
        <Route element= {<ProtectedRoute isAllwed={!isAuth} redirectTo="tareas"/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Route>

      <Route element= {<ProtectedRoute isAllwed={isAuth}redirectTo="/login"/>}>
        <Route path='/perfil' element={<ProfilePage/>} />
        
        <Route element={
          <TareasProvider>
          <Outlet/>
          </TareasProvider>
        }
        >
          <Route path='/tareas' element={<TareasPage/>} />
          <Route path='/tareas/crear' element={<TareaFormPage/>} />
          <Route path='/tareas/:id/editar' element={<TareaFormPage/>} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </Container>

    </>

    
  )
}

export default App
