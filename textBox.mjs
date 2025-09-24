// will draw box with text
export function drawBox(text) {
  document.getElementById("textBox").innerText = text;
  document.getElementById("textBox").style.visibility = "visible";
};

// will hide/clear box
export function clearBox() {
  document.getElementById("textBox").innerText = "";
  document.getElementById("textBox").style.visibility = "hidden";
};

// will draw with a slight delay after each character
export function timeDraw(text, timer) {
  document.getElementById("textBox").style.visibility = "visible";
  let charsDrawn = 0;
  let drawBoxInterval = setInterval(function addChar() {
    let newDraw = "";
    for (let i = 0; i <= charsDrawn; i++) newDraw += text[i];
    document.getElementById("textBox").innerText = charsDrawn;
  }, timer);
}

// will hide box
export function hideBox() {
  document.getElementById("textBox").style.visibility = "hidden";
};

// will show box
export function showBox() {
  document.getElementById("textBox").style.visibility = "visible";
};
