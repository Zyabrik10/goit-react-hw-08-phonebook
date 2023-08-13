import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/auth/auth-selector";
import { logOut } from "redux/auth/auth-operations";
import css from './user-menu.module.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user, token } = useSelector(selectAuth);
    const navigate = useNavigate();

    function buttonHandler(e) {
        e.preventDefault();
        dispatch(logOut(token));
        navigate("/")
    }
    return (
        <div className={`${css['user-menu']}`}>
            <p className="global-p">{user.email}</p>
            <Button variant="outlined" onClick={buttonHandler}>Log out</Button>
        </div>
    );
}