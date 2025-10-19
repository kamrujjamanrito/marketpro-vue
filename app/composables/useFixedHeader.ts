import { onMounted, onUnmounted } from "vue";

export function useFixedHeader() {
  const onScroll = () => {
    const header = document.querySelector<HTMLElement>(".header");
    if (!header) return;

    if (window.scrollY >= 260) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
