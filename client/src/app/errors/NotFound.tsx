import { Button, Container, Divider, Typography } from "@mui/material";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
      <Container  sx={{height: 20}}>
          <Typography gutterBottom variant='h3'>Oops - we could not find what you are looking for</Typography>
          <Divider />
          <Button fullWidth component={Link} to='/catalog'>Go back to shop</Button>
      </Container>)
}