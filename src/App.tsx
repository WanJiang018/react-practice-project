import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, styled } from "@mui/material";
import { theme } from "./common/styles";
import { CartContext } from "./common/store";
import { initState, productReducer } from "./reducers/productReducers";
import Header from "./components/Header";
import { Home, About, Album, AlbumIndex, AlbumPhoto } from "./containers";
import NotFound from "./containers/NotFound";

export const Content = styled("main")(() => ({
  marginTop: "72px",
  padding: "30px 30px 100px 30px",
}));

export default function App() {
  const contextValue = useReducer(productReducer, initState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartContext.Provider value={contextValue}>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/album" element={<Album />}>
              <Route index element={<AlbumIndex />} />
              <Route path=":id" element={<AlbumPhoto />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </CartContext.Provider>
    </ThemeProvider>
  );
}
