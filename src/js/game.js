export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData { 
}

export function readGameSaving() {
  console.log('readGame');
}

export function writeGameSaving() {
  console.log('saveGame');
}

import Character from './domain';
