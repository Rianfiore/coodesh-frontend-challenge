"use client";

import { useEffect, useRef, useState } from "react";
import { UseClickInOutProps } from "./types";

export function useClickInOut({
  onClickInside,
  onClickOutside,
  ignoredRefs = [],
}: UseClickInOutProps) {
  const [isClickedInside, setIsClickedInside] = useState(false);
  const [isClickedOutside, setIsClickedOutside] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setIsClickedInside(true);
        setIsClickedOutside(false);

        if (onClickInside) {
          onClickInside();
        }
      } else {
        if (ignoredRefs.length > 0) {
          for (const ref of ignoredRefs) {
            if (ref.current && ref.current.contains(event.target as Node)) {
              return;
            }
          }
        }

        setIsClickedInside(false);
        setIsClickedOutside(true);

        if (onClickOutside) {
          onClickOutside();
        }
      }
    };

    if (ref.current) {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [onClickInside, onClickOutside, ignoredRefs, ref]);

  return { isClickedInside, isClickedOutside, ref };
}
