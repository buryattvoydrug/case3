import { Box } from "@mui/material"
import { LoginTabs } from "../components/login/LoginTabs";

export const LoginPage = () => {

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <LoginTabs/>
      </Box>
    </>
  )
}