import { getLocalStorageData } from "../utils/localStorage";
import { LOCAL_STORAGE } from "../utils/constants";
import { TuserSession } from "../contexts/types";

export const isAuthenticated = (): boolean => {
    const userSession: TuserSession | unknown = getLocalStorageData(LOCAL_STORAGE.SESSION) || {};
  
    return Boolean(Object.keys(userSession as TuserSession).length);
};
