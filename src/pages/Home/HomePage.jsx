import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Filter } from '../../components/Filter/Filter';
import { CharactersList } from '../../components/Characters/Characters';
import { useState, useEffect } from 'react';
import { fetchCharacters, fetchFilteredCharacter } from '../../fetchApi';

import { Container } from './HomePage.styled';
import { PaginationBtns } from 'components/PaginationBtns/Buttons';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const characterName = searchParams.get('name') ?? '';

  const [page, setPage] = useState(1);
  const [numberOfChars, setNumberOfChars] = useState(null);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
    setFilter(name);
  };

  useEffect(() => {
    if (characterName === '') {
      async function getCharacters() {
        try {
          await fetchCharacters(page).then(data => {
            console.log(data);
            setCharacters(data.results);
            setNumberOfChars(data.info.count);
          });
        } catch (error) {
          console.log(`getCharacters`, error);
        }
      }
      getCharacters();
    }
  }, [characterName, page]);


  useEffect(() => {
    async function filteredCharacter() {
      try {
        await fetchFilteredCharacter(characterName, page).then(data =>{

            setCharacters(data.results)
            setCharacters(data.results);
            setNumberOfChars(data.info.count);
        }
       
        );
      } catch (error) {
        console.log(`fetchFilteredCharacter`, error);
      }
    }
    filteredCharacter();
  }, [characterName, page]);

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
     <PaginationBtns setPage={setPage} page={page} numberOfChars={numberOfChars}/>
    </Container>
  );
};

export default Home;
