"use client";

import { useEffect, useState } from "react";

const MONTH_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function getCurrentMonth() {
  return MONTH_FORMATTER.format(new Date());
}

type CurrentMonthProps = {
  fallback: string;
};

export function CurrentMonth({ fallback }: CurrentMonthProps) {
  const [month, setMonth] = useState(fallback);

  useEffect(() => {
    function updateMonth() {
      const next = getCurrentMonth();
      setMonth((previous) => (previous === next ? previous : next));
    }

    updateMonth();
    const interval = window.setInterval(updateMonth, 60 * 60 * 1000);

    return () => window.clearInterval(interval);
  }, []);

  return month;
}
