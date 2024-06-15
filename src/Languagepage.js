// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Make sure to import the i18n configuration
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

function LanguagePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {t('welcome')}
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={i18n.language}
              onChange={changeLanguage}
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="am">Amharic</MenuItem>
              <MenuItem value="om">Oromo</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <p>{t('description')}</p>
        <p>{t('hello')}</p>
      </header>
    </div>
  );
}

export default LanguagePage;
