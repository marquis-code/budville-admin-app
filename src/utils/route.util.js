export function loadRouteComponent (path) {
  return () => import (`@/views/${path}.vue`)
}