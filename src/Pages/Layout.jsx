import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar"

function Layout(){
    return(
        <>
                <NavBar></NavBar>
                <Outlet></Outlet>
                </>

    )
}
export default Layout