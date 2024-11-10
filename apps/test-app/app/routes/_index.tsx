import { timeAgo } from "@andersco/utils";
import { Capitalize } from "@andersco/ui";

export default function Index() {
  return (
    <div className="p-4">
      Time ago: {timeAgo("2024-11-09T20:09:07.123Z")}
      <div>
        <Capitalize>lowercase</Capitalize>
      </div>
    </div>
  );
}
