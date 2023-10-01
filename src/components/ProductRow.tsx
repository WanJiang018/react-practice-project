import React, { useContext } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  ButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { removeAction, updateQtyAction } from "../reducers/productActions";
import { CartContext } from "../common/store";
import { CartProduct } from "../models/product";

export default function ProductRow(cartProduct: CartProduct) {
  const [state, dispatch] = useContext(CartContext);

  const handleRemove = () => dispatch(removeAction(cartProduct.id));

  const handleIncrement = () =>
    dispatch(updateQtyAction({ id: cartProduct.id, qty: 1 }));

  const handleDecrement = () => {
    if (cartProduct.qty > 1) {
      dispatch(updateQtyAction({ id: cartProduct.id, qty: -1 }));
    } else {
      dispatch(removeAction(cartProduct.id));
    }
  };

  return (
    <Box display="flex" alignItems="center" columnGap={2} p={2}>
      <IconButton onClick={handleRemove}>
        <CloseIcon />
      </IconButton>
      <img src={cartProduct.img} width="100" alt="product" />
      <Box display="flex" flexDirection="column">
        <Typography variant="body1" maxWidth="64px">
          {cartProduct.title}
        </Typography>
        <Typography variant="body2">NT ${cartProduct.price}</Typography>
      </Box>
      <ButtonGroup variant="outlined" size="small">
        <Button onClick={handleDecrement} disabled={cartProduct.qty < 1}>
          -
        </Button>
        <Button sx={{ pointerEvents: "none", cursor: "default" }}>
          {cartProduct.qty}
        </Button>
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
      <Typography variant="body1">
        NT ${cartProduct.price * cartProduct.qty}
      </Typography>
    </Box>
  );
}
