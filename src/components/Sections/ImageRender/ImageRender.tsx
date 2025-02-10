import { useState } from "react";

type Props = {
  img: string;
  alt: string;
  children?: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  isDarkened?: boolean;
};

export const ImageRender: React.FC<Props> = ({
  img,
  alt,
  children,
  style,
  isDarkened,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => setLoaded(!loaded);

  return (
    <div
      style={{
        backgroundImage: `${
          isDarkened
            ? "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),"
            : ""
        }url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        filter: loaded ? "none" : "blur(20px)",
        transition: "filter 0.5s",
        borderRadius: "50%",
        ...style,
      }}
    >
      <img src={img} alt={alt} onLoad={handleLoad} />
      {loaded && children}
    </div>
  );
};
