import { onBeforeUnmount, onMounted } from "vue";
import { useUiStore } from "@/stores/ui";

type Options = {
  sectionIds: string[];
  rootSelector?: string; // ".scroll"
};

export function useScrollSpy(options: Options) {
  const ui = useUiStore();

  let obs: IntersectionObserver | null = null;
  let rootEl: HTMLElement | null = null;
  const ratios = new Map<string, number>();

  const setBestActive = () => {
    let bestId = ui.activeSection;
    let bestRatio = -1;

    for (const id of options.sectionIds) {
      const r = ratios.get(id) ?? 0;
      if (r > bestRatio) {
        bestRatio = r;
        bestId = id;
      }
    }

    if (bestId) ui.setActiveSection(bestId);
  };

  const onScroll = () => {
    if (!rootEl) return;
    ui.setScrolled(rootEl.scrollTop > 8);
  };

  onMounted(() => {
    rootEl = document.querySelector<HTMLElement>(
      options.rootSelector ?? ".scroll",
    );
    if (!rootEl) return;

    // Scroll state
    onScroll();
    rootEl.addEventListener("scroll", onScroll, { passive: true });

    // Observer
    obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (!id) continue;
          ratios.set(id, e.intersectionRatio);
        }
        requestAnimationFrame(setBestActive);
      },
      {
        root: rootEl,
        threshold: [0, 0.15, 0.3, 0.45, 0.6],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    // Observe sections
    for (const id of options.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        ratios.set(id, 0);
        obs.observe(el);
      }
    }
  });

  onBeforeUnmount(() => {
    if (rootEl) rootEl.removeEventListener("scroll", onScroll);
    obs?.disconnect();
  });
}
