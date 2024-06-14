type MessageProps = {
  error?: string;
  success?: string;
};

const Message = ({ error, success }: MessageProps) => {
  if (!error && !success) return null;

  const pClasses =
    "fixed md:absolute bottom-5 md:bottom-0 right-3 py-3 px-5 rounded-lg text-xl" +
    (error ? " text-red-500 bg-red-100" : " text-green-500 bg-lime-100");
  const spanClasses =
    "mr-3 font-bold h-7 w-7 inline-block text-center rounded-full" +
    (error ? " bg-red-200" : " bg-lime-200");
  return (
    <p className={pClasses}>
      <span className={spanClasses}>{error ? "!" : "✓"}</span>
      {error || success}
    </p>
  );
};

export default Message;
