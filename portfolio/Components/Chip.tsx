import React from "react";

const Chip = (props: { text: string }) => {
  const { text } = props;
  return (
    <div className="w-fit px-4 py-1 rounded-full bg-bgChip text-[#333]">
      {text}
    </div>
  );
};

export default Chip;
