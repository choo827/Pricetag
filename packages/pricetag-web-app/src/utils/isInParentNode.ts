export function isInParentNode(parent: Node | Element, child: Node | Element) {
  let node = child.parentNode;

  // keep iterating unless null
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
