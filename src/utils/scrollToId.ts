export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const container = document.querySelector<HTMLElement>("#appScroll");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const top =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;

  container.scrollTo({ top, behavior });
}
