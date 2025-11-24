import axios from "axios";
import type { User } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
  const res = await axios.get<User[]>(BASE_URL);
  return res.data;
}

export async function getUser(id: number): Promise<User> {
  const res = await axios.get<User>(`${BASE_URL}/${id}`);
  return res.data;
}

export default { getUsers, getUser };
