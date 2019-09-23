export function isMobile() {
  return /android|webos|ipod|iphone|blackberry/i.test(
    navigator.userAgent.toLocaleLowerCase()
  );
}
