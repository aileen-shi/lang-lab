interface Props {
  text: string;
}
const TextBanner: React.FC<Props> = ({ text }) => {
  return (
    <div className="w-screen bg-sky-600 py-7 pl-10">
      <h1 className="text-white font-open-sans font-bold text-3xl">{text}</h1>
    </div>
  );
};
export default TextBanner;
