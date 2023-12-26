const MAIN_SITE_REGEXES = [
  /https:\/\/(www\.)?curtislarson\.dev/,
  /http:\/\/localhost/,
];

export function isMainSite() {
  const { origin } = window.location;
  return MAIN_SITE_REGEXES.some((r) => origin.match(r) != null);
}
