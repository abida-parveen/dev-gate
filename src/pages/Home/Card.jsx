import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const Card = (props) => {
  const {data} = props
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={data.volumeInfo.imageLinks.smallThumbnail}
        />
      </ListItemAvatar>
      <ListItemText
        primary={data.volumeInfo.title}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {data.volumeInfo.authors[0]}
            </Typography>
            {data.volumeInfo.description}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Card;
