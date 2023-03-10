import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const CharactersList = ({ visibleCharacters }) => {
  const location = useLocation();

  
  return (
    <>
      <ul>
        {visibleCharacters.map(characters => (
          <li key={characters.id}>
            <Link to={`${characters.id}`} state={{ from: location }}>
              <img src={characters.image} alt="" />

              {characters.name}
              {characters.species}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};