import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sign from './Sign/Sign.jsx'
import About from './About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Review from './Review/Review.jsx'
import Price from './Price/Price.jsx'
import { FirebaseProvider } from './context/Firebase.jsx'  // Import FirebaseProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "Sign",
        element: <Sign />
      },
      {
        path: "review",
        element: <Review />
      },
      {
        path: "/price",
        element: <Price />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider> {/* Wrap the entire app with FirebaseProvider */}
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
