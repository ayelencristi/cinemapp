import { api } from "../../../utils";

type Payload = {
    name: string,
    lastname: string,
    email: string,
    password: string,
    birthdate: Date
}

const signup = async (payload: Payload) => {
    try {
        const response = await api.post("/users.json", payload);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
};


export { signup };