import React, { useState } from 'react';
import Block from '@uiw/react-color-block';

function ColorPop() {
  const [hex, setHex] = useState("#fff");
  return (
    <>
      <Block
        color={hex}
        onChange={(color) => setHex(color.hex)}
      />
      <div style={{ background: hex, marginTop: 30, padding: 10 }}>
        {hex}
      </div>
    </>
  );
}

export default ColorPop;