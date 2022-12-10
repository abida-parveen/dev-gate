import { Box, Button, Grid, List, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import image from "../../assets/lib.png";
import Card from "./Card";

const Home = () => {
  const { VITE_API_KEY } = import.meta.env;
  const [querry, setQuerry] = useState("");
  const [ data, setData ] = useState([])

  const handleSearch = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${querry}&key=${VITE_API_KEY}`
      )
      .then((res) => setData(res.data.items));
  };
  return (
    <div>
      <img src={image} alt="library" className="image" />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            type="text"
            placeholder="Search"
            fullWidth
            name="querry"
            variant="outlined"
            value={querry}
            onChange={(e) => setQuerry(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="button-block"
            onClick={handleSearch}
          >
            search
          </Button>
        </Grid>
      </Grid>
      <List>
        {data && data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </List>
    </div>
  );
};

export default Home;
