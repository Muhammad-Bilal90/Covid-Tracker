import React, { useState, useEffect } from "react";
import './App.css';
import { getData } from "./api";
import { Grid, Typography } from "@material-ui/core";
import Header from "./components/Header/Header";
import covid19 from "./covid-19.svg";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/chart/chart";
import OutlinedCard from './practice';

function App() {
  const [fconfirmed, setConfirmed] = useState();
  const [frecovered, setRecovered] = useState();
  const [fdeaths, setDeaths] = useState();
  const [sCountry, setCountry] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    async function fetchData() {
        const { confirmed, recovered, deaths, lastUpdate } = await getData();

        setConfirmed(confirmed.value)
        setRecovered(recovered.value)
        setDeaths(deaths.value)
        setDate(lastUpdate)
    }
    
    fetchData();
  }, []);
  console.log(date, 5646);
  
  async function selectCountry(country) {
    const { confirmed, recovered, deaths } = await getData(country);

    setCountry(country)
    setConfirmed(confirmed.value)
    setRecovered(recovered.value)
    setDeaths(deaths.value)
  }
  return (
    <div>
      <Grid className="main" container direction="column" spacing={2}>
        <Grid className="main1" item>
          <Header />
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <img height={220} src={covid19} alt="covid"></img>
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item>
            <CountryPicker selectCountry={selectCountry} />
          </Grid>
        </Grid>
        <Grid item container direction="row" justify="center">
          <Grid item>
            <Typography color="textSecondary">
            {`Last Updated : ${new Date(date).toDateString()}`}
            </Typography>
          </Grid>
        </Grid>
        <OutlinedCard 
        confirmed={fconfirmed}
        recovered={frecovered}
        deaths={fdeaths}
        />
        <Grid item container direction="row" justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Chart
                confirmed={fconfirmed}
                recovered={frecovered}
                deaths={fdeaths}
                country={sCountry}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;