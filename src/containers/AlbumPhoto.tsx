import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

interface photoProp {
  id: string;
  urls: urlProp;
  alt_description: string;
  description: string;
}

interface urlProp {
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

const initPhoto: photoProp = {
  id: "",
  urls: {
    raw: "",
    regular: "",
    small: "",
    thumb: "",
  },
  alt_description: "",
  description: "",
};

const api = process.env.REACT_APP_UNSPLASH_API_PATH + "/photos";
const accessKey = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(initPhoto);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accessKey}`);
      setPhoto(response.data);
    })();
  }, [id]);
  return (
    <>
      <Typography variant="body1">
        {photo?.description ?? photo?.alt_description}
      </Typography>
      <img
        src={photo?.urls?.regular}
        alt={photo?.description ?? photo?.alt_description}
        width="500"
      />
    </>
  );
}
