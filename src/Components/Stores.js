import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Stores() {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>Store Here</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default Stores;