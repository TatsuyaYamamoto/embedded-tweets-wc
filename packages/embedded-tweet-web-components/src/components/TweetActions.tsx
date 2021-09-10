import { FunctionComponent as FC } from "preact";

import FavoriteIcon from "./svg/Favorite.svg";
import ConversationIcon from "./svg/Conversation.svg";

interface Props {
  favoriteCount: number;
  conversationCount: number;
}

const TweetActions: FC<Props> = (props) => {
  const { favoriteCount, conversationCount } = props;

  return (
    <>
      <div className="tweet-actions">
        <a className="tweet-actions__action">
          <div className="tweet-action__icon">
            <FavoriteIcon />
          </div>
          <div className="tweet-action__count">{favoriteCount}</div>
        </a>
        <a className="tweet-actions__action">
          <div className="tweet-action__icon">
            <ConversationIcon />
          </div>
          <div className="tweet-action__count">{conversationCount}</div>
        </a>
      </div>
      <style jsx>{`
        .tweet-actions {
          display: flex;
          padding-top: 4px;
          margin-top: 4px;
          border-top: 1px solid rgb(207, 217, 222);
        }

        .tweet-actions__action {
          display: flex;
          align-items: center;
          margin-right: 20px;
        }

        .tweet-actions__action:hover {
          text-decoration: underline;
        }

        .tweet-action__icon {
          width: 32px;
          height: 32px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .tweet-action__count {
          color: rgb(83, 100, 113);
          font-weight: 400;
          font-size: 15px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          line-height: 20px;

          margin-left: 4px;
        }
      `}</style>
    </>
  );
};

export default TweetActions;
