import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonApp = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  

    

  async function fetchPokemon() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setLoading(false);

      const detailedPokeData = await Promise.all(
        data.results.map(async (curElem) => {
          const res = await fetch(curElem.url);
          const details = await res.json()
          return details
        }))
        setApiData(detailedPokeData);  

    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality 
  const searchData = apiData.filter((curPokemon)=>{
    return curPokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  if (loading) return <h1>loading...</h1>;

  if (error) return <h1>Error : {error.message}</h1>;

  return (
    <>
      <section className="container">
        <header>
            <h1>Let's catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input type="text" placeholder="Search Pokemon" value={search}
          onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <div>
            <ul className="cards">
                {
                    searchData.map((curElem)=>{
                        return <PokemonCard key={curElem.id}  curElem={curElem} id ={curElem.id}/>
                    })
                }
            </ul>
        </div>
      </section>
    </>
  );
};
