import axios from "axios";
const URL = "http://localhost:3001/api/contacts/";

const getAll = () => {
  return axios.get(URL);
};

const create = (newContact) => {
  return axios.post(URL, newContact);
};

const remove = (id) => {
    return axios.delete(URL + id);
}

const update = (id, newContact) => {
    return axios.put(URL + id, newContact);
}

const exports = {getAll, create, remove, update}
export default exports;
