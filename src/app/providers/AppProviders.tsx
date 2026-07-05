import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Top-level providers (theme, query client, etc. can be added here). */
export function AppProviders({ children }: Props) {
  return <>{children}</>;
}
