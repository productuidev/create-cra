import React, {useState} from "react"; 

const Counter = () => {
  
  // 0에서 출발
  // 1씩 증가하고 1씩 감소하는 count 상태

  // console.log("counter 호출!");

  const [count, setCount] = useState(0);
  
  // useState는 React의 메서드이고, 이것으로 배열을 반환하고 배열의 비구조화할당을 통해서
  // 0번째 index는 count, 1번째 index는 setCount 라는 상수로 받아 옴
  // 0번째 index인 count 인자는 상태의 값으로 사용됨
  // 1번째 index인 setCount 인자는 count를 변화시키는 상태변화 함수로써 사용됨
  // useState(0)은 count라는 상태를 만드는데에 초기값으로 사용됨 ---> 0에서 출발

  // 상태 전달
  const onIncrease = () => {
    setCount(count + 1); // 1씩 증가 
  }

  const onDecrease = () => {
    setCount(count - 1); // 1씩 감소
  }

  const [count2, setCount2] = useState(0);

  const onIncrease2 = () => {
    setCount2(count2 + 1); // 1씩 증가 
  }

  const onDecrease2 = () => {
    setCount2(count2 - 1); // 1씩 감소
  }

  return (
    <div>
      <h2>{count}</h2> {/* 이런 식으로 count를 jsx에서 반환해서 화면에 표시 */}
      <button onClick={onIncrease}>+</button> {/* 버튼을 눌렀을 때 이 함수가 수행되어야 하니까 onClick에 onIncrease 함수를 넣어준다 */}
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2> {/* 이런 식으로 count를 jsx에서 반환해서 화면에 표시 */}
      <button onClick={onIncrease2}>+</button> {/* 버튼을 눌렀을 때 이 함수가 수행되어야 하니까 onClick에 onIncrease 함수를 넣어준다 */}
      <button onClick={onDecrease2}>-</button>
    </div>
  )
}

export default Counter;
