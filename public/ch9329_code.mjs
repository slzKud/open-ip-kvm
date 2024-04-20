export function keyCodeGen() {
    let keycode = {}
    keycode.Escape = 41;
    keycode.F1 = 58;
    keycode.F2 = 59;
    keycode.F3 = 60;
    keycode.F4 = 61;
    keycode.F5 = 62;
    keycode.F6 = 63;
    keycode.F7 = 64;
    keycode.F8 = 65;
    keycode.F9 = 66;
    keycode.F10 = 67;
    keycode.F11 = 68;
    keycode.F12 = 69;
    keycode.CapsLock = 57;
    keycode.NumLock = 83;
    keycode.ScrollLock = 71;
    keycode.ArrowUp = 82;
    keycode.ArrowDown = 81;
    keycode.ArrowLeft = 80;
    keycode.ArrowRight = 79;
    keycode.Backspace = 42;
    keycode.Tab = 43;
    keycode.KeyQ = 20;
    keycode.KeyW = 26;
    keycode.KeyE = 8;
    keycode.KeyR = 21;
    keycode.KeyT = 23;
    keycode.KeyY = 28;
    keycode.KeyU = 24;
    keycode.KeyI = 12;
    keycode.KeyO = 18;
    keycode.KeyP = 19;
    keycode.KeyA = 4;
    keycode.KeyS = 22;
    keycode.KeyD = 7;
    keycode.KeyF = 9;
    keycode.KeyG = 10;
    keycode.KeyH = 11;
    keycode.KeyJ = 13;
    keycode.KeyK = 14;
    keycode.KeyL = 15;
    keycode.KeyZ = 29;
    keycode.KeyX = 27;
    keycode.KeyC = 6;
    keycode.KeyV = 25;
    keycode.KeyB = 5;
    keycode.KeyN = 17;
    keycode.KeyM = 16;
    keycode.BracketLeft = 47;
    keycode.BracketRight = 48;
    keycode.Backslash = 49;
    keycode.Semicolon = 51;
    keycode.Quote = 52;
    keycode.Enter = 40;
    keycode.Comma = 54;
    keycode.Period = 55;
    keycode.Slash = 56;
    keycode.Space = 44;
    keycode.Backquote = 53;
    keycode.Digit1 = 30;
    keycode.Digit2 = 31;
    keycode.Digit3 = 32;
    keycode.Digit4 = 33;
    keycode.Digit5 = 34;
    keycode.Digit6 = 35;
    keycode.Digit7 = 36;
    keycode.Digit8 = 37;
    keycode.Digit9 = 38;
    keycode.Digit0 = 39;
    keycode.Minus = 45;
    keycode.Equal = 46;
    keycode.NumpadAdd = 87;
    keycode.NumpadDivide = 84;
    keycode.NumpadMultiply = 85;
    keycode.NumpadSubtract = 86;
    keycode.Numpad1 = 89;
    keycode.Numpad2 = 90;
    keycode.Numpad3 = 91;
    keycode.Numpad4 = 92;
    keycode.Numpad5 = 93;
    keycode.Numpad6 = 94;
    keycode.Numpad7 = 95;
    keycode.Numpad8 = 96;
    keycode.Numpad9 = 97;
    keycode.Numpad0 = 98;
    keycode.NumpadDecimal = 99;
    keycode.NumpadEnter = 88;
    keycode.Pause = 72;
    keycode.Insert = 73;
    keycode.Home = 74;
    keycode.PageUp = 75;
    keycode.Delete = 76;
    keycode.End = 77;
    keycode.PageDown = 78;
    return keycode;
}
export function revsereKeyCode(){
    let k1={"96": 53, "49": 30, "50": 31, "51": 32, "52": 33, "53": 34, "54": 35, "55": 36, "56": 37, "57": 38, "48": 39, "45": 45, "61": 46, "113": 20, "119": 26, "101": 8, "114": 21, "116": 23, "121": 28, "117": 24, "105": 12, "111": 18, "112": 19, "91": 47, "93": 48, "92": 49, "97": 4, "115": 22, "100": 7, "102": 9, "103": 10, "104": 11, "106": 13, "107": 14, "108": 15, "59": 51, "39": 52, "122": 29, "120": 27, "99": 6, "118": 25, "98": 5, "110": 17, "109": 16, "44": 54, "46": 55, "47": 56}
    let k2={"126": 53, "33": 30, "64": 31, "35": 32, "36": 33, "37": 34, "94": 35, "38": 36, "42": 37, "40": 38, "41": 39, "95": 45, "43": 46, "81": 20, "87": 26, "69": 8, "82": 21, "84": 23, "89": 28, "85": 24, "73": 12, "79": 18, "80": 19, "123": 47, "125": 48, "124": 49, "65": 4, "83": 22, "68": 7, "70": 9, "71": 10, "72": 11, "74": 13, "75": 14, "76": 15, "58": 51, "34": 52, "90": 29, "88": 27, "67": 6, "86": 25, "66": 5, "78": 17, "77": 16, "60": 54, "62": 55, "63": 56}
    let k3={"32": 44, "9": 43, "10": 40}
    return {"normalKey":k1,"shiftKey":k2,"functionKey":k3}
}