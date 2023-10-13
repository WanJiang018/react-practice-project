import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      404
      <Button onClick={() => navigate("/")}>回首頁</Button>
    </>
  );
}
