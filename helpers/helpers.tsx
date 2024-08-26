export const formatNewDate = (date: any, fallback = "", withTime = false) => {
  if (!date) return fallback;

  const formattedDate = new Date(date);

  const year = formattedDate.getFullYear();
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = formattedDate.getDate().toString().padStart(2, "0");

  const hours = formattedDate.getHours().toString().padStart(2, "0");
  const minutes = formattedDate.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}${withTime ? `${hours}:${minutes}` : ""}`;
};

export const formatHour = (date: any, fallback = "") => {
  if (!date) return fallback;

  return new Date(date).toLocaleTimeString("default", {
    hour: "numeric",
    hour12: false,
  });
};

export const formatTimeMinute = (date: any, fallback = "") => {
  if (!date) return fallback;

  const currentMinutes = date.getMinutes();
  const roundedMinutes = Math.floor(currentMinutes / 15) * 15;
  const nextRoundedMinutes = roundedMinutes + 15;

  const roundedDate = new Date(date);
  if (currentMinutes >= roundedMinutes) {
    roundedDate.setMinutes(nextRoundedMinutes);
  } else {
    roundedDate.setMinutes(roundedMinutes);
  }

  return roundedDate.toLocaleTimeString("default", {
    minute: "numeric",
  });
};

export const formatt = (date: any, fallback = "") => {
  if (!date) return fallback;

  const formattedDate = new Date(date);

  const year = formattedDate.getUTCFullYear();
  const month = (formattedDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = formattedDate.getUTCDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatDate = (date: any, fallback = "", withTime = false) => {
  if (!date) return fallback;

  const formattedDate = new Date(date);

  const year = formattedDate.getUTCFullYear();
  const month = (formattedDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = formattedDate.getUTCDate().toString().padStart(2, "0");

  const hours = formattedDate.getUTCHours().toString().padStart(2, "0");
  const minutes = formattedDate.getUTCMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${withTime ? `${hours}:${minutes}` : ""}`;
};

// Helper function to format the date
export const formatNewDates = (
  date: Date,
  options?: any,
  hasTime?: boolean,
) => {
  const optionsWithTime = hasTime
    ? {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    : { year: "numeric", month: "2-digit", day: "2-digit" };
  // @ts-ignore
  return date.toLocaleString("en-US", optionsWithTime).replace(", ", ", ");
};

export const formatDat = (dateTime: any) => {
  const date = new Date(dateTime);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

export const formatTime = (dateTime: any) => {
  const date = new Date(dateTime);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const formatTimeToHHMMSS = (time: any) => {
  if (!time) {
    return "";
  }

  const [timePart, period] = time.split(" ");
  let [hours, minutes] = timePart.split(":");

  if (period === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (period === "AM" && hours === "12") {
    hours = "00";
  }

  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  const seconds = "00";
  return `${hours}:${minutes}:${seconds}`;
};
