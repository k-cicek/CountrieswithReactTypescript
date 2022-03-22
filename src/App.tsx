import axios from "axios";
import { useEffect, useState } from "react";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("An error occurred while importing countries.");
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  console.log({ countries });
  return (
    <div>
      {countries.map((country) => {
        return (
          <p>
            {country.name} - {country.capital}{" "}
          </p>
        );
      })}
    </div>
  );
}

export default App;
