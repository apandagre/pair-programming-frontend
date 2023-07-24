import * as Y from "yjs";
import { randomColor, randomInt } from "./utils";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";

export default function (room, editorRef) {
  const doc = new Y.Doc();
  doc.clientID = randomInt(0, 100);

  const provider = new WebrtcProvider(room, doc, {
    signaling: ["wss://signaling.chadburn.app:443"],
  });
  const type = doc.getText("monaco");
  const awareness = provider.awareness;

  awareness.setLocalStateField("user", {
    name: "user-" + doc.clientID,
    color: randomColor(),
  });

  const binding = new MonacoBinding(
    type,
    editorRef.current.getModel(),
    new Set([editorRef.current]),
    awareness
  );

  awareness.on("update", (action) => {
    for (let id of action.added) {
      let { user } = awareness.getStates().get(id);
      addCursor(user.name, id, user.color);
    }

    for (let id of action.removed) {
      let userObj = awareness.getStates().get(id);
      // if possible, remove the particular style element..
    }
  });
}
