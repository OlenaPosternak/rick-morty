import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Filter } from '../../components/Filter/Filter';
import { CharactersList } from '../../components/Characters/Characters';
import {User} from '../../components/GoogleLogin/Login';
import { useState, useEffect } from 'react';
import { fetchCharacters, fetchFilteredCharacter } from '../../fetchApi';

import { Container } from './HomePage.styled';
import { PaginationBtns } from 'components/PaginationBtns/Buttons';

import { gapi } from 'gapi-script';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);
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
        await fetchFilteredCharacter(characterName, page).then(data => {
          setCharacters(data.results);
          setCharacters(data.results);
          setNumberOfChars(data.info.count);
        });
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

  //Google logIn
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIEN_ID,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  }, []);


  const onSuccess = async response => {
    try {
      const googleUser = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`
      );
   
      const { name } = googleUser.data;
      setUser(name);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess,
    onError: error => console.log(error),
  });

  return (
    <Container>
      <User googleLogin={googleLogin} user={user} setUser={setUser}/>

      <Header />
      <Filter value={characterName} onChange={updateQueryString} />
      <CharactersList visibleCharacters={visibleCharacters} />
      <PaginationBtns
        setPage={setPage}
        page={page}
        numberOfChars={numberOfChars}
      />
    </Container>
  );
};

export default Home;
