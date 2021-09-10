import { FunctionComponent as FC } from "preact";
import { useMemo } from "preact/compat";
import Link from "./Link";

interface Props {
  createdAt: Date;
  tweetUrl: string;
}

const TweetTime: FC<Props> = (props) => {
  const { createdAt, tweetUrl } = props;

  const timeText = useMemo(() => {
    const yyyy = createdAt.getFullYear();
    const MM = ("00" + (createdAt.getMonth() + 1)).slice(-2);
    const dd = ("00" + createdAt.getDate()).slice(-2);
    const hh = ("00" + createdAt.getHours()).slice(-2);
    const mm = ("00" + createdAt.getMinutes()).slice(-2);

    return `${hh}:${mm} · ${yyyy}/${MM}/${dd}`;
  }, [createdAt]);

  return (
    <>
      <div className="tweet-time">
        <Link className="tweet-time__link" href={tweetUrl}>
          {timeText}
        </Link>
      </div>
      <style jsx>{`
        .tweet-time {
          margin-top: 2px;
          height: 32px;

          display: flex;
          align-items: center;
        }
        .tweet-time__link {
          font-weight: 400;
          font-size: 15px;
          color: rgb(83, 100, 113);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }

        .tweet a:hover.tweet-time__link {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default TweetTime;
