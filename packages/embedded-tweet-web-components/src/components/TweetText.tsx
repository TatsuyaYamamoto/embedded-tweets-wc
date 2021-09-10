import { FunctionComponent as FC } from "preact";
import { useMemo } from "preact/compat";
import autoLink from "twitter-text/dist/esm/autoLink";
import type { UrlEntity } from "twitter-text";

interface Props {
  text: string;
  entities: {
    urls: ReadonlyArray<UrlEntity>;
  };
}

const TweetText: FC<Props> = (props) => {
  const text = useMemo(() => {
    let linkedText = autoLink(props.text, {
      urlEntities: props.entities.urls,
      targetBlank: true,
    });
    props.entities.urls.forEach((url) => {
      const from = `title="${url.expanded_url}"`;
      const to = `title="${url.expanded_url}" class="tweet-url"`;
      linkedText = linkedText.replace(from, to);
    });
    return linkedText;
  }, [props]);

  return (
    <>
      <div className="tweet-text" dangerouslySetInnerHTML={{ __html: text }}>
        {props.text}
      </div>
      <style jsx>{`
        .tweet-text {
          line-height: 24px;
          font-size: 20px;
          cursor: text;
          font-family: "Segoe UI", Meiryo, system-ui, -apple-system,
            BlinkMacSystemFont, sans-serif;
          position: relative;
          font-weight: 400;
          color: rgb(15, 20, 25);
          white-space: pre-wrap;
        }

        .tweet-text a.tweet-url {
          color: rgb(27, 149, 224);
          background-color: rgba(0, 0, 0, 0);
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default TweetText;
