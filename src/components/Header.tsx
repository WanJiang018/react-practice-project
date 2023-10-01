import React, { useContext } from "react";
import { AppBar, Box, IconButton, Typography, styled } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../common/store";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export default function Header() {
  const [state] = useContext(CartContext);

  return (
    <AppBar position="fixed" color="default">
      <Box
        py={2}
        px={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">香香麵店</Typography>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={state.cartList.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Box>
    </AppBar>
  );
}
