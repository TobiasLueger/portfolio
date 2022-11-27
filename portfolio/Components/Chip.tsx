import React from "react";

const Chip = (props: { text: string; teaser?: boolean }) => {
  const { text, teaser } = props;
  return (
    <div
      className={`w-fit ${
        teaser ? "" : "lg:text-2xl"
      } px-4 py-1 rounded-xl bg-bgChip text-[#333]`}
    >
      {text}
    </div>
  );
};

export default Chip;
