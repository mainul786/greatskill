import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {path:'/',
element:<Main></Main>,
children:[
  {
    path:'/',
    element:<Home></Home>
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
