import { useEffect } from "react";

/**
 * Executa funções (ex.: import()) quando o navegador está ocioso.
 * Ex.: useIdlePrefetch([() => import("../components/Pratos")])
 */
export default function useIdlePrefetch(fns, { delay = 1200, timeout = 2000 } = {}) {
  useEffect(() => {
    let timer = null;
    let canceled = false;

    const run = () => {
      if (canceled) return;
      fns.forEach((fn) => { try { fn?.(); } catch { /* noop */ } });
    };

    if ("requestIdleCallback" in window) {
      // @ts-ignore
      const id = requestIdleCallback(run, { timeout });
      return () => {
        // @ts-ignore
        cancelIdleCallback?.(id);
        canceled = true;
      };
    } else {
      timer = setTimeout(run, delay);
      return () => { clearTimeout(timer); canceled = true; };
    }
  // serialização simples pra dependência estável
  }, [JSON.stringify(fns), delay, timeout]);
}