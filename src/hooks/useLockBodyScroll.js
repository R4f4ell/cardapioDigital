import { useEffect, useRef } from "react";
import { lockScroll } from "../utils/scrollLock";

/**
 * Trava/destrava scroll do body.
 * @param {boolean} locked - trava quando true, destrava quando false
 * @param {'keep'|'top'|'none'} restoreStrategy - como restaurar ao destravar
 */
export default function useLockBodyScroll(locked, restoreStrategy = "keep") {
  const unlockRef = useRef(null);

  useEffect(() => {
    if (locked) {
      unlockRef.current = lockScroll();
      return () => {
        if (unlockRef.current) {
          unlockRef.current({ restore: restoreStrategy });
          unlockRef.current = null;
        }
      };
    } else {
      if (unlockRef.current) {
        unlockRef.current({ restore: restoreStrategy });
        unlockRef.current = null;
      }
    }
  }, [locked, restoreStrategy]);
}