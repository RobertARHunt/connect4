import { randomPickerAI } from './randomPickerAI';

export function getAI(playerType) {
  switch (playerType) {
    case 'AI lvl 1':
      return randomPickerAI;

    default:
      return undefined;
  }
}
