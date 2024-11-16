import { timeAgo } from "@andersco/utils";

export function TimeAgoTest({ isoDate }: { isoDate: string }) {
  return <div>Time Ago: {timeAgo(new Date(isoDate))}</div>;
}
