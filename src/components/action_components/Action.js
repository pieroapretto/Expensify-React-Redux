import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Who is the one true Meme Lord?
    </button>
  </div>
);

export default Action;