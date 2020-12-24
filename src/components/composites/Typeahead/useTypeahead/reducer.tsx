import * as stateChangeTypes from './types';
import { getDefaultValue } from './utils';

type IState = {
  isOpen: boolean;
  selectedItem: any;
  inputValue: string;
};

export function useTypeaheadReducer(state: IState, action: any) {
  const { type, props } = action;
  let changes;

  switch (type) {
    case stateChangeTypes.ItemClick:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index]),
      };
      break;
    case stateChangeTypes.InputBlur:
      if (state.isOpen) {
        changes = {
          isOpen: false,
        };
      }
      break;
    case stateChangeTypes.InputChange:
      changes = {
        isOpen: true,
        inputValue: action.inputValue,
      };
      break;

    case stateChangeTypes.ToggleButtonClick:
    case stateChangeTypes.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
      };
      break;
    case stateChangeTypes.FunctionOpenMenu:
      changes = {
        isOpen: true,
      };
      break;
    case stateChangeTypes.FunctionCloseMenu:
      changes = {
        isOpen: false,
      };
      break;

    case stateChangeTypes.FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem),
      };
      break;
    case stateChangeTypes.ControlledPropUpdatedSelectedItem:
    case stateChangeTypes.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue,
      };
      break;
    case stateChangeTypes.FunctionReset:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue'),
      };
      break;
    default:
      throw new Error('Reducer called without proper action type.');
  }

  return {
    ...state,
    ...changes,
  };
}
