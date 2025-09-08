export function handleImgLoad(e) {
  e.currentTarget?.classList?.add("is-loaded");
}

export function handleImgError(e) {
  // 1x1 transparente para manter o layout se falhar
  const transparent1px = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  if (e.currentTarget && e.currentTarget.src !== transparent1px) {
    e.currentTarget.src = transparent1px;
    e.currentTarget.classList?.add("is-error");
  }
}