export function initializeCountdown(
  elementId: string,
  endDate: string | Date,
  onFinish?: () => void
): ReturnType<typeof setInterval> | null {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const countDown = new Date(endDate).getTime();

  if (isNaN(countDown)) {
    return null;
  }

  const daysElement = document.querySelector(`#${elementId} .days`);
  const hoursElement = document.querySelector(`#${elementId} .hours`);
  const minutesElement = document.querySelector(`#${elementId} .minutes`);
  const secondsElement = document.querySelector(`#${elementId} .seconds`);
  const countdownElement = document.querySelector(`#${elementId}`);

  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement ||
    !(countdownElement instanceof HTMLElement)
  ) {
    return null;
  }

  const update = () => {
    const now = Date.now();
    const distance = countDown - now;

    if (distance <= 0) {
      countdownElement.style.display = "none";
      clearInterval(interval);
      if (onFinish) onFinish();
      return;
    }

    daysElement.textContent = Math.floor(distance / DAY).toString();
    hoursElement.textContent = Math.floor((distance % DAY) / HOUR).toString();
    minutesElement.textContent = Math.floor((distance % HOUR) / MINUTE).toString();
    secondsElement.textContent = Math.floor((distance % MINUTE) / SECOND).toString();
  };

  update();
  const interval = setInterval(update, 1000);

  return interval;
}
