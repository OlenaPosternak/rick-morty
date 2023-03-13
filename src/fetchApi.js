import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page) {
  try {
    const response = await axios.get(`/character/?page=${page}`);
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
}

export async function getCharacterByID(id) {
  try {
    const response = await axios.get(`character/${id}`);
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
}

export async function fetchFilteredCharacter(query, page) {
  try {
    const response = await axios.get(`character/?name=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
}
