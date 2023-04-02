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

    case 'AI Tree Search: 2':
      return treeSearch(2);

    case 'AI Tree Search: 3':
      return treeSearch(3);

    case 'AI Tree Search: 4':
      return treeSearch(4);

    case 'AI Tree Search: 5':
      return treeSearch(5);

    case 'AI Tree Search: 6':
      return treeSearch(6);

    case 'AI Tree Search: 7':
      return treeSearch(7);

    case 'AI Tree Search: 8':
      return treeSearch(8);

    default:
      return undefined;
  }
}

export function getAIPlayerTypes() {
  return ['AI Random', 'AI Tree Search: 0', 'AI Tree Search: 1'];
}
