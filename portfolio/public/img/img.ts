import * as Icons from "./IconMap";

const IconMap = Object.values(Icons).reduce((prev, curr) => {
  prev[(curr as any).displayName] = curr;
  return prev;
}, {});

export const Icon = ({ type, purposeLabel = "", className = "" }) => {
  const Component = IconMap[type] || null;
  return Component ? (
    <Component className={className} purposeLabel={purposeLabel} />
  ) : null;
};
