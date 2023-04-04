import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef(null);
  const nameRef = useRef(null);

  function submitName(e){
    e.preventDefault()
    update(nameRef.current.value)
  }
  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }
  return (
    <div>
      <p onMouseOver={() => console.log("On Mouse Over")}>{name}</p>
      <button onClick={() => console.log("Button 1 here!")}>Button 1</button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={() => pressButtonParams(`Hello ${name}`)}>Button 3</button>
      <input
        placeholder="Send a text to your father"
        onFocus={() => console.log("Input Focused")}
        onChange={(e) => console.log("Input changed: ", e.target.value)}
        onCopy={() => console.log("Copied text from input")}
        ref={messageRef}
      />

      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name" />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
