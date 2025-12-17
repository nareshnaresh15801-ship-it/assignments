import React from "react";

function NotificationBadge() {
  const count = 3; // change to 0 to test

  return (
    <div>
      <button>
        Notifications
        {count > 0 && <span className="badge"> {count}</span>}
      </button>
    </div>
  );
}

export default NotificationBadge;