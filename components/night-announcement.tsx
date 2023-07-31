const NightAnnouncement = () => {
  const currentTime = new Date().getHours();

  // Check if the current time is between 9pm and 9am
  const isStoreClosed = currentTime >= 21 || currentTime < 9;
  if (!isStoreClosed) {
    return null;
  }
  return (
    <div className="flex h-10 border-b border-gray-200 items-center justify-center text-xs">
      Closed right now. We open at 9AM everyday!
    </div>
  );
};

export default NightAnnouncement;
