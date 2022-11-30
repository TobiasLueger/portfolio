import React from "react";

const HeadText = (props: {
  headline: any;
  context?: string;
  classes?: string;
}) => {
  const { headline, context, classes } = props;
  return (
    <div className={classes}>
      <h2 className="font-bold lg:text-3xl mb-5 lg:mb-8 text-greyDark">
        {headline}
      </h2>
      {context && <p dangerouslySetInnerHTML={{ __html: context }}></p>}
    </div>
  );
};

export default HeadText;
