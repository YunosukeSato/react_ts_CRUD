import './FilterForm.css'

import { TextField } from '@mui/material';

function FilterForm() {
  return (
    <div className='form'>
      <TextField id="standard-basic" label="Filter issues" variant="standard" sx={{width: '100%',}}/>
    </div>
  )
}

export default FilterForm