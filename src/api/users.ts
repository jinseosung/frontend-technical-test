import { User } from "../types/user";
import db from "../server/db.json";

export const getAllUsers = (): User[] => {
  return db.users;
};

export const getUserById = (id: number): User => {
  return db.users.find((user) => user.id === id);
};
