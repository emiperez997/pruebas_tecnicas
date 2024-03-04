import { useState } from "react";
import { Question } from "./components/Question/Question";
import { Answers } from "./components/Answers/Answers";

function App() {
  const [paso, setPaso] = useState(0);

  const [respuestas, setRespuestas] = useState({});

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <main className="flex justify-center items-center overflow-auto">
        <div className="flex flex-col gap-5">
          {paso === 0 && (
            <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-cyan-700 to-blue-900 text-white rounded-lg p-5">
              <h2>¡Bienvenido al Challenge de Payana!</h2>
              <button
                className="bg-blue-600 hover:bg-blue-800 p-2 text-white rounded-lg"
                onClick={() => setPaso(1)}
              >
                Comenzar
              </button>
            </div>
          )}

          {paso > 0 && paso < 6 && (
            <Question
              paso={paso}
              setPaso={setPaso}
              respuestas={respuestas}
              setRespuestas={setRespuestas}
            />
          )}

          {paso === 6 && (
            <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-cyan-700 to-blue-900 text-white rounded-lg p-5">
              <h2>¡Gracias por participar!</h2>

              <Answers respuestas={respuestas} />

              <button
                className="bg-blue-600 hover:bg-blue-800 p-2 text-white rounded-lg"
                onClick={() => {
                  setPaso(0);
                  setRespuestas({});
                }}
              >
                Volver a empezar
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
