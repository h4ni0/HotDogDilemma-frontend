const BACKEND_URL =
  import.meta.env.VITE_HOTDOG_BACKEND_URL || "http://localhost:3000";

const storeAnswer = async (answer: string): Promise<boolean> => {
  const response = await fetch(`${BACKEND_URL}/api/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answerBody: answer }),
  });

  return response.ok;
};

export default storeAnswer;
