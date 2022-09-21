import React, { useContext } from 'react';
import useMousePosition from './hooks/useMousePosition';
import { MouseContext } from './context/mouse-context';

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className={'cursor ' + cursorType}></div>
    </>
  );
}
