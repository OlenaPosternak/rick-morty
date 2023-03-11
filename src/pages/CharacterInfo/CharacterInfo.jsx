import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacterByID } from '../../fetchApi';

import {
  Container,
  Wrapper,
  BackBtn,
  BackIcon,
  BackText,
  CharacterSection,
  Picture,
  InfoTitle,
  InfoSection,
  CharacterTitle,
  CharacterDetails,
  Border,
} from './CharactersInfo.styled';

const CharacterInfo = () => {
  const { charactertId } = useParams();
  const [character, setCharacter] = useState('');
  const [origin, setOrigin] = useState();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getCharacter() {
      try {
        await getCharacterByID(charactertId).then(data => {
          if (!data) {
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

  return (
    <Container>
      <Link to={backLinkHref}>
        <BackBtn>
          <BackIcon />
          <BackText>GO BACK</BackText>
        </BackBtn>
      </Link>
      <Wrapper>
        <CharacterSection>
          <Picture src={character.image} alt="" />
          <h2>{character.name}</h2>
        </CharacterSection>

        <InfoTitle>Informations</InfoTitle>

        <InfoSection>
          <CharacterTitle>Gender</CharacterTitle>
          <CharacterDetails>{character.gender}</CharacterDetails>
          <Border />
        </InfoSection>

        <InfoSection>
          <CharacterTitle>Status</CharacterTitle>
          <CharacterDetails>{character.status}</CharacterDetails>
          <Border />
        </InfoSection>

        <InfoSection>
          <CharacterTitle>Specie</CharacterTitle>
          <CharacterDetails>{character.species}</CharacterDetails>
          <Border />
        </InfoSection>

        <InfoSection>
          <CharacterTitle>Origin</CharacterTitle>
          <CharacterDetails>{origin}</CharacterDetails>
          <Border />
        </InfoSection>

        <InfoSection>
          <CharacterTitle>Type</CharacterTitle>
          <CharacterDetails>
            {character.type ? character.type : 'Unknown'}
          </CharacterDetails>
          <Border />
        </InfoSection>
      </Wrapper>
    </Container>
  );
};

export default CharacterInfo;
