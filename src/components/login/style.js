import { TextField, Box, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({theme}) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    fontSize: "1.1rem"
  },
}))

export const LoginContainer = styled(Box)(({theme}) => ({
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "500px"
}))

