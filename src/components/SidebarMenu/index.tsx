import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '@root/contexts/globalContext/useGlobalContext';
import { useState } from 'react';

export function SidebarMenu() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('Planos');

  const { theme } = useGlobalContext();

  const menuOptions = [
    {
      title: 'Planos',
      icon: <PaidIcon />,
      action: () => {
        setSelectedItem('Planos');
        navigate('/plans');
      },
    },
    {
      title: 'Assinaturas',
      icon: <LoyaltyIcon />,
      action: () => {
        setSelectedItem('Assinaturas');
        navigate('/subscriptions');
      },
    },
  ];

  return (
    <Stack
      height="100vh"
      width="100%"
      p={3}
      sx={{
        background: theme?.defaultColor,
        color: '#fff',
      }}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        {menuOptions?.map((item, index) => (
          <Box
            key={index}
            sx={{
              '& .MuiListItemButton-root': {
                borderRadius: 1,
                background: selectedItem === item?.title ? '#fff' : 'transparent',
                color: selectedItem === item?.title ? theme?.defaultColor : '#fff',

                '& svg': {
                  fill: selectedItem === item?.title ? theme?.defaultColor : '#fff',
                },
              },
            }}
          >
            <ListItemButton onClick={item?.action}>
              <ListItemIcon>
                <PaidIcon />
              </ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </Box>
        ))}
      </List>
    </Stack>
  );
}
