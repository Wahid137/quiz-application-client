const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
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
                path: '/category/:type',
                element: <PrivateRoute><CategoryCards></CategoryCards></PrivateRoute>,
                loader: ({ params }) => fetch(`https://resale-market-server-wahid137.vercel.app/category/${params.type}`)

            },
            {
                path: '*',
                element: <DisplayError></DisplayError>

            }
        ]
    },
  
export default router;