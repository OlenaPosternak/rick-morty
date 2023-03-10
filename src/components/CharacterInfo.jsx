import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacterByID } from '../fetchApi';

export const CharacterInfo = () => {
  const { charactertId } = useParams();
  const [character, setCharacter] = useState('');
  const [origin, setOrigin] = useState();

  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getCharacter() {
      try {
        await getCharacterByID(charactertId).then(data => {
          if (!data) {
            // toast.warn(
            //   'There is no movie with such name. Please Go Back and try another one.',
            //   {
            //     theme: 'dark',
            //   }
            // );
            alert(
              'There is no character with such id. Please Go Back and try again'
            );
            return;
          }

          setCharacter(data);
          setOrigin(data.origin.name);
        });
      } catch (error) {
        console.log(error);
      }
    }
    getCharacter();
  }, [charactertId]);

  console.log(character);

  return (
    <>
      <Link to={backLinkHref}>
        <button>Go Back 🔙 </button>
      </Link>
      <div>
        <img src={character.image} alt="" />
        <h2>{character.name}</h2>
        <p>Informations</p>
        <p>Gender {character.gender}</p>
        <p>Status {character.status}</p>
        <p>Specie {character.species}</p>
        <p>Origin {origin}</p>
        <p>Type {character.type ? character.type : 'Unknown'}</p>
      </div>
    </>
  );
};
