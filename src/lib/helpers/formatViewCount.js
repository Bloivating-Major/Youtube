export function formatViewCount(views) {
  if (views >= 1_000_000_000) return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (views >= 1_000) return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return views.toString();
}
