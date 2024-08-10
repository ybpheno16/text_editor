import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { setText, setFont, setSize, setColor } from '../Store';

const TextEditor = () => {
  const dispatch = useDispatch();
  const { text, font, size, color } = useSelector((state) => state.text.present);

  return (
    <div>
      <div className="toolbar">
        <select value={font} onChange={(e) => dispatch(setFont(e.target.value))}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
        <input
          type="number"
          value={size}
          onChange={(e) => dispatch(setSize(e.target.value))}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => dispatch(setColor(e.target.value))}
        />
      </div>
      <textarea
        style={{ fontFamily: font, fontSize: `${size}px`, color }}
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <div className="undo-redo">
        <button onClick={() => dispatch(ActionCreators.undo())}>Undo</button>
        <br />
        <br />
        <button onClick={() => dispatch(ActionCreators.redo())}>Redo</button>
      </div>
    </div>
  );
};

export default TextEditor;
