import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'register',
    element:<Register></Register>
  },
  {
    path:'login',
    element:<Login></Login>
  },
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
