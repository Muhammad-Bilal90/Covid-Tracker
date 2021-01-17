import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    confirmed: {
        borderBottom: '10px solid #0000ff80',
    },
    recovered: {
        borderBottom: '10px solid #00ff0080',
    },
    deaths: {
        borderBottom: '10px solid #ff000080',
    },
});

export default function OutlinedCard({ confirmed, recovered, deaths }) {
    const classes = useStyles();
    const commaSeparator = new Intl.NumberFormat("en-US");

    // console.log(confirmed, 'confirmed');
    // console.log(recovered, 'recovered');
    // console.log(deaths, 'deaths');

    return (
        <Grid className="main3" item container justify="center" direction="row" spacing={2}>
            <Grid item>
                <Card className={`${classes.root} ${classes.confirmed}`} variant="outlined">
                    <CardContent>
                        <Typography variant="h6">Confirmed Cases</Typography>
                        <Typography variant="h3">{commaSeparator.format(confirmed)}</Typography>
                        <Typography>Number of total cases of COVID-19.</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card className={`${classes.root} ${classes.recovered}`} variant="outlined">
                    <CardContent>
                            <Typography variant="h6">Recovered</Typography>
                            <Typography variant="h3">{commaSeparator.format(recovered)}</Typography>
                            <Typography>Number of recoveries from COVID-19.</Typography>
                        </CardContent>
                    </Card>
            </Grid>

            <Grid item>
                <Card className={`${classes.root} ${classes.deaths}`} variant="outlined">
                    <CardContent>
                            <Typography variant="h6">Deaths</Typography>
                            <Typography variant="h3">{commaSeparator.format(deaths)}</Typography>
                            <Typography>Number of deaths caused by COVID-19.</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}