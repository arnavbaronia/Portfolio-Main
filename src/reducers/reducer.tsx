import storeType from "../types/store"; // Adjust the import path as necessary
import sampleStore from "../utils/Sample/sampleStore";

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: storeType = sampleStore, action: Action): storeType => {
  switch (action.type) {
    case "language/SET":
      return {
        ...state,
        language: state.language === "english" ? "german" : "english",
      };

    case "language/INIT":
      return {
        ...state,
        language: action.payload,
      };

    case "darkmode/TOGGLE":
      return {
        ...state,
        darkmode: !state.darkmode,
      };

    case "darkmode/INIT":
      return {
        ...state,
        darkmode: action.payload,
      };

    case "sounds/TOGGLE":
      return {
        ...state,
        sounds: !state.sounds,
      };

    default:
      return state;
  }
};

export default reducer;
