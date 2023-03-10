import { useSearchParams } from 'react-router-dom';
import { Header } from './Header';
import { Filter } from './Filter';
import { CharactersList } from './Characters';
import { useState, useEffect } from 'react';
import { fetchCharacters, fetchFilteredCharacter } from '../fetchApi';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('name') ?? '';

  console.log(`characterName`, characterName);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setFilter(name);
  };

  useEffect(() => {
    if (characterName === '') {
      async function getCharacters() {
        try {
          await fetchCharacters().then(data => setCharacters(data.results));
        } catch (error) {
          console.log(`getCharacters`, error);
        }
      }
      getCharacters();
    }
  }, [characterName]);

  useEffect(() => {
    async function filteredCharacter() {
      try {
        await fetchFilteredCharacter(characterName).then(data =>
          setCharacters(data.results)
        );
      } catch (error) {
        console.log(`getCharacters`, error);
      }
    }
    filteredCharacter();
  }, [characterName]);

  const filterNormilized = filter.toLowerCase().trim();

  let visibleCharacters = characters;

  if (characters.length > 0) {
    visibleCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(filterNormilized)
    );
  }

  return (
    <>
      <Header />
      <Filter value={characterName} onChange={updateQueryString} />
      <CharactersList visibleCharacters={visibleCharacters} />
    </>
  );
};
