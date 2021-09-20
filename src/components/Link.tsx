import { FunctionComponent as FC } from "preact";

interface Props {
  href: string;
  className?: string;
}

const Link: FC<Props> = (props) => {
  return (
    <a
      href={props.href}
      className={props.className}
      rel="noopener noreferrer"
      target="_blank"
      aria-label="View on Twitter"
      role="link"
    >
      {props.children}
    </a>
  );
};

export default Link;
