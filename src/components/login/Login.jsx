import { Avatar, Box, Button, TextField, Typography } from "@mui/material"

export const LoginForm = () => {
  return (
    <>
      <Box>
        <Avatar sx={{ width: 64, height: 64, marginBottom: 1 }}/>
        <Typography component="h1" variant="h5">
          Войдите, чтобы продолжить!
        </Typography>
      
        <form noValidate>
          <TextField
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
          <TextField
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
          <Box height={60}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Войти
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}