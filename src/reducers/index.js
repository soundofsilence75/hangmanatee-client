import { combineReducers } from "redux";
import user from "./user";
import game from "./game";
import wordSets from "./wordSets";

const rootReducer = combineReducers({
  user,
  game,
  wordSets
});

export default rootReducer;