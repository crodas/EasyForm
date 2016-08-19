let instances = {};

export function register(cont) {
    instances[cont.id] = cont;
}

export function get(id) {
    return instances[id];
}

export function findWithDOM(domElement, filter = () => true) {
    let node = domElement;
    while (node) {
        if (instances[node.id] && filter(instances[node.id])) {
            return instances[node.id];
        }
        node = node.parentNode;
    }

    return null;
}
