import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[{
      path: '/',
      element:<Home></Home>
    },{
      path: '/listedBooks',
      element:<ListedBooks></ListedBooks>,
      loader:()=>fetch('../books.json')
    },{
      path:'/pagesToRead',
      element:<PagesToRead></PagesToRead>
    },{
      path: '/book/:id',
      element:<BookDetails></BookDetails>,
      loader:()=> fetch('../books.json')
      
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
