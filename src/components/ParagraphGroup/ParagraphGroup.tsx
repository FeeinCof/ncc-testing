import Image from "next/image";
import styles from "./ParagraphGroup.module.css";
import { StaticImageData } from "next/image";
const ParagraphGroup = ({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={`text_large bold`}>{title}</p>
        <p className={`${styles.content} text_small`}>
          <Image src={image} alt="Image" className={styles.image} />
          {text}
        </p>
      </div>
    </>
  );
};

export default ParagraphGroup;
