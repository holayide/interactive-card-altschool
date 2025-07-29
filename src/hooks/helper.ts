export function formatCardNumber(input: string): string {
  return input
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
