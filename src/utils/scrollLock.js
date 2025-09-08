// Lock de scroll com ref-count (suporta menu + modal ao mesmo tempo)
let lockCount = 0;
let saved = null;

function els() {
  return { html: document.documentElement, body: document.body };
}

/**
 * Ativa o lock e retorna uma função de unlock idempotente.
 * `restore`: 'keep' (padrão) restaura exatamente a posição;
 *            'top' rola pro topo ao destravar;
 *            'none' não mexe no scroll ao destravar.
 */
export function lockScroll() {
  const { html, body } = els();
  if (lockCount === 0) {
    saved = {
      scrollY: window.scrollY,
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyTouchAction: body.style.touchAction,
      htmlBg: html.style.backgroundColor,
      bodyBg: body.style.backgroundColor,
      scrollBehavior: html.style.scrollBehavior,
    };

    html.style.backgroundColor = "#0f1117";
    body.style.backgroundColor = "#0f1117";
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${saved.scrollY}px`;
    body.style.width = "100%";
    body.style.touchAction = "none";
  }
  lockCount += 1;

  let unlocked = false;
  return function unlock({ restore = "keep" } = {}) {
    if (unlocked) return;
    unlocked = true;

    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0 && saved) {
      const { html, body } = els();
      const htmlEl = html;
      const prevSB = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = "auto"; // evita animação no restore

      html.style.overflow = saved.htmlOverflow;
      body.style.overflow = saved.bodyOverflow;
      body.style.position = saved.bodyPosition;
      body.style.top = saved.bodyTop;
      body.style.width = saved.bodyWidth;
      body.style.touchAction = saved.bodyTouchAction;
      html.style.backgroundColor = saved.htmlBg;
      body.style.backgroundColor = saved.bodyBg;

      if (restore === "keep") {
        window.scrollTo(0, saved.scrollY || 0);
      } else if (restore === "top") {
        window.scrollTo(0, 0);
      } // 'none' -> não faz nada

      Promise.resolve().then(() => {
        htmlEl.style.scrollBehavior = prevSB ?? saved.scrollBehavior ?? "";
      });
      saved = null;
    }
  };
}