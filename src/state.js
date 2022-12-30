import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "clear":
      return {
        ...state,
        messages: { unread_count: 0 },
        navList: [],
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
    case 'set navList':
      return { ...state, navList: action.payload};
    case 'set theme': 
      return {...state, theme: action.payload}
    case 'set drawer':
      return {...state, drawer: !state.drawer}
    default:
      return state;
  }
};

const initialState = {
  messages: {
    unread_count: 1
  },
  // 侧边栏是否打开
  drawer: true,
  navList: [],
  users: {
    uid: '1',
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
