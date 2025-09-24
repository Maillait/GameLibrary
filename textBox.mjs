// will draw box with text
export function drawBox(text) {
  document.getElementById("textBox").innerText = text;
  document.getElementById("textBox").style.visibility = "visible";
  return;
};

// will hide/clear box
export function clearBox() {
  document.getElementById("textBox").innerText = "";
  document.getElementById("textBox").style.visibility = "hidden";
  return;
};

// will draw with a slight delay after each character
export function timeDraw(text, timer) {
  document.getElementById("textBox").style.visibility = "visible";
  let charsDrawn = 0;
  let newDraw = "";
  function drawChars() {
    for (let i = 0; i <= charsDrawn; i++) {
      newDraw += text[i];
      console.log(i, text[i]);
    }
    document.getElementById("textBox").innerText = newDraw;

    console.log(newDraw.length, text.length);
    if (newDraw.length >= text.length) clearInterval(drawBoxInterval);
  }
  let drawBoxInterval = setInterval(drawChars, timer)

  return;
}

// will hide box
export function hideBox() {
  document.getElementById("textBox").style.visibility = "hidden";
  return;
};

// will show box
export function showBox() {
  document.getElementById("textBox").style.visibility = "visible";
  return;
};
