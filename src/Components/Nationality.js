import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Nationality() {
  const [nationality, setNationality] = React.useState('US');

  const handleChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <div className='Nationality'>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className="NationalityForm">
        <InputLabel id="demo-simple-select-filled-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={nationality}
          onChange={handleChange}
        >
          <MenuItem value={"US"}>US</MenuItem>
          <MenuItem value={"Canada"}>Canada</MenuItem>
        </Select>
      </FormControl>
    <div id='nationalityText'>
        <h1>Order groceries for delivery <br></br>or pickup today</h1>
        <p>Whatever you want from local stores, brought right to your door.</p>
    </div>
    </div>
  );
}



export default Nationality;