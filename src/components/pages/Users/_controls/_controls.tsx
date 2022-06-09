import { useSnapshot } from "valtio";

import { controls } from "../../../../store/users";
import { Delete, Unlock } from "../../../icons";

const Controls = () => {
  const { control } = useSnapshot(controls);
  return (
    <div className="btn-group">
      <button
        className="btn btn-danger"
        onClick={() => control("patch", "block")}
      >
        Block
      </button>
      <button className="btn " onClick={() => control("patch", "unblock")}>
        <Unlock />
      </button>
      <button className="btn " onClick={() => control("post", "delete")}>
        <Delete />
      </button>
    </div>
  );
};

export default Controls;
