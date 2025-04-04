import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 720 }}>
      <AppBar position="static" sx={{ borderRadius: '30px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="none"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab
            label="Investor Dashboard"
            sx={{
              fontSize: '12px',
              borderRadius: '30px',
              cursor: 'pointer',
              backgroundColor: value === 0 ? 'lightgray' : 'transparent', // Conditional background color
              color: value === 0 ? 'black' : 'inherit', // Change text color based on selection
              '&:hover': {
                backgroundColor: value === 0 ? 'lightgray' : 'transparent', // Hover effect
              },
            }}
          />
          <Tab
            label="Why invest"
            sx={{
              fontSize: '12px',
              borderRadius: '30px',
              cursor: 'pointer',
              backgroundColor: value === 1 ? 'lightgray' : 'transparent', // Conditional background color
              color: value === 1 ? 'black' : 'inherit', // Change text color based on selection
              '&:hover': {
                backgroundColor: value === 1 ? 'lightgray' : 'transparent', // Hover effect
              },
            }}
          />
          <Tab
            label="Announcements"
            sx={{
              fontSize: '12px',
              borderRadius: '30px',
              cursor: 'pointer',
              backgroundColor: value === 2 ? 'lightgray' : 'transparent', // Conditional background color
              color: value === 2 ? 'black' : 'inherit', // Change text color based on selection
              '&:hover': {
                backgroundColor: value === 2 ? 'lightgray' : 'transparent', // Hover effect
              },
            }}
          />
          <Tab
            label="Reports"
            sx={{
              fontSize: '12px',
              borderRadius: '30px',
              cursor: 'pointer',
              backgroundColor: value === 3 ? 'lightgray' : 'transparent', // Conditional background color
              color: value === 3 ? 'black' : 'inherit', // Change text color based on selection
              '&:hover': {
                backgroundColor: value === 3 ? 'lightgray' : 'transparent', // Hover effect
              },
            }}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}
