import React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const QuantityDropdownField = ({ onQuantityChange, day, price, type }) => {
  const handleChange = (event) => {
    // Pass the selected quantity and day to the parent component
    onQuantityChange({
      quantity: event.target.value,
      day: day,
      price: price,
      type: type,
    });
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id={`demo-customized-select-label-${day}`}>Quantity</InputLabel>
        <Select
          labelId={`demo-customized-select-label-${day}`}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {[...Array(10).keys()].map((num) => (
            <MenuItem key={num + 1} value={num + 1}>{num + 1}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default QuantityDropdownField;