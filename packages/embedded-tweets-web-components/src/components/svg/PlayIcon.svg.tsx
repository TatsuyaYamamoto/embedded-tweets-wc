import { FunctionComponent as FC } from "preact";

const PlayIconSvg: FC<{ className?: string }> = ({
  children,
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="rgb(255, 255, 255)"
    {...otherProps}
  >
    <path d="M3 22v-20l18 10-18 10z" />
  </svg>
);

export default PlayIconSvg;
