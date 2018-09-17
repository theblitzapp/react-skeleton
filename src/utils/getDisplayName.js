export default function getComponentName(target) {
  return target.displayName || target.name || "Component";
}
