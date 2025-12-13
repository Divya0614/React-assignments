import { useState } from "react";

export default function NotificationBadge() {
  const [count, setCount] = useState(3);

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <button onClick={() => setCount(count + 1)}>
        Notifications
      </button>

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "4px 8px"
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
