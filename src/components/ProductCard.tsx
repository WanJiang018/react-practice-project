import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Product } from "../models/product";
import { CartContext } from "../common/store";
import { addAction } from "../reducers/productActions";

export default function ItemCard(product: Product) {
  const [, dispatch] = useContext(CartContext);
  const handleAdd = () => dispatch(addAction(product));

  return (
    <Card>
      <CardMedia component="img" height="150" image={product.img} />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body1">{product.title}</Typography>
          <Typography variant="body1">NT ${product.price}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="outlined" fullWidth onClick={handleAdd}>
          加入購物車
        </Button>
      </CardActions>
    </Card>
  );
}
