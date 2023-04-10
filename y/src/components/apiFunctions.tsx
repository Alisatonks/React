import { ICharacter } from 'types/types';

export async function getCharacters(
  setCardsData: React.Dispatch<React.SetStateAction<ICharacter[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  type: 'all' | 'search' | string = 'all',
  search?: string
) {
  let url = 'https://rickandmortyapi.com/api/character';

  if (type === 'search') {
    url += `/?name=${search}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setCardsData(data.results);
  } catch (error) {
    throw new Error(`The following error has ocurred ${error}`);
  }
}
export async function getSingleCharacter(id: number) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return await response.json();
  } catch (error) {
    throw new Error(`The following error has ocurred ${error}`);
  }
}
