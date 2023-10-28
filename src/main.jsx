import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from "./store/store.js"
import { AuthLayout} from './components/index.js'
import Signup from "./Pages/Signup.jsx";
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import AddPost from "./Pages/AddPost.jsx"
import AllPosts from './Pages/AllPost.jsx'
import Post from './Pages/Post.jsx'
import EditPost from "./Pages/Post.jsx"
import { Provider } from 'react-redux'



const router = createBrowserRouter([


  {
    path:"/",
    element:<App/>,
    children:[
          {
            path:"/",
            element: <Home/>,
          },
          {
            path:"/login",
            element:(
              <AuthLayout authentication={false}>
                <Login/>
                </AuthLayout>
            ),

          },
          {
            path:"/signup",
            element:(
              <AuthLayout authentication={false}>
                    <Signup/>
                    </AuthLayout>
            )
          },
          {
            path:"/all-posts",
            element:(
              <AuthLayout authentication={true}>
                {" "}
                <AllPosts/>
              </AuthLayout>
            )
          },
          {
            path:"/add-post",
            element:(
              <AuthLayout>
                {" "}
                <AddPost/>
              </AuthLayout>
            )
          },
          {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost/>
                </AuthLayout>
            ),
        },
        {
          path: "/post/:slug",
          element: <Post />,
      },
      
    ]   
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
  <RouterProvider router={router}/>
 </Provider>
  </React.StrictMode>,
)
