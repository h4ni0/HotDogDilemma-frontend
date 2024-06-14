import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import AnswerCard from "../components/AnswerCard";

const BACKEND_URL =
  import.meta.env.VITE_HOTDOG_BACKEND_URL || "http://localhost:3000";

const socket = io(BACKEND_URL);

type Answer = {
  answer: string;
  createdAt: string;
};

const Answers = (): JSX.Element => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/answers`);
        const data = await response.json();
        setAnswers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnswers();

    // real time updates
    const handleNewAnswer = (answer: Answer) => {
      setAnswers((prevAnswers) => [answer, ...prevAnswers].slice(0, 100));
    }
    socket.on("new_answer", handleNewAnswer);

    return () => {
      socket.off("new_answer");
    };
  }, []);

  return (
    <div className="px-4 lg:px-0">
      <h1 className="w-full text-3xl font-semibold mt-5 text-orange-950 flex flex-col lg:flex-row items-center justify-center gap-0 md:gap-4">
        <span className="text-red-500">THE</span>
        <span className="text-[2.5rem] md:text-5xl text-center leading-tight">
          "IS A HOT DOG A SANDWICH? WHY?"
        </span>
        <span className="text-red-500">Dilemma</span>
      </h1>
      <div className="py-4"></div>
      <h2 className="text-3xl font-semibold text-orange-950">
        Latest
        <span className="bg-red-500 text-white rounded px-2 mx-2 text-2xl">
          100
        </span>
        Answers
      </h2>

      <div className="mt-5 space-y-5">
        {answers.map((answer, index) => (
          <AnswerCard key={index} {...answer} />
        ))}
      </div>
    </div>
  );
};

export default Answers;
