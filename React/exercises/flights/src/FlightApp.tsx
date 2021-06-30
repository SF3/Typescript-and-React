import React, {FC, useEffect, useState} from 'react';
import Axios from "axios";

const baseUrl = 'http://localhost:8080/flights';

export const FlightsApp: FC = () => {
  const [flightsAsText, setFlightsAsText] = useState('');

  useEffect(() => {
    (async () => {
      const response = await Axios.get(baseUrl);

      setFlightsAsText(JSON.stringify(response.data, null, 2));
    })();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Flights</h1>
      </header>
      <pre>{flightsAsText}</pre>
    </div>
  );
};
