import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/country";
import Loading from "./components/loading";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("An error occurred while importing countries.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCountries();
  }, []);

  console.log({ countries });
  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country) => {
          return <Country key={country.name} country={country} />;
        })}
      </Loading>
    </div>
  );
}

export default App;
