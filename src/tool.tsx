export function formatDateRange(startDateStr: string, endDateStr: string) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Get month names and day suffixes
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daySuffixes = ["st", "nd", "rd", "th"];

  // Format start date
  const startMonth = months[startDate.getMonth()];
  const startDay = startDate.getDate();
  const startSuffix = daySuffixes[(startDay - 1) % 10] || daySuffixes[3]; // Default to "th" for 11th, 12th, 13th
  const startDateFormatted = `${startMonth} ${startDay}${startSuffix}`;

  // Format end date
  const endMonth = months[endDate.getMonth()];
  const endDay = endDate.getDate();
  const endSuffix = daySuffixes[(endDay - 1) % 10] || daySuffixes[3]; // Default to "th" for 11th, 12th, 13th
  const endDateFormatted = `${endMonth} ${endDay}${endSuffix}`;

  // Combine formatted dates
  return `${startDateFormatted} - ${endDateFormatted}`;
}