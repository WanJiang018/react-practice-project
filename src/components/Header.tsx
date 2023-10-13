import React, { useContext } from "react";
import {
  AppBar,
  Box,
  IconButton,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../common/store";
import { NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const navBarList = [
  { id: "home", name: "首頁", path: "/" },
  { id: "about", name: "關於我們", path: "/about" },
  { id: "album", name: "相簿", path: "/album" },
];

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
        <Box display="flex">
          <Typography variant="h6">香香麵店</Typography>
          {navBarList.map((item) => {
            return (
              <MenuItem key={item.id}>
                <NavLink
                  to={item.path}
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                  })}
                >
                  {item.name}
                </NavLink>
              </MenuItem>
            );
          })}
        </Box>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={state.cartList.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Box>
    </AppBar>
  );
}
