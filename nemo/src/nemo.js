import React from "react";

const Nemo = (props) => {
  const [count, setCount] = React.useState(3);

  console.log("innemo");
  console.log(count);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    setCount(count > 0 ? count - 1 : window.alert("네모가 없습니다."));
  };

  const nemo_count = Array.from({ length: count }, (v, i) => i);
  return (
    <div className="App">
      {nemo_count.map((num, index) => {
        return (
          <div
            key={index}
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "grey",
              margin: "10px",
            }}
          >
            nemo
          </div>
        );
      })}
      <div>
        <button onClick={addNemo}>하나 추가!</button>
        <button onClick={removeNemo}>하나 빼기!</button>
      </div>
    </div>
  );
};

export default Nemo;
