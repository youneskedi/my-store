import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import Layout, { AppContext } from "./layout/Layout";
import RegisterPage from "./pages/Register/Register";
import LoginPage from "./pages/login/Login";
import UserDetailsPage from "./pages/UserDetails";
import NoPage from "./pages/NoPage";
import Dashboard from "./dashboard/dashboard"
import MyOrdersPage from "./pages/orders/MyOrdersPage"
import Users from "./dashboard/pages/users"
import { createContext, useContext, useState } from "react";
import Product from "./dashboard/pages/prodects";
import AddProduct from "./dashboard/pages/Addproudect";
import AllOrders from "./dashboard/pages/allorders";
import AllCategoires from "./dashboard/pages/AllGategiers";
import AddCategories from "./dashboard/pages/AddCategiers";
import UpdateProudect from "./dashboard/pages/updateProudect";
import AddUser from "./dashboard/pages/AddUser";
import Updateorder from "./dashboard/pages/updateorder";
import Home from "./dashboard/pages/home";


export const AuthContext = createContext(false)

export default function MyApp() {
    const [authState, setAuthState] = useState(false)
    
    // console.log(appContext.appState?.user)
    return <AuthContext.Provider value={{ authState, setAuthState}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                   
                   
                    {
                       authState?
                            <>
                                <Route path="user" element={<UserDetailsPage />} />
                                <Route path="orders" element={<MyOrdersPage />} />
                            </>
                            :
                            <>
                                <Route path="register" element={<RegisterPage />} />
                                <Route path="login" element={<LoginPage />} />
                            </>
                    }

                    <Route path="*" element={<NoPage />} />
                </Route>
        {/* <Route element={<Requerauth/>}/> */}
        
            <Route path="/Dashboard" element={<Dashboard/>}>
            {/* { */}
                // authState?
                // <>
                 <Route  index path="Home" element={<Home/>} />
            <Route path="Users" element={<Users/>} />
            <Route path="AddUser" element={<AddUser/>} />
            <Route path="Proudect" element={<Product/>} />
            <Route path="AddProudect" element={<AddProduct/>}/>
            <Route path="Updateproudect/:id" element={<UpdateProudect/>} />
            <Route path="Allorders" element={<AllOrders/>} />
            <Route path="Updateorder/:id" element={<Updateorder/>} />
            //
            <Route path="AllCategories" element={<AllCategoires/>} />
            <Route path="AddCategories" element={<AddCategories/>} />
            
        
                // </>
                // :<>
                //   <Route path="login" element={<LoginPage />} />
                // </>
            {/* } */}
            
        </Route>
            </Routes>
        </BrowserRouter>
    </AuthContext.Provider>
}