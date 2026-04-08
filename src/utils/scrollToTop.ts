export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  const container = document.querySelector<HTMLElement>("#appScroll");
  if (!container) return;

  container.scrollTo({
    top: 0,
    behavior,
  });
}