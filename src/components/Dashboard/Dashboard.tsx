import React from 'react';
import {
  Typography,
  Container,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer';

function Dashboard({ toggleColorMode }: any) {
  function createData(
    name: string,
    calories: number,
    fat: number,
  ) {
    return {
      name, calories, fat,
    };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
  ];
  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          pt: '2rem', pb: '2rem', pl: '1rem', pr: '1rem',
        }}
      >
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
          margin="0"
          lineHeight={1.2}
        >
          You need a break, and you deserve it ! Let's pick up the coffee
          you prefer to continue your wonderfull day.
        </Typography>

        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Type of coffee</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Amount of caffein</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <img src="lorem" alt="" />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
