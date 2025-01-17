interface Props {
  src: string;
  alt: string;
  classname: string;
}

const ImageBanner: React.FC<Props> = ({ src, alt, classname }) => {
  return (
    <div className="w-screen h-72">
      <img
        className={`w-full h-full object-cover object-center ${classname}`}
        src={src}
        alt={alt}
      ></img>
    </div>
  );
};
export default ImageBanner;
