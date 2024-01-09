import { Avatar, Typography } from "@mui/material"
import { StyledTextField, LoginContainer, LoginButton } from "./style"

export const ResetForm = () => {
  return (
    <>
      <LoginContainer>
        <Avatar sx={{ width: 64, height: 64, marginBottom: 1 }}/>
     
        <Typography component="h1" variant="h4" textAlign="center">
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
        <LoginButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Сбросить
        </LoginButton>
      </LoginContainer>
    </>
  )
}