export const resize = (url: string, w: number, h: number) => {
  return url.replace("w200", `w${w}`).replace("h200", `h${h}`);
};
