const router = createBrowserRouter([
    {
      
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
          
            {
                path: '*',
                element: <DisplayError></DisplayError>

            }
        ]
    },
  
export default router;