import questions from "../../mock/questions.json";

export function Answers({ respuestas }) {
  const getBgColor = (i) => {
    if (i <= 2) return "bg-red-500";
    if (i <= 3) return "bg-yellow-500";
    if (i === 4) return "bg-blue-400";
    if (i === 5) return "bg-green-700";
    return "bg-green-500";
  };

  return (
    <>
      {questions.preguntas.map((q) => (
        <div key={q.id} className="flex gap-5 text-white">
          <h3>{q.texto}</h3>
          <p
            className={`px-4 py-2 rounded-full bg-blue-700 ${getBgColor(
              respuestas[q.id]
            )}`}
          >
            {respuestas[q.id]}
          </p>
        </div>
      ))}
    </>
  );
}
