export function useHotkeys(hotkeys, callback) {
    const parsedHotkeys = parse(hotkeys);
    const parsedHotkeysAttributes = Object.keys(parsedHotkeys);

    window.addEventListener('keydown', (event) => {
        if (parsedHotkeysAttributes.some(attribute => event[attribute] !== parsedHotkeys[attribute]))
            return;
        callback();
    });
}

function parse(hotkeys) {
    let keys = hotkeys.split('+');
    let parsedHotkeys = {};
    if (keys.length === 1) {
        parsedHotkeys.key = keys[0];
    } else {
        for (const key of keys) {
            switch (key) {
                case 'ctrl':
                    parsedHotkeys.ctrlKey = true;
                    break;
                case 'alt':
                    parsedHotkeys.altKey = true;
                    break;
                case 'shift':
                    parsedHotkeys.shiftKey = true;
                    break;
                case '⌘':
                    parsedHotkeys.metaKey = true;
                    break;
                case '⊞':
                    parsedHotkeys.metaKey = true;
                    break;
                default:
                    parsedHotkeys.keyCode = key.toUpperCase().charCodeAt();
                    break;
            }
        }
    }
    return parsedHotkeys;
}
