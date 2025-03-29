import { FunctionComponent } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface TitleSectionProps {
  word1: string;
  word2: string;
}

const TitleSection: FunctionComponent<TitleSectionProps> = ({
  word1,
  word2,
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="text-4xl font-bold">
        {word1} <span className="text-primary">{word2}</span>
      </div>
      <div className="inline-flex items-center text-primary font-semibold cursor-pointer gap-3">
        <span>Show all jobs</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};

export default TitleSection;
