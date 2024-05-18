import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  CssBaseline, Drawer, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider,
  Box, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControlLabel, Switch
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;
const { BaseLayer } = LayersControl;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ phone: '', address: '' });
  const [mapType, setMapType] = useState('streets');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMenuItem, setSelectedMenuItem] = useState('Map');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData);
    handleCloseDialog();
  };

  const handleMapTypeChange = (event) => {
    setMapType(event.target.checked ? 'satellite' : 'streets');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Implement actual search functionality here
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const drawer = (
    <div style={{ width: drawerWidth }}>
      <Toolbar>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
        <Typography variant="h6">User Name</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button onClick={() => handleMenuItemClick('Profile')}>
          <ListItemText primary="Near Rise " />
        </ListItem>
        <ListItem button onClick={() => handleMenuItemClick('Body Section')}>
          <ListItemText primary="Recomend" />
        </ListItem>
        <ListItem button onClick={() => handleMenuItemClick('Menu Item 2')}>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2, position: 'absolute', bottom: 0, width: '100%' }}>
        <Button variant="contained" color="primary" startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Box>
    </div>
  );
  

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Yene Ride
          </Typography>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ backgroundColor: 'white', borderRadius: 1, mr: 2 }}
            />
            <IconButton type="submit" color="inherit">
              <SearchIcon />
            </IconButton>
          </form>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      <main style={{ flexGrow: 1, padding: '16px' }}>
        <Toolbar />
        {selectedMenuItem === 'Map' && (
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '600px', width: '100%' }}>
            <LayersControl position="topright">
              <BaseLayer checked={mapType === 'streets'} name="Streets">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </BaseLayer>
              <BaseLayer checked={mapType === 'satellite'} name="Satellite">
                <TileLayer
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.opentopomap.org/">OpenTopoMap</a>'
                />
              </BaseLayer>
            </LayersControl>
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
        {selectedMenuItem === 'Profile' && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography variant="h4">Near Rides</Typography>
          </Box>
        )}
        {selectedMenuItem === 'Body Section' && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography variant="h4">History</Typography>
          </Box>
        )}
        {selectedMenuItem === 'Menu Item 2' && (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography variant="h4">Ride Sharing</Typography>
          </Box>
        )}
        <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <FormControlLabel
            control={<Switch checked={mapType === 'satellite'} onChange={handleMapTypeChange} />}
            label="Satellite View"
          />
          <Button variant="contained" color="primary" onClick={handleOpenDialog} startIcon={<AddIcon />}>
            Add Address
          </Button>
        </Box>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add Address</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              name="phone"
              label="Phone"
              type="text"
              fullWidth
              value={formData.phone}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="address"
              name="address"
              label="Address"
              type="text"
              fullWidth
              value={formData.address}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
}

export default App;
