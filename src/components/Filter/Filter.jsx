import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-reducer';
import { TextField } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch();
  const inputHandle = ({ target }) => dispatch(setFilter(target.value.trim()));

  return (
    <div>
        <TextField
          label="Find contact"
          variant="outlined"
        onChange={inputHandle}
        style={{width:"100%"}}
        />
    </div>
  );
}
