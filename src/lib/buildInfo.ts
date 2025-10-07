export const buildSha: string = (import.meta.env.VITE_BUILD_SHA as string) || "";
export const buildShortSha: string = buildSha ? buildSha.substring(0, 7) : "";
export const buildTime: string = (import.meta.env.VITE_BUILD_TIME as string) || "";

export function hasBuildInfo(): boolean {
  return Boolean(buildSha && buildTime);
}
