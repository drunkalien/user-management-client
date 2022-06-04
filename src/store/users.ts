import { proxy } from "valtio";

type Controls = {
  users: number[];
  block: () => void;
  unBlock: () => void;
  delete: () => void;
  setUsers: (users: number[]) => void;
};

export const controls = proxy<Controls>({
  users: [],
  block() {
    if (!controls.users.length) {
      return;
    }
    console.log(controls.users);
  },
  unBlock() {
    if (!controls.users.length) {
      return;
    }
    console.log(controls.users);
  },
  delete() {
    if (!controls.users.length) {
      return;
    }
    console.log(controls.users);
  },
  setUsers(users) {
    if (!controls.users.length) {
      return;
    }
    console.log(users);
  },
});
