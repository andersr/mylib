import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    M: "a month",
    MM: "%d months",
    d: "a day",
    dd: "%d days",
    future: "in %s",
    h: "1h",
    hh: "%dh",
    m: "1m",
    mm: "%dm",
    past: "%s ago",
    s: "moments",
    y: "about a year",
    yy: "%d years",
  },
});

export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  return dayjs(date).fromNow();
}
