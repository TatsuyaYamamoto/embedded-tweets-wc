import { FunctionComponent as FC } from "preact";
import Link from "./Link";
import PlayIconSvg from "./svg/PlayIcon.svg";

interface Props {
  photos?: {
    backgroundColor: { red: number; green: number; blue: number };
    cropCandidates: { x: number; y: number; w: number; h: number }[];
    expandedUrl: string;
    url: string;
    width: number;
    height: number;
  }[];
  video?: {
    aspectRatio: [number, number];
    contentType: "media_entity";
    durationMs: number;
    mediaAvailability: { status: "available" };
    poster: string;
    variants: {}[];
    videoId: { type: "tweet"; id: "1327243125379588096" };
    viewCount: number;
  };
}

const TweetMedia: FC<Props> = (props) => {
  const { photos, video } = props;
  const size = 360;

  return (
    <>
      <div className="tweet-media">
        <div class="tweet-media__space" />
        <div class="tweet-media__media-wrapper media-list">
          {photos?.map((photo) => (
            <Link href={photo.expandedUrl} className="media-item">
              <div className="media-item__frame">
                <div
                  alt="tweet media"
                  className="media-item__image"
                  style={{
                    backgroundImage: `url(${photo.url}?name=${size}x${size}`,
                  }}
                />
              </div>
            </Link>
          ))}
          {video && (
            <div className="media-item">
              <div className="media-item__frame">
                <div
                  alt="tweet media"
                  className="media-item__video"
                  style={{
                    backgroundImage: `url(${video.poster}`,
                  }}
                />
                <div className="media-item__play-icon">
                  <PlayIconSvg className="play-icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .tweet-media {
          position: relative;
          margin-top: 11px;
          border: 1px solid rgb(207, 217, 222);
          border-radius: 12px;
          z-index: 0;
          overflow: hidden;
        }
        .tweet-media__space {
          padding-bottom: 56.25%;
          width: 100%;
        }
        .tweet-media__media-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .media-list {
          display: flex;
        }
        .media-item {
          flex-grow: 1;
          position: relative;
        }
        .media-item:not(:last-child) {
          margin-right: 2px;
        }
        .media-item__frame {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .media-item__image {
          position: absolute;
          height: 100%;
          width: 100%;
          background-size: cover;
          z-index: -1;
        }
        .media-item__video {
          position: absolute;
          height: 100%;
          width: 100%;
          background-size: cover;
          background-position: center center;
          z-index: -1;
        }
        .media-item__play-icon {
          width: 67px;
          height: 67px;
          border: 4px solid rgb(255, 255, 255);
          border-radius: 9999px;
          background-color: rgb(29, 161, 242);

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .play-icon {
          padding-left: 3px;
          width: calc(50% + 4px);
          height: calc(50% + 4px);
        }
      `}</style>
    </>
  );
};

export default TweetMedia;
