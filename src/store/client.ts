import { atom } from "jotai";
import { ClientItem } from "../services/mock";

type ClientMap = Record<string, ClientItem>;

// Use this atom to store client data globally
export const clientAtom = atom<ClientMap>({});
