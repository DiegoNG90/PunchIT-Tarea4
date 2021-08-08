
import './App.css';
// import {useFetch} from './Hooks/useFetch'
import {useAxios} from './Hooks/useAxios'
import {useState} from 'react'

import Characters from './Components/Characters'
import Loading from './Components/common/Loading'
import Search from './Components/Search'

function App() {
  /* Con useFetch */
  // const characters = useFetch(`https://rickandmortyapi.com/api/character`);
  // if(characters){
  //   console.log(characters)
  //   console.log('results', characters.results);
  // }
  const [endpoint, setEndpoint] = useState("character")
  const {data, loading, error} = useAxios(endpoint)
  const {results: characters, info} = data


  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`)
  }
  if (loading) return < Loading />

  if(error) return <h3>Hubo un error!</h3>
  return (
    <div className="App">
      <Search findCharacters={findCharacters} />
      <Characters characters={characters} />
    </div>
  );
}

/* Con useFetch */
      /* {characters && characters?.results?.map((character) => (
        <div>
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
        </div>
  ))} */
export default App;
