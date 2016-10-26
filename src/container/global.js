let instances = {};

export function register(cont) {
    if (instances[cont.id]) {
        throw new Error(`Container with id=${cont.id} already exists in the document`);
    }
    instances[cont.id] = cont;
}

export function get(id) {
    if (!instances[id]) {
        throw new Error(`Cannot find container ${id}`);
    }
    return instances[id];
}

let currentScope;

export function getCurrentScope() {
    if (!currentScope) {
        throw new RuntimeException("Block.remove() is called outside of its scope");
    }
    return currentScope;
}

export function scope(callback, scope) {
    return () => {
        currentScope = get(scope);
        callback();
        currentScope = null;
    };
}


