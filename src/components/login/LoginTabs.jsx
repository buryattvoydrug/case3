import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { LoginForm } from "./Login";
import { RegisterForm } from "./Register";
import { ResetForm } from "./Reset";
import { Box } from '@mui/material';

export const LoginTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Войти в профиль" value="1" />
            <Tab label="Зарегистрироваться" value="2" />
            <Tab label="Сбросить пароль" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><LoginForm/></TabPanel>
        <TabPanel value="2"><RegisterForm/></TabPanel>
        <TabPanel value="3"><ResetForm/></TabPanel>
      </TabContext>
    </>
  )
}