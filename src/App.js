import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'*',
        element:<PageNotFound></PageNotFound>
      }
    ]
  }
])

function App() {


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
