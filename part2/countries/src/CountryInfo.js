import WeatherInfo from "./WeatherInfo";

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <p>Languages:</p>
      {Object.values(country.languages).map((language) => {
        return <li>{language}</li>;
      })}
      <img src={country.flags.png} alt={country.name.common + " flag"}></img>
      <WeatherInfo latlng={country.latlng} name={country.name.common}/>
    </div>
  );
};

export default CountryInfo;