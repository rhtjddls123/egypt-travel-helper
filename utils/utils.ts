export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export function formatKrDate(date: string) {
  const utcDate = new Date(date);
  const kstDateString = utcDate.toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul"
  });

  return kstDateString;
}
