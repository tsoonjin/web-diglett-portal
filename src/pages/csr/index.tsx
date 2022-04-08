import React, { useState, useEffect } from "react";
import axios from "axios";

interface Joke {
  id: string;
  setup: string;
  punchline: string;
}

const SpiderCSR = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_ten"
      );
      const { data } = response;
      setData(data);
    };
    getData();
  });
  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map((joke: Joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.punchline}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SpiderCSR;
