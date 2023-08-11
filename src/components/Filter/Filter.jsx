import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const inputHandle = ({ target }) => dispatch(setFilter(target.value.trim()));

  return (
    <div>
      <p className="contact-list-title global-p">Find contacts by name</p>
      <div className="input-box">
        <input type="text" onChange={inputHandle} />
      </div>
    </div>
  );
}