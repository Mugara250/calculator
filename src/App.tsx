import { useState, type ReactNode } from "react";

type Symbols = "+/-" | "/" | "*" | "-" | "+" | "%";
interface State {
  display: string[];
  operation: string;
  operand1: string[];
  operand2: string[];
  result: number[];
  presentResult: boolean;
}

function App() {
  // state object to keep track of the calculator's state
  const initialState: State = {
    display: [],
    operation: "",
    operand1: [],
    operand2: [],
    result: [],
    presentResult: false,
  };

  const [state, setState] = useState(initialState);

  // Handler for the calculator display
  function onDisplay(event: React.MouseEvent) {
    const currentTarget = event.target as HTMLButtonElement;
    if (state.operation === "") {
      if (!state.presentResult)
        setState({
          ...state,
          display: [...state.display, currentTarget.id],
          operand1: [...state.operand1, currentTarget.id],
        });
    } else {
      if (!state.presentResult)
        setState({
          ...state,
          display: [...state.display, currentTarget.id],
          operand2: [...state.operand2, currentTarget.id],
        });
    }
  }

  // Handler for the AC button
  function onReset() {
    setState({ ...state, display: [], operation: "", presentResult: false });
  }

  // Handler for any of the operations buttons
  function onOperation(event: React.MouseEvent) {
    const currentTarget = event.target as HTMLButtonElement;
    setState({ ...state, display: [], operation: currentTarget.id });
  }
  // Handler for the toggle sign button
  function onToggleSign() {
    if (state.operation === "") {
      if (!state.presentResult && !state.display.includes("-")) {
        state.display.unshift("-");
        state.operand1.unshift("-");
        setState({
          ...state,
          display: [...state.display],
          operand1: [...state.operand1],
        });
      }
    } else {
      if (!state.presentResult && !state.display.includes("-")) {
        state.display.unshift("-");
        state.operand2.unshift("-");
        setState({
          ...state,
          display: [...state.display],
          operand2: [...state.operand2],
        });
      }
    }
  }
  console.log(state);
  // Hanler for the equal button
  function onEqual() {
    switch (state.operation) {
      case "+":
        setState({
          ...state,
          result: [
            ...state.result,
            +state.operand1.join("") + +state.operand2.join(""),
          ],
          display: String(
            +state.operand1.join("") + +state.operand2.join("")
          ).split(""),
          operand1: [],
          operand2: [],
          presentResult: true,
        });
        onReset();
        break;
      case "-":
        setState({
          ...state,
          result: [
            ...state.result,
            +state.operand1.join("") - +state.operand2.join(""),
          ],
          display: String(
            +state.operand1.join("") - +state.operand2.join("")
          ).split(""),
          operand1: [],
          operand2: [],
          presentResult: true,
        });
        break;
      case "*":
        setState({
          ...state,
          result: [
            ...state.result,
            +state.operand1.join("") * +state.operand2.join(""),
          ],
          display: String(
            +state.operand1.join("") * +state.operand2.join("")
          ).split(""),
          operand1: [],
          operand2: [],
          presentResult: true,
        });
        break;
      case "/":
        setState({
          ...state,
          result: [
            ...state.result,
            +state.operand1.join("") / +state.operand2.join(""),
          ],
          display: String(
            +state.operand1.join("") / +state.operand2.join("")
          ).split(""),
          operand1: [],
          operand2: [],
          presentResult: true,
        });
        break;
    }
  }

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">
        Calculator Application
      </h1>
      <div className=" border-[1px] border-black text-3xl w-[35%] mx-auto mt-5">
        {state.display.length === 0 ? (
          <div
            id="display"
            className="bg-gray-400 text-white flex justify-end py-2 text-[3rem]"
          >
            {0}
          </div>
        ) : (
          <div
            id="display"
            className="bg-gray-400 text-white flex justify-end py-2 text-[3rem]"
          >
            {...state.display}
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
            onDisplay={onToggleSign}
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
        <div id="fifth-row">
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
