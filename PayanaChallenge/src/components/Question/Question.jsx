import { useState } from "react";
import questions from "../../mock/questions.json";

export function Question({ paso, setPaso, respuestas, setRespuestas }) {
  const question = questions.preguntas.find((q) => q.id === paso);

  const [opcion, setOpcion] = useState(null);

  const handleSiguiente = () => {
    setRespuestas({ ...respuestas, [paso]: opcion });
    setPaso(paso + 1);
    setOpcion(null);
  };

  const handleAtras = () => {
    setOpcion(respuestas[paso - 1] || null);
    setPaso(paso - 1);
  };

  const toggleOpcion = (i) => {
    if (opcion === i) {
      setOpcion(null);
    } else {
      setOpcion(i);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-t from-cyan-700 to-blue-900 text-white rounded-lg p-5">
      <h2>{question.texto}</h2>
      <ul className="flex gap-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <li
            key={i}
            className={`px-4 py-2 hover:bg-blue-700 rounded-full cursor-pointer ${
              opcion === i ? "bg-blue-400" : "bg-blue-900"
            }`}
            onClick={() => toggleOpcion(i)}
          >
            {i}
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-between">
        <button
          className="bg-gray-400 hover:bg-gray-500 p-2 text-white rounded-lg"
          onClick={handleAtras}
        >
          Atrás
        </button>
        <button
          className={` p-2 text-white rounded-lg transition-all ease-in-out ${
            opcion === null
              ? "cursor-not-allowed bg-gray-700 text-gray-500 hover:bg-gray-600"
              : "bg-blue-600 hover:bg-blue-800"
          }`}
          onClick={handleSiguiente}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
