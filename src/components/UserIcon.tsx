import { FunctionComponent as FC } from "preact";
import Link from "./Link";

interface Props {
  imageUrl: string;
  tweetUrl: string;
  className: string;
}

const UserIcon: FC<Props> = (props) => {
  const { imageUrl, tweetUrl, className } = props;

  return (
    <>
      <Link className={`user-icon ${className}`} href={tweetUrl}>
        <img
          class="user-icon__image"
          src={imageUrl}
          alt="twitter user profile image"
        />
        <div className="user-icon__boarder" />
      </Link>
      <style jsx>{`
        .user-icon {
          position: relative;
          height: 46px;
          width: 46px;
        }
        .user-icon__image {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
        }
        .user-icon__boarder {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </>
  );
};

export default UserIcon;
