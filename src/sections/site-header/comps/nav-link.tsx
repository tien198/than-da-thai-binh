"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { useSyncExternalStore } from "react";

type NavLinkState = {
  isActive: boolean;
};

type NavLinkProps = Omit<
  ComponentProps<typeof Link>,
  "aria-current" | "children" | "className" | "href"
> & {
  activePathnames?: readonly string[];
  children: ReactNode | ((state: NavLinkState) => ReactNode);
  className?: string | ((state: NavLinkState) => string);
  end?: boolean;
  href: string;
};

function subscribeToHashChange(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  window.addEventListener("popstate", onStoreChange);

  return () => {
    window.removeEventListener("hashchange", onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
  };
}

function getCurrentHash() {
  return window.location.hash;
}

function getServerHash() {
  return "";
}

function normalizePathname(pathname: string) {
  return pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
}

export function NavLink({
  activePathnames = [],
  children,
  className,
  end = false,
  href,
  ...props
}: NavLinkProps) {
  const currentPathname = normalizePathname(usePathname());
  const currentHash = useSyncExternalStore(
    subscribeToHashChange,
    getCurrentHash,
    getServerHash,
  );
  const destination = new URL(href, "https://navigation.local");
  const destinationPathname = normalizePathname(destination.pathname);
  const destinationPathnames = [destinationPathname, ...activePathnames].map(
    normalizePathname,
  );
  const pathnameMatches = destinationPathnames.some((pathname) =>
    end
      ? currentPathname === pathname
      : pathname === "/"
        ? currentPathname === "/"
        : currentPathname === pathname ||
          currentPathname.startsWith(`${pathname}/`),
  );
  const hashMatches = destination.hash
    ? currentHash === destination.hash
    : currentHash === "";
  const state = { isActive: pathnameMatches && hashMatches };

  return (
    <Link
      {...props}
      href={href}
      aria-current={state.isActive ? "page" : undefined}
      data-active={state.isActive ? "true" : undefined}
      className={typeof className === "function" ? className(state) : className}
    >
      {typeof children === "function" ? children(state) : children}
    </Link>
  );
}
