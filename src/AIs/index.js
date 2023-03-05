import { randomPickerAI } from './randomPickerAI';
import { treeSearch } from './treeSearch';

export function getAI(playerType) {
  switch (playerType) {
    case 'AI Random':
      return randomPickerAI;

    case 'AI Tree Search: 0':
      return treeSearch(0);

    case 'AI Tree Search: 1':
      return treeSearch(1);

    default:
      return undefined;
  }
}

export function getAIPlayerTypes() {
  return ['AI Random', 'AI Tree Search: 0', 'AI Tree Search: 1'];
}
