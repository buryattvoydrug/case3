import { Avatar, Box, Button, TextField, Typography } from "@mui/material"

export const ResetForm = () => {
  return (
    <>
      <Box>
        <Avatar sx={{ width: 64, height: 64, marginBottom: 1 }}/>
     
        <Typography component="h1" variant="h5">
          Сбросьте пароль, чтобы продолжить!
        </Typography>
      
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
      </Box>
    </>
  )
}