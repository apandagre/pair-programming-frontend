export function addCursor(username, clientId, color) {
  const styles = `
      .yRemoteSelection-${clientId} {
          background-color: ${color};
      }
      
      .yRemoteSelectionHead-${clientId} {
          position: absolute;
          border-left: ${color} solid 2px;
          border-top: ${color} solid 2px;
          border-bottom: ${color} solid 2px;
          height: 100%;
          box-sizing: border-box;
      }

      .yRemoteSelectionHead-${clientId}::after {
          position: absolute;
          content: '';
          border: 3px solid ${color};
          border-radius: 4px;
          left: -4px;
          top: -5px;
      }
    `;
  const styleElement = document.createElement("style");
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = styles;
  } else {
    styleElement.appendChild(document.createTextNode(styles));
  }

  document.head.appendChild(styleElement);
}

// instead of generating completely random colors, generate some soothing colors :)
export function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
