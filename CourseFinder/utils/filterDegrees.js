export default function filterDegrees(data, stream, zScore, district) {
  return data.filter(item =>
    item.STREAM.toLowerCase() === stream.trim().toLowerCase() &&
    item.DISTRICT.toLowerCase() === district.trim().toLowerCase() &&
    parseFloat(zScore) >= parseFloat(item["2023 ZSCORE"])
  );
}
