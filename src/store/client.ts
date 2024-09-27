import { atom } from "jotai";
import { ClientItem } from "../services/mock";

type ClientMap = Record<string, ClientItem>;

export const clientAtom = atom<ClientMap>({});
