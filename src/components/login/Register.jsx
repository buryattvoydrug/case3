import { Avatar, Typography } from "@mui/material"
import { StyledTextField, LoginContainer, LoginButton } from "./style"

export const RegisterForm = () => {
  return (
    <>
      <LoginContainer>
        <Avatar sx={{ width: 64, height: 64, marginBottom: 1 }}/>
      
        <Typography component="h1" variant="h4" textAlign="center">
          Зарегистрируйтесь, чтобы продолжить!
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
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <StyledTextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <LoginButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Войти
        </LoginButton>
      </LoginContainer>
    </>
  )
}