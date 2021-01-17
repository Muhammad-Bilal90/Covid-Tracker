import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: (props) => {
    return {
      minWidth: 275,
      borderBottom: `10px solid ${props.bcolor}`,
    };
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="h3">{props.data}</Typography>
        <Typography>{props.btext}</Typography>
      </CardContent>
    </Card>
  );
}