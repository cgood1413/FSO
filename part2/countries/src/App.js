import { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./CountryInfo";

// const CountryOption = ({country}) => {
//   return (
//     <div>
//       <li key={country.cca3}>{country.name.common} <span><button>Show Info</button></span></li>
//     </div>
//   );
// }



function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const shownCountries = filteredCountries.length
    ? filteredCountries
    : countries;

  useEffect(() => {
    console.log("Retrieving countries...");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("axios promise resolved...");
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredCountries(
      countries.filter((country) => {
        let regex = new RegExp(searchTerm, "i");
        return regex.test(country.name.common);
      })
    );
  };

  // const handleFilterBlur = (event) => {
  //   setSearchTerm("");
  //   setFilteredCountries([]);
  // };

  const handleClick = (country) => {
    setFilteredCountries([country]);
  }

  return (
    <div>
      <label>
        Find Countries:
        <input
          onChange={handleFilterChange}
          // onBlur={handleFilterBlur}
          value={searchTerm}
        />
      </label>
      {shownCountries.length > 10 ? (
        <p>Please specify a filter</p>
      ) : shownCountries.length === 1 ? (
        <CountryInfo country={shownCountries[0]}/>
      ) : (
        shownCountries.map((country) => {
          return <li key={country.cca3}>{country.name.common} <span><button onClick={() => handleClick(country)}>Show Info</button></span></li>;
        })
      )}
    </div>
  );
}

export default App;
