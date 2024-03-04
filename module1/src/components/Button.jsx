import "./Button.css";

import { useState } from "react";

export const Button = ({ text }) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        {text} = {state}
      </button>
    </div>
  );
};

export default Button;
