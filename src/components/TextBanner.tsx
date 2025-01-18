interface Props {
  text: string;
}
const TextBanner: React.FC<Props> = ({ text }) => {
  return (
    <div className="w-screen bg-sky-600 py-7 pl-12 lg:pl-48 md:pl-30 sm:pl-20">
      <h1 className="text-white font-open-sans font-bold tracking-wider text-4xl">
        {text}
      </h1>
    </div>
  );
};
export default TextBanner;
