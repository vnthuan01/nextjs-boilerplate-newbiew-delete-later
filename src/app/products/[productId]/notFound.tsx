"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname?.split("/")[2];
  return (
    <>
      <h1>Product with {productId} Not Found</h1>
    </>
  );
}
