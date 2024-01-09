import { AppBar, Avatar, Box, Button, Container, IconButton, LinearProgress, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from '@mui/icons-material/Login';

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#fff" }}>
        <LinearProgress 
          sx={{
            position: "fixed",
            width: "100%",
          }} 
        />
        <Toolbar>
          <Container style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center'
            }}
              maxWidth="xl"
          >
            <Link to="/">
              <IconButton edge="start" color="primary">
                Table App
              </IconButton>
            </Link>
            
            <Box
              display="flex"
              alignItems="center"
            >
              <Link to="/login">
                <Button 
                  variant="outlined" 
                  endIcon={<LoginIcon />}
                >
                  <Box
                    display="flex"
                  >
                    <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}/>
                    <span>Радимов Игорь</span>

                  </Box>
                </Button>
              </Link>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}