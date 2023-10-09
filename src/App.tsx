import {
  Box,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  styled,
} from "@mui/material";
import productData from "./assets/productData";
import { theme } from "./common/styles";
import Header from "./components/Header";
import ItemCard from "./components/ProductCard";
import ProductRow from "./components/ProductRow";
import { Product } from "./models/product";
import { CartContext } from "./common/store";
import { useReducer } from "react";
import { initState, productReducer } from "./reducers/productReducers";

export const Content = styled("main")(() => ({
  marginTop: "72px",
  padding: "30px 30px 100px 30px",
}));

export default function App() {
  const contextValue = useReducer(productReducer, initState);
  const [state] = contextValue;

  return (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Grid container columnSpacing={3}>
            <Grid item xs={7}>
              <Grid container spacing={2}>
                {productData.map((item: Product) => {
                  return (
                    <Grid item xs={4} key={item.id}>
                      <ItemCard {...item} />
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
        </Content>
      </CartContext.Provider>
    </ThemeProvider>
  );
}
