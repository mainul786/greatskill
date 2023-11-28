import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Courses from './pages/Courses/Courses';
import Topic from './pages/Topic/Topic';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch(`http://localhost:5000/topic`)
      },
      {
        path:'/courses/:id',
        element:<Courses></Courses>,
        loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path:'/topic/:id',
        element:<PrivateRoute><Topic></Topic></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/topic/${params.id}`)
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
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
