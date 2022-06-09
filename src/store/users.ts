import { AxiosResponse } from "axios";
import { proxy } from "valtio";
import { request } from "../services";
import { User } from "../types";

const { post, patch } = request;

const methodsObject = {
  post,
  patch,
};

type MethodsType = keyof typeof methodsObject;
type ActionsType = "block" | "unblock" | "delete";

type Controls = {
  allUsers: User[];
  setAllUsers: (users: User[]) => void;
  getAllUsers: () => void;
  checkedUsers: string[];
  setCheckedUsers: (users: string[]) => void;
  control: (method: MethodsType, action: ActionsType) => void;
};

export const controls = proxy<Controls>({
  checkedUsers: [],
  allUsers: [],

  getAllUsers() {
    request.get("/users").then((response: AxiosResponse) => {
      controls.allUsers = response.data.users;
    });
  },
  setAllUsers(users) {
    controls.allUsers = users;
  },
  control(method, action) {
    if (!controls.checkedUsers.length) {
      return;
    }

    methodsObject[method](`/${action}`, {
      userIds: controls.checkedUsers,
    }).then((response: AxiosResponse) => {
      controls.setAllUsers(response.data.users);
    });

    controls.checkedUsers = [];
  },
  setCheckedUsers(users) {
    controls.checkedUsers = users;
  },
});
