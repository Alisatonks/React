import { ICharacter } from 'types/types';

async function getAllCharacters(
  setCardsData: React.Dispatch<React.SetStateAction<ICharacter[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setIsLoading(false);
    setCardsData(data.results);
    return;
  } catch (error) {
    throw new Error(`The following error has ocurred ${error}`);
  }
}

export default getAllCharacters;
