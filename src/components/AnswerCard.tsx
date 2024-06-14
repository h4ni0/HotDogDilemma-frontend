type AnswerCardProps = {
  answer: string;
  createdAt: string;
};

const formatTime = (createdAt: string): string => {
  const minutesAgo =
    (new Date().getTime() - new Date(createdAt).getTime()) / 60000;
  if (minutesAgo < 1) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return `${Math.floor(minutesAgo)} minutes ago`;
  } else {
    return `${Math.floor(minutesAgo / 60)} hours ago`;
  }
};

const AnswerCard = ({ answer, createdAt }: AnswerCardProps) => {
  const timeText = formatTime(createdAt);

  return (
    <div className="border p-5 rounded-lg bg-orange-100">
      <p className="text-lg">{answer}</p>
      <p className="text-sm text-zinc-500 mt-2">{timeText}</p>
    </div>
  );
};

export default AnswerCard;
