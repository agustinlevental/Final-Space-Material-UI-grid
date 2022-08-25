import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';


export default function App() {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data[0].abilities)
  }, []);

  return (
    <div>
      <Container>
        {" "}
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
          Final Space characters
        </Typography>
        <Grid container spacing={3}>
        
        {data.map((character) => (
          
          <Grid item xs={12} sm={4} key={character.id}>
          <Card
            style={{
              maxWidth: 345,
              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
            }}
            
          >
            <CardMedia component='img' style={{ height: "300px" }} image={character.img_url} />
            <CardContent>
              <Typography color="primaty" variant="h5">
                {character.name}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                {`from ${character.origin}`}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
        ))}
        
        </Grid>
      </Container>
    </div>
  );
}
