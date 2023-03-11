import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Filter } from '../../components/Filter/Filter';
import { CharactersList } from '../../components/Characters/Characters';
import { useState, useEffect } from 'react';
import { fetchCharacters, fetchFilteredCharacter } from '../../fetchApi';

import { Container } from './HomePage.styled';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('name') ?? '';

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
        console.log(`fetchFilteredCharacter`, error);
      }
    }
    filteredCharacter();
  }, [characterName]);

  const filterNormilized = filter.toLowerCase().trim();

  const sortedCharacters = characters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  let visibleCharacters = sortedCharacters;

  if (characters.length > 0) {
    visibleCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(filterNormilized)
    );
  }

  return (
    <Container>
      <Header />
      <Filter value={characterName} onChange={updateQueryString} />
      <CharactersList visibleCharacters={visibleCharacters} />
    </Container>
  );
};

export default Home;
