import React from "react";

const Chip = (props: { text: string; teaser?: boolean; classes?: string }) => {
  const { text, teaser, classes } = props;
  return (
    <div
      className={`${classes} w-fit lg:text-xl px-4 py-1 rounded-xl bg-bgChip text-[#333]`}
    >
      {text}
    </div>
  );
};

export default Chip;
