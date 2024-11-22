import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrPage from './ErrPage';
import Root from './components/Root';
import Login from './components/Login';
import Registration from './components/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './AuthProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
