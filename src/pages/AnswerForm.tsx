import { useState } from "react";
import { invalidAnswers } from "../constants";
import Message from "../components/Message";
import storeAnswer from "../api/storeAnswer";

const AnswerForm = (): JSX.Element => {
  const [answer, setAnswer] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!answer || invalidAnswers.includes(answer.toLowerCase())) {
      setError("Please proivde a valid answer!");
      setTimeout(() => setError(""), 5000);
      return;
    }

    const responseCode = await storeAnswer(answer);

    if (responseCode) {
      setAnswer("");

      setSuccess("Answer submitted successfully!");
      setTimeout(() => setSuccess(""), 5000);
    } else {
      setError("Failed to submit answer. Please try again!");
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="relative px-3 lg:px-0">
      <h1 className="text-4xl font-semibold mt-5 text-orange-950">
        IS A HOT DOG A SANDWICH? WHY?
      </h1>
      <form className="mt-5" onSubmit={handleForm}>
        <textarea
          className="w-full text-xl p-3 border border-gray-300 rounded-md"
          rows={4}
          placeholder="What's your answer?"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-3 px-10 rounded mt-5 transition-all">
          Submit
        </button>
      </form>
      {error && <Message error={error} />}
      {success && <Message success={success} />}
    </div>
  );
};

export default AnswerForm;
