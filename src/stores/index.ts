import { MobxStore } from "./mobxStore";
import { create } from "mobx-persist";

interface Stores {
  [key: string]: any;
}

export const stores: Stores = {
  mobxStore: new MobxStore(),
};

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

Object.keys(stores).map((val) => hydrate(val, stores[val]));
