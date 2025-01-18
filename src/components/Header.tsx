interface Props {
  title: string;
}
const Header: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl py-12">{title}</h1>
    </div>
  );
};
export default Header;
