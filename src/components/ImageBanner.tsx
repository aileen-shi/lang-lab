interface Props {
  src: string;
  alt: string;
  height: string;
}

const ImageBanner: React.FC<Props> = ({ src, alt, height }) => {
  return (
    <div className={`w-screen image--height ${height}`}>
      <img
        className="w-full h-full object-cover object-top"
        src={src}
        alt={alt}
      ></img>
    </div>
  );
};
export default ImageBanner;
