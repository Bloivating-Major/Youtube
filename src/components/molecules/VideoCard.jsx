import { formatViewCount } from "../../lib/helpers/formatViewCount";
import { formatYouTubeDuration } from "../../lib/helpers/FormatYoutubeDuration";

const VideoCard = ({ video }) => {

    const {snippet, statistics, contentDetails} = video;
    const {channelTitle, thumbnails , title} = snippet;

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
          {formatYouTubeDuration(contentDetails.duration)}
        </span>
      </div>
      <div className="mt-2">
        <h2 className="text-sm font-semibold line-clamp-2 text-white">{title}</h2>
        <p className="text-xs text-gray-400">{channelTitle}</p>
        <p className="text-xs text-gray-500">{formatViewCount(statistics.viewCount)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
