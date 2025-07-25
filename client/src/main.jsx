import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Login from './pages/Authentication/Login.jsx';
import Signup from './pages/Authentication/Signup.jsx';
import { store } from './store/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Signup/>
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
  <RouterProvider router={router}/>
  </Provider>

)
