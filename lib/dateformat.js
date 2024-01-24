export function formatDate_ymd(date) {
  return date instanceof Date
    ? `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getUTCDate()).padStart(2, "0")}`
    : "";
}
