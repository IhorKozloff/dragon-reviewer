import { Header, Footer } from "components";
import { Outlet } from "react-router-dom";




export const Layout = () => {


    return (
        <>
            <Header/>

            <main>
                <Outlet/>
            </main>
            
            <Footer/>
        </>
    )
}