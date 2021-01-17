const url = "https://covid19.mathdro.id/api";

export async function getData(country) {
    let dataUrl = url;

    if (country) {
        dataUrl = `${url}/countries/${country}`;
    }else {
        dataUrl = url
    }
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export async function getCountries() {
    try {
        const response = await fetch(`${url}/countries`)
        const countriesList = await response.json();
        return countriesList;
    }
    catch (error) {
        return (error);
    }
}