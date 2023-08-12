import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/auth/auth-selector";
import { logOut } from "redux/auth/auth-operations";
import css from './user-menu.module.css';
import Button from '@mui/material/Button';


export default function UserMenu() {
    const dispatch = useDispatch();
    const { user, token } = useSelector(selectAuth);

    function buttonHandler(e) {
        e.preventDefault();
        dispatch(logOut(token));
    }
    return (
        <div className={`${css['user-menu']}`}>
            <p className="global-p">{user.email}</p>
            <Button variant="outlined" onClick={buttonHandler}>Log out</Button>
        </div>
    );
}