// import { timeAgo } from "@andersco/utils";
import { Alert, Button } from "@andersco/ui";
import { useState } from "react";

export default function Index() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const components: { [k: string]: JSX.Element } = {
    alert: <Alert message="Test Alert" type="danger" />,
    button: <Button onClick={() => undefined}>Test Button</Button>,
  };

  return (
    <div className="h-full flex">
      <div className="bg-slate-100 p-2">
        <h2>Components</h2>
        <ul className="">
          <li>
            <button onClick={() => setActiveComponent("alert")}>Alert</button>
          </li>
          <li>
            <button onClick={() => setActiveComponent("button")}>Button</button>
          </li>
          {/* <li>
            <button onClick={() => setActiveComponent("button")}>Button</button>
          </li> */}
        </ul>
      </div>
      <main className="p-2">
        {activeComponent ? (
          components[activeComponent]
        ) : (
          <div>Select component</div>
        )}
        {/* Time ago: {timeAgo("2024-11-09T20:09:07.123Z")} */}
        {/* <div>
          <Capitalize>lowercase</Capitalize>
        </div> */}
      </main>
    </div>
  );
}
