import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'




const DsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell>Visitas</TableCell>
            <TableCell>Vendas</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Notificar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DsTable