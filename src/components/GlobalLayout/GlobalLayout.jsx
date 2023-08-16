import  Header from "components/Header/Header"
import { Outlet } from "react-router-dom"

import { selectAuth } from "redux/auth/auth-selector";
import { UserSideMenu } from "components/UserSideMenu/UserSideMenu";
import { useSelector } from "react-redux";

export default function GlobalLayout() {
    const { isLogedIn } = useSelector(selectAuth);

    return (
        <>
            {isLogedIn ? <UserSideMenu/> : null}
            <Header />
            <main style={{padding:"20px 0"}}>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}