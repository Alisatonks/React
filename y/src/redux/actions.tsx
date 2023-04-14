// import { Dispatch } from 'redux';
// import { ICharacter } from '../types/types';

// export type IRequestAllCharacters = {
//   type: string;
// };

// export type IRequestCharacter = {
//   type: string;
//   text: string;
//   data: ICharacter[];
// };

// export function requestCharacter(text: string) {
//   return { type: 'REQUEST_CHARACTER', text };
// }

// export function receiveCharacter(data: ICharacter[]) {
//   return { type: 'RECEIVE_CHARACTER', data };
// }

// export function failGettingCharacter(error: Error) {
//   return { type: 'FAIL_GETTING_CHARACTER', error };
// }
// export function requestAllCharacters() {
//   return { type: 'REQUEST_ALL_CHARACTERS' };
// }

// export function receiveAllCharacters(data: ICharacter[]) {
//   return { type: 'RECEIVE_ALL_CHARACTERS', data };
// }

// export function failGettingAllCharacters(error: Error) {
//   return { type: 'FAIL_GETTING_ALL_CHARACTERS', error };
// }

// export function requestSingleCharacter(id: number) {
//   return { type: 'REQUEST_SINGLE_CHARACTER', id };
// }

// export function receiveSingleCharacter() {
//   return { type: 'RECEIVE_SINGLE_CHARACTER' };
// }

// export function failGettingSingleCharacter() {
//   return { type: 'FAIL_GETTING_SINGLE_CHARACTER' };
// }

// export function getAllCharacters(): (
//   dispatch: Dispatch<IRequestAllCharacters>
// ) => Promise<void> {
//   return async (dispatch: Dispatch<IRequestAllCharacters>) => {
//     dispatch(requestAllCharacters());
//     try {
//       const response = await fetch(`https://rickandmortyapi.com/api/character`);
//       const data = await response.json();
//       dispatch(receiveAllCharacters(data.results));
//     } catch (error) {
//       dispatch(failGettingAllCharacters(error as Error));
//     }
//   };
// }

// export function getCharacter(
//   text: string
// ): (dispatch: Dispatch<IRequestCharacter>) => Promise<void> {
//   return async () => {
//     dispatch(requestCharacter(text));
//     try {
//       const response = await fetch(
//         `https://rickandmortyapi.com/api/character/?name=${text}`
//       );
//       const data = await response.json();
//       dispatch(receiveCharacter(data.results));
//     } catch (error) {
//       dispatch(failGettingCharacter(error as Error));
//     }
//   };
// }
