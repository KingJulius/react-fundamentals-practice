import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle((prev) => !prev);
    },
  }));

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>Child Button</button>
      {toggle && <p>Lorem Ipsum...</p>}
    </div>
  );
});

Button.displayName = "Button";

export default Button;
