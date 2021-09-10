import { FunctionComponent as FC } from "preact";
import { useRef, useEffect, useMemo } from "preact/compat";

import UserInfo from "./components/UseInfo";
import TweetText from "./components/TweetText";
import TweetTime from "./components/TweetTime";
import TweetActions from "./components/TweetActions";
import TweetMedia from "./components/TweetMedia";
import { TweetJson } from "./TweetJson";

interface Props {
  ["tweet-json"]: string;
}

const EmbeddedTweet: FC<Props> = (props) => {
  const tweetJson = props["tweet-json"];

  // TODO validation
  const tweet = useMemo(() => JSON.parse(tweetJson) as TweetJson, [tweetJson]);
  const rootElRef = useRef<HTMLElement>(null);
  const tweetUrl = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;

  useEffect(() => {
    const onClickRoot = (e) => {
      const isAnchorClick = e.path.find((el) => {
        if (el.tagName === "A" && el.href) {
          return true;
        }
      });
      if (!isAnchorClick) {
        window.open(tweetUrl);
      }
    };
    rootElRef.current.addEventListener("click", onClickRoot);
    return () => {
      rootElRef.current.removeEventListener("click", onClickRoot);
    };
  }, []);

  return (
    <>
      <article className="tweet" ref={rootElRef}>
        <UserInfo user={tweet.user} tweetUrl={tweetUrl} />
        <TweetText
          text={tweet.text.substring(
            tweet.display_text_range[0],
            tweet.display_text_range[1]
          )}
          entities={{
            // @ts-ignore
            urls: tweet.entities.urls,
          }}
        />
        {Array.isArray(tweet.photos) && tweet.photos.length !== 0 && (
          <TweetMedia photos={tweet.photos} />
        )}
        {tweet.video && <TweetMedia video={tweet.video} />}
        <TweetTime createdAt={new Date(tweet.created_at)} tweetUrl={tweetUrl} />
        <TweetActions
          favoriteCount={tweet.favorite_count}
          conversationCount={tweet.conversation_count}
        />
      </article>
      <style jsx>{`
        .tweet {
          min-width: 250px;
          max-width: 550px;

          border: 1px solid rgb(207, 217, 222);
          border-radius: 12px;
          box-sizing: border-box;

          padding: 12px 16px 4px;
          background-color: rgb(255, 255, 255);

          cursor: pointer;

          transition-property: background-color;
          transition-duration: 0.2s;
        }

        .tweet:hover {
          background-color: rgb(247, 249, 249);
        }

        .tweet a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default EmbeddedTweet;
