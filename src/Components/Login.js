import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Login() {
  return (
      <div id='buttons'>
        <Stack spacing={5} direction="row">
        <Button variant="text">Log In</Button>
        <Button variant="contained" color="success">Sign Up</Button>
        </Stack>
      </div>
  );
}

export default Login;
