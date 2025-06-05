export function formatYouTubeDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  const h = hours > 0 ? `${hours}:` : "";
  const m = hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
  const s = String(seconds).padStart(2, '0');

  return `${h}${m}:${s}`;
}
