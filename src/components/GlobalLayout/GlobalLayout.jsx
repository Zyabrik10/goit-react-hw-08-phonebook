import  Header from "components/Header/Header"
import { Outlet } from "react-router-dom"
import css from './main.module.css';

import { selectAuth } from "redux/auth/auth-selector";
import { UserSideMenu } from "components/UserSideMenu/UserSideMenu";
import { useSelector } from "react-redux";

export default function GlobalLayout() {
    const { isLogedIn } = useSelector(selectAuth);

    return (
        <>
            {isLogedIn ? <UserSideMenu/> : null}
            <Header />
            <main className={css['main']}>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}