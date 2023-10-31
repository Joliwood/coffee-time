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
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Header from '../Header/Header';
import Footer from '../Footer';
import PieArcLabel from './PieChart';

function Dashboard({ toggleColorMode }: any) {
  const coffeesDrunk = useSelector((state: RootState) => state.coffees);

  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <Container
        disableGutters
        component="main"
        className="dashboardMainContainer"
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

        <div className="dashboardContentsContainer">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Type of coffee</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Amount of caffein</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coffeesDrunk.map((coffee) => (
                  <TableRow
                    key={coffee.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">
                      <img
                        src={coffee.picture}
                        alt={coffee.title}
                        style={{
                          height: '40px',
                          aspectRatio: '1/1',
                          borderRadius: '8px',
                          objectFit: 'cover',
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {coffee.title}
                    </TableCell>
                    <TableCell align="right">{coffee.price}</TableCell>
                    <TableCell align="right">{coffee.caffeineQuantityResumed}</TableCell>
                    <TableCell align="right">{coffee.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {coffeesDrunk.length > 0 && <PieArcLabel coffeesDrunk={coffeesDrunk} />}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
