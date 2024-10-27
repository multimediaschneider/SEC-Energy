import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useSmoothScroll(isHomePage: boolean) {
  const router = useRouter();

  const smoothScrollTo = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const navbarHeight = 100; // Adjust this value based on your navbar height
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = useCallback(
    async (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string
    ): Promise<void> => {
      e.preventDefault();
      if (isHomePage && href.startsWith("#")) {
        smoothScrollTo(href);
      } else if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (path === "/" || path === "") {
          await router.push("/");
          setTimeout(() => smoothScrollTo(`#${hash}`), 100);
        } else {
          await router.push(href);
        }
      } else {
        await router.push(href);
      }
      return new Promise<void>((resolve) => {
        // Wrap the existing logic in a Promise
        // ...
        // After scrolling is complete:
        resolve();
      });
    },
    [isHomePage, router, smoothScrollTo]
  );

  return { handleNavClick };
}
