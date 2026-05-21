"use client";

import { useRouter } from "next/navigation";
import { type ComponentProps, useCallback } from "react";

type TransitionLinkProps = ComponentProps<"a"> & {
  direction?: "forward" | "back";
};

export function TransitionLink({
  direction = "forward",
  href,
  onClick,
  children,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const root = document.documentElement;

      if (direction === "forward") {
        root.style.setProperty("--vt-old-offset", "-60px");
        root.style.setProperty("--vt-new-offset", "60px");
      } else {
        root.style.setProperty("--vt-old-offset", "60px");
        root.style.setProperty("--vt-new-offset", "-60px");
      }

      const cleanup = () => {
        root.style.removeProperty("--vt-old-offset");
        root.style.removeProperty("--vt-new-offset");
      };

      if ("startViewTransition" in document) {
        document.startViewTransition(() => {
          router.push(href ?? "/");
        });
      } else {
        router.push(href ?? "/");
      }

      setTimeout(cleanup, 800);

      onClick?.(e);
    },
    [direction, href, onClick, router]
  );

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
