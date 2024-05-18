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

const drawerWidth = 240;
const { BaseLayer } = LayersControl;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ phone: '', address: '' });
  const [mapType, setMapType] = useState('streets');

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

  const drawer = (
    <div>
      <Toolbar>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
        <Typography variant="h6">User Name</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Body Section" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Menu Item 2" />
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
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
          <Typography variant="h6" noWrap component="div">
            Ride Hailing App
          </Typography>
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
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='&copy; Esri'
              />
            </BaseLayer>
          </LayersControl>
          <Marker position={[8.567, 37.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
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
