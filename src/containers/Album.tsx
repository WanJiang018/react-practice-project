import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { List, ListItemText } from "@mui/material";
import Grid from "@mui/material/Grid";

interface listProp {
  id: string;
  alt_description: string;
  description: string;
}

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

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accessKey}&query=office`
      );
      setList(response.data.results);
    })();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <List>
          {list.map((item) => {
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
