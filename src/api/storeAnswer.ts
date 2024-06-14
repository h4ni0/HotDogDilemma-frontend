const storeAnswer = async (answer: string): Promise<boolean> => {
  const response = await fetch("http://localhost:3000/api/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answerBody: answer }),
  });

  return response.ok;
};

export default storeAnswer;
