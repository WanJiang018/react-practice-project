import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";
import { List, ListItemText, debounce } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SearchBar } from "../components";

interface listProp {
  id: string;
  alt_description: string;
  description: string;
}

const delay = 500;
const api = process.env.REACT_APP_UNSPLASH_API_PATH + "/search/photos";
const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY;
const initList: listProp[] = [
  {
    id: "",
    alt_description: "",
    description: "",
  },
];

export default function Album() {
  const [list, setList] = useState(initList);
  const [keyword, setKeyword] = useState();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (keyword) {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accessKey}&query=${keyword}`
        );
        setList(response.data.results);
      })();
    }
  }, [keyword]);

  const handleSearch = useCallback(
    (event: any) => {
      const keyword = event.target.value;
      setKeyword(keyword);
      setSearchParams({ query: keyword });
    },
    [setSearchParams]
  );

  const searchDelayed = useMemo(
    () => debounce(handleSearch, delay),
    [handleSearch]
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SearchBar onChange={searchDelayed} />
        <List>
          {keyword &&
            list.map((item) => {
              return (
                <Link key={item.id} to={item.id}>
                  <ListItemText
                    primary={item?.description ?? item?.alt_description}
                  />
                </Link>
              );
            })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
