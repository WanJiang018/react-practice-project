import { Box, Divider, Grid, Typography } from "@mui/material";
import productData from "../assets/productData";
import { theme } from "../common/styles";
import { CartContext } from "../common/store";
import { Product } from "../models/product";
import { ProductCard, ProductRow } from "../components";
import { useContext } from "react";

export default function Home() {
  const [state] = useContext(CartContext);

  return (
    <Grid container columnSpacing={3}>
      <Grid item xs={7}>
        <Grid container spacing={2}>
          {productData.map((item: Product) => {
            return (
              <Grid item xs={4} key={item.id}>
                <ProductCard {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Grid container>
            {state.cartList.map((item) => {
              return (
                <Grid item xs={12}>
                  <ProductRow {...item} />
                  <Divider />
                </Grid>
              );
            })}
          </Grid>
          <Typography variant="body1" p={3} textAlign="end">
            總金額: NT $
            {state.cartList
              .map((item) => item.qty * item.price)
              .reduce((prv, curr) => prv + curr, 0)}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
