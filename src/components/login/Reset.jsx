import { Avatar, Box, Button, Typography } from "@mui/material"
import { StyledTextField, LoginContainer } from "./style"

export const ResetForm = () => {
  return (
    <>
      <LoginContainer>
        <Avatar sx={{ width: 64, height: 64, marginBottom: 1 }}/>
     
        <Typography component="h1" variant="h5">
          Сбросьте пароль, чтобы продолжить!
        </Typography>
      
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Логин"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <Box height={60}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Сбросить
          </Button>
        </Box>
      </LoginContainer>
    </>
  )
}