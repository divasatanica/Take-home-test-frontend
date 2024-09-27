import { useCallback, useEffect, useRef } from "react";
import { GetClientList } from "../../../../services";
import { ClientItem } from "../../../../services/mock";
import { useAtom, useSetAtom } from "jotai";
import { clientAtom } from "../../../../store/client";

export function useClientMap() {
  const [clientMap] = useAtom(clientAtom);
  const clientMapRef = useRef(clientMap);
  const setClientMap = useSetAtom(clientAtom);

  const getClientList = useCallback(async () => {
    if (Object.keys(clientMapRef.current).length > 0) {
      return;
    }
    const res = await GetClientList();
    const map = res?.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.clientId]: curr,
      };
    }, {}) as Record<string, ClientItem>;

    setClientMap(map);
    clientMapRef.current = map;
  }, [setClientMap]);

  useEffect(() => {
    getClientList();
  }, [getClientList]);

  return {
    clientMap,
  };
}
