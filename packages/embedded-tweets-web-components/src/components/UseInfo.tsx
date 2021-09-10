import { FunctionComponent as FC } from "preact";
import UserIcon from "./UserIcon";
import TwitterIconSvg from "./svg/TwitterIcon.svg";
import Link from "./Link";

interface Props {
  user: {
    id_str: string;
    name: string;
    profile_image_url_https: string;
    screen_name: string;
    verified: boolean;
  };
  tweetUrl: string;
}

const UseInfo: FC<Props> = (props) => {
  const { tweetUrl, user } = props;
  const { name, profile_image_url_https, screen_name, verified } = user;

  return (
    <>
      <div className="user-info">
        <UserIcon
          className="user-info__icon"
          imageUrl={profile_image_url_https}
          tweetUrl={tweetUrl}
        />
        <Link className="user-info__name" href={tweetUrl}>
          <div className="name__display-name">{name}</div>
          <div className="name__screen-name">{`@${screen_name}`}</div>
        </Link>
        <Link className="user-info__twitter-icon" href={tweetUrl}>
          <TwitterIconSvg />
        </Link>
      </div>
      <style jsx>{`
        .user-info {
          display: flex;
          padding-bottom: 12px;
        }

        .user-info__icon {
        }

        .user-info__name {
          margin: 0 4px;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .name__display-name {
          font-weight: 700;
          font-size: 15px;
          color: rgb(15, 20, 25);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          line-height: 20px;
        }

        .tweet a:hover .name__display-name {
          text-decoration: underline;
        }

        .name__screen-name {
          line-height: 20px;
          color: rgb(83, 100, 113);
          font-weight: 400;
          font-size: 15px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }

        .user-info__twitter-icon {
          margin-left: auto;
        }
      `}</style>
    </>
  );
};

export default UseInfo;
