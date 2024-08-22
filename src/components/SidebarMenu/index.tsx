import { List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { useNavigate } from 'react-router-dom';

export function SidebarMenu() {
  const navigate = useNavigate();


  return (
    <Stack
      height="100vh"
      width="100%"
      p={3}
      sx={{
        background: '#fff',
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
        <ListItemButton>
          <ListItemIcon>
            <PaidIcon />
          </ListItemIcon>
          <ListItemText primary="Planos" onClick={() => navigate('/plans')} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LoyaltyIcon />
          </ListItemIcon>
          <ListItemText primary="Assinaturas" onClick={() => navigate('/subscriptions')}/>
        </ListItemButton>

        {/* <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton> */}
        {/* <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse> */}
      </List>
    </Stack>
  );
}
