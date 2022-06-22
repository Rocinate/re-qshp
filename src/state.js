import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "clear":
      return {
        ...state,
        messages: { unread_count: 0 },
        navlist: [],
        users: { uid: '', name: '' },
      };
    case "set user": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "set messages": {
      return {
        ...state,
        messages: { unread_count: action.payload}
      };
    }
    case "read messages": {
      const messages = [
        ...action.payload.messages,
        ...state.rooms[action.payload.id].messages,
      ];
      return {
        ...state,
        messages: {unread_count: 0}
      };
    }
    case 'set navlist':
      return { ...state, navlist: action.payload};
    case 'set theme': 
      return {...state, theme: action.payload}
    default:
      return state;
  }
};

const initialState = {
  messages: {
    unread_count: 0
  },
  navlist: [],
  users: {
    uid: '',
    name: ''
  },
  theme: 'white' // dark, blue, dinned
};

const useAppStateContext = () => {
  return useReducer(reducer, initialState);
};

export const AppContext = createContext();

export const useAppState = () => {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
};

export default useAppStateContext;
