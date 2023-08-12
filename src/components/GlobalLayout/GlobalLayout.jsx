import  Header from "components/Header/Header"
import { Outlet } from "react-router-dom"

export default function GlobalLayout() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}