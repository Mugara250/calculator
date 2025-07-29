import { useState, type ReactNode } from "react";

type Symbols = "+/-" | "/" | "*" | "-" | "+" | "%";
function App() {
  const numbers: number[] = [];
  const [display, setDisplay] = useState(numbers);
  const [on, setOn] = useState(false);
  const [operation, setOperation] = useState("");
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [result, setResult] = useState(0);
  function onDisplay(event: React.MouseEvent) {
    const currentTarget = event.target as HTMLButtonElement;
    setOn(true);
    if (operand1) {
      setDisplay([...display, Number(currentTarget.id)]);
      setOperand2(+display.join(""));
    } else {
      setDisplay([...display, Number(currentTarget.id)]);
    }
  }
  function onReset() {
    setOn(false);
    setDisplay(numbers);
  }
  function onOperation(event: React.MouseEvent) {
    const currentTarget = event.target as HTMLButtonElement;
    // let button = currentTarget.id;
    setOperation(currentTarget.id);
    onReset();
    setOperand1(+display.join(""));
  }
  function onEqual(event: React.MouseEvent) {
    // const currentTarget = event.target as HTMLButtonElement;
    switch (operation) {
      case "-":
        // setDisplay(numbers);
        setResult(operand1 - operand2);
        // setDisplay(result.toString().split("").map(char => +char));
        break;
    }
  }
  console.log(result);
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">
        Calculator Application
      </h1>
      <div className=" border-[1px] border-black text-3xl w-[35%] mx-auto mt-5">
        {on === false ? (
          <div
            id="display"
            className="bg-gray-400 text-white flex justify-end py-2 text-4xl"
          >
            {0}
          </div>
        ) : (
          <div
            id="display"
            className="bg-gray-400 text-white flex justify-end py-2 text-4xl"
          >
            {...display}
          </div>
        )}
        <div id="first-row">
          <Button
            id="ac"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onReset}
          >
            AC
          </Button>
          <Button
            id="+/-"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onOperation}
          >
            +/-
          </Button>
          <Button
            id="%"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onOperation}
          >
            %
          </Button>
          <Button
            id="/"
            className="text-white w-[25%] py-8  border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400 cursor-pointer"
            onDisplay={onOperation}
          >
            &divide;
          </Button>
        </div>
        <div id="second-row">
          <Button
            id="7"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            7
          </Button>
          <Button
            id="8"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            8
          </Button>
          <Button
            id="9"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            9
          </Button>
          <Button
            id="*"
            className="text-white w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400 cursor-pointer"
            onDisplay={onOperation}
          >
            &times;
          </Button>
        </div>
        <div id="third-row">
          <Button
            id="4"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            4
          </Button>
          <Button
            id="5"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            5
          </Button>
          <Button
            id="6"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            6
          </Button>
          <Button
            id="-"
            className="text-white w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400 cursor-pointer"
            onDisplay={onOperation}
          >
            -
          </Button>
        </div>
        <div id="fourth-row">
          <Button
            id="1"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            1
          </Button>
          <Button
            id="2"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            2
          </Button>
          <Button
            id="3"
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            3
          </Button>
          <Button
            id="+"
            className="text-white w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400 cursor-pointer"
            onDisplay={onOperation}
          >
            +
          </Button>
        </div>
        <div id="fourth-row">
          <Button
            id="0"
            className="w-[50%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            0
          </Button>
          <Button
            id="."
            className="w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 cursor-pointer"
            onDisplay={onDisplay}
          >
            .
          </Button>
          <Button
            id="="
            className="text-white w-[25%] py-8 border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400 cursor-pointer"
            onDisplay={onEqual}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
// Button Component
interface Props {
  id: string | Symbols;
  className: string;
  children: ReactNode;
  onDisplay: (event: React.MouseEvent) => void;
}
const Button = ({ id, className, children, onDisplay }: Props) => {
  return (
    <button type="button" id={id} className={className} onClick={onDisplay}>
      {children}
    </button>
  );
};
