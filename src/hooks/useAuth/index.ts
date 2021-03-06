import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = () => {

    const [tokenStorage, setTokenStorage] = useState<string | undefined>(
        localStorage.getItem("cinema-token") || undefined
    );

    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

    const { push } = useHistory();

    const { setCurrentUser, currentUser } = useContext(AuthContext);

    useEffect(() => {
        if (tokenStorage) localStorage.setItem("cinema-token", tokenStorage);
    }, [tokenStorage]);

    useEffect(() => {
        loginWithToken();
    }, []);


    /**
   *
   * @param user
   */

    const createUserToken = async (user: User): Promise<string | null> => {
        const newToken = Math.random().toString(36).substr(2);

        try {
            await api.patch(`/users/${user.idDB}.json`, { sessionToken: newToken });
            return newToken;
        } catch (err) {
            return null;
        }
    };

    /**
 *
 * @param user
 * @param pass
 * @returns
 */

    const login = async (email: string, password: string) => {
        try {
            const response = await api.get("/users.json");

            /* Tarea de backend */
            const users: User[] = mapToArray(response.data);

            const user = users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {

                const token = await createUserToken(user);

                if (token) {
                    setTokenStorage(token);
                    push("/");
                    setCurrentUser(user);
                } else {
                    setHasUserLoggedIn(false);
                }
            } else {
                throw new Error("El usuario no existe");
            }



        } catch (e) {
        }
    };

    const loginWithToken = async () => {
        let user;
        try {
            const response = await api.get("/users.json")

            const users: User[] = mapToArray(response.data)

            if (tokenStorage) {
                user = users.find((user) => user.sessionToken === tokenStorage)
            }
            if (user) {
                setCurrentUser(user);
                setHasUserLoggedIn(true)
            } else {
                setHasUserLoggedIn(false)
            }
        } catch (e) {

        }
    }

    const logout = () => {
        localStorage.removeItem("cinema-token")
        setCurrentUser(undefined)
        push("/login")
    }


    return { login, loginWithToken, logout, hasUserLoggedIn, currentUser }
}

export { useAuth }