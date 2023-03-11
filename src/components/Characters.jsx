import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  Image,
  CharactersInfo,
  CharactersName,
  CharactersSpecies
} from './CharactersList.styled';

export const CharactersList = ({ visibleCharacters }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {visibleCharacters.map(characters => (
          <ListItem key={characters.id}>
            <Link to={`${characters.id}`} state={{ from: location }}>
              <Image src={characters.image} alt="" />
              <CharactersInfo>
                <CharactersName>{characters.name}</CharactersName>
                <CharactersSpecies>{characters.species}</CharactersSpecies>
              </CharactersInfo>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};
