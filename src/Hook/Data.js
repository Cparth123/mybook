function getCurrentTime() {
  const now = new Date(); // Get the current date and time

  const hours = String(now.getHours()).padStart(2, "0"); // Ensure 2 digits
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Ensure 2 digits
  const seconds = String(now.getSeconds()).padStart(2, "0"); // Ensure 2 digits

  return `${hours}:${minutes}:${seconds}`;
}

export const currentTime = getCurrentTime();


