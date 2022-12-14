import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/organisms/layout/Sidebar"
import { HeaderLayout } from "../components/templates/HeaderLayout"

export const MainLayout = () => {
    return (
        <>
            <HeaderLayout>
                <Sidebar>
                    <Outlet />
                </Sidebar>
            </HeaderLayout>



        </>
    )
}