import  Header from "components/Header/Header"
import { Outlet } from "react-router-dom"
import mainStyle from './main.module.css';

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