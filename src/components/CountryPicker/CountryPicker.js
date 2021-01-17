import React, { useState,useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { getCountries } from '../../api';

const CountryPicker = ({ selectCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const { countries } = await getCountries();
      setFetchedCountries(countries);
    }

    fetchCountries()
  }, []);



  return (
    <FormControl>
      <NativeSelect defaultValue="" onChange={(e) => selectCountry(e.target.value)}>
      <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;