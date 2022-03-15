import { createStore } from "redux";
import { Reducer } from "../Reducers/Reducer";

export let store = createStore(Reducer);
