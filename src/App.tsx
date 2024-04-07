import { useEffect, useState } from "react";

const App = () => {

  const initialRandomColor = `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`

  const initialColor = [`${initialRandomColor}`, `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`, `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`, `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`].sort()

  const [containerRandomColor, setContainerRandomColor] = useState<string>(initialRandomColor)
  const [gameColors, setGameColors] = useState<string[]>(
    initialColor)
  const [result, setResult] = useState<'true' | 'false' | 'unselected'>('unselected')
  const [btnClicked, setbtnClicked] = useState<boolean>(false)

  const handleSelectColor = (btnColor: string) => {
    if (!btnClicked) {
      setbtnClicked(true)
      const result: any = document.getElementById('result');
      const resultSpan: any = document.getElementById('resultSpan');
      let intervalId: any;

      let btnClickedColor: any = document.getElementById(btnColor)

      let btnCorectClickedColor: any = document.getElementById(containerRandomColor)

      btnCorectClickedColor.style.backgroundColor = 'green'

      if (btnColor === containerRandomColor) {
        setResult('true')
        result.innerHTML = 'Correct';
        intervalId = setInterval(() => {
          resultSpan.innerText += '.';
        }, 500);
      } else {
        btnClickedColor.style.backgroundColor = 'red'
        setResult('false')
        result.innerHTML = 'False';
        intervalId = setInterval(() => {
          resultSpan.innerText += '.';
        }, 500);
      }
      setTimeout(() => {
        clearInterval(intervalId);
        result.innerHTML = '';
        resultSpan.innerText = '';
        setResult('unselected')
        btnClickedColor.style.backgroundColor = '#9e9eb0'
        btnCorectClickedColor.style.backgroundColor = '#9e9eb0'

        const containerCol = `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`;
        setContainerRandomColor(containerCol);

        setGameColors([`rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`, `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`, `rgba(${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random() * 255).toFixed(0)},${(Math.random()).toFixed(1)})`, containerCol].sort());

        setbtnClicked(false)
      }, 1600);
    }
  };

  return (
    <div className='bg-neutral-800 w-screen h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center space-y-12">
        <div className={` md:w-[500px] w-[360px] h-[200px] md:h-[300px] 
           rounded-xl shadow shadow-slate-100`}
          style={{
            backgroundColor: `${containerRandomColor}`
          }}
        />

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {
            gameColors.map((arr: string) => (
              <button
                id={arr}
                onClick={() => handleSelectColor(arr)}
                className={` capitalize bg-[#9e9eb0] py-4 px-2 flex items-center justify-center text-[14px]  border-black tracking-wider rounded-md`}

              >
                {arr}
              </button>
            ))
          }
        </div>
        <div className={`text-[42px] ${result === 'true' && 'text-green-500'}  ${result === 'false' && 'text-red-500'} text-center  flex justify-center items-center h-[80px]`}>
          <h1
            id="result"
          >
          </h1>
          <h1 id="resultSpan"></h1>
        </div>
      </div>
    </div>
  )
}

export default App