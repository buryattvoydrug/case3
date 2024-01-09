import { Button } from "@mui/material"
import ReplayIcon from '@mui/icons-material/Replay';
import { TableBlock } from "../components/table/TableBlock";

export const TablePage = () => {
  return (
    <>
      <Button 
        color="primary" 
        variant="outlined"
        sx={{ height: "30px" }}
      >
        <ReplayIcon />
      </Button>
      <TableBlock/>
    </>
  )
}