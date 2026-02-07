export function scrollToHash(
  hash: string,
  behavior: ScrollBehavior = "smooth",
) {
  const id = decodeURIComponent(hash).replace("#", "");
  if (!id) return;

  const container = document.querySelector<HTMLElement>("#appScroll");
  const target = document.getElementById(id);
  if (!container || !target) return;

  const y =
    target.getBoundingClientRect().top -
    container.getBoundingClientRect().top +
    container.scrollTop;

  container.scrollTo({ top: y, behavior });
}
