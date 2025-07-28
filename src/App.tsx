import { useState, type ReactNode } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mt-4">
        Calculator Application
      </h1>
      <div className=" border-[1px] border-black text-3xl w-[35%] mx-auto mt-5 flex flex-col">
        <div id="display" className="bg-gray-400 text-white p-3">
          Display
        </div>
        <div id="first-row">
          <Button
            id="ac"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            AC
          </Button>
          <Button
            id="ac"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            +/-
          </Button>
          <Button
            id="ac"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            %
          </Button>
          <Button
            id="ac"
            className="text-white w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400"
          >
            &divide;
          </Button>
        </div>
        <div id="second-row">
          <Button
            id="7"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            7
          </Button>
          <Button
            id="8"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            8
          </Button>
          <Button
            id="9"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            9
          </Button>
          <Button
            id="ac"
            className="text-white w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400"
          >
            &times;
          </Button>
        </div>
        <div id="third-row">
          <Button
            id="4"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            4
          </Button>
          <Button
            id="5"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            5
          </Button>
          <Button
            id="6"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            6
          </Button>
          <Button
            id="-"
            className="text-white w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400"
          >
            -
          </Button>
        </div>
        <div id="fourth-row">
          <Button
            id="1"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            1
          </Button>
          <Button
            id="2"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            2
          </Button>
          <Button
            id="3"
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            3
          </Button>
          <Button
            id="+"
            className="text-white w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400"
          >
            +
          </Button>
        </div>
        <div id="fourth-row">
          <Button
            id="0"
            className="w-[50%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            0
          </Button>
          <Button
            id="."
            className="w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400"
          >
            .
          </Button>
          <Button
            id="="
            className="text-white w-[25%] h-[100px] border-r-[1px]  border-b-[1px] border-gray-400 bg-orange-400"
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
  id: string;
  className: string;
  children: ReactNode;
}
const Button = ({ id, className, children }: Props) => {
  return (
    <button type="button" id={id} className={className}>
      {children}
    </button>
  );
};
