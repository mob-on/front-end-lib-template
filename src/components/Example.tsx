import { useState } from "react";

const Example = () => {
  const [text, setText] = useState("Hello world");

  return (
    <>
      <p>{text}</p>
      <button onClick={() => setText("Button clicked")}>Change text</button>
    </>
  );
};

export default Example;
