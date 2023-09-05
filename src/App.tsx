import { useEffect, useState } from 'react';
import './App.css';
import { CatImgJSON, CatJSON } from './types';

const FACT_URL = 'https://catfact.ninja/fact';
const BASE_IMG_URL = 'https://cataas.com';

function App() {
  const [fact, setFact] = useState<string | null>(null);
  const [imgURI, setImgURI] = useState<string | null>(null);

  useEffect(() => {
    fetch(FACT_URL)
      .then((res) => res.json())
      .then((data: CatJSON) => setFact(data.fact));
  }, []);

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(' ')[0];

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data: CatImgJSON) => setImgURI(data.url));
  }, [fact]);

  return (
    <main>
      <h1>Prueba técnica React + TS</h1>
      {fact && <p>{fact}</p>}
      {imgURI && (
        <img
          src={`${BASE_IMG_URL}${imgURI}`}
          alt="Img fetched from the first word of the fact fetched with the first API given"
        ></img>
      )}
    </main>
  );
}

export default App;
