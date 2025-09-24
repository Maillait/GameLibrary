export function drawTitle(title, subtext) {
  document.getElementById("title").style.visibility = "visible";
  document.getElementById("title").innerHTML = "<h1>"+title+"<h1><p>"+subtext+"<p>";
  return;
};

export function timedTitle(title, subtext, delay) {
  document.getElementById("title").style.visibility = "visible";
  document.getElementById("title").innerHTML = "<h1>"+title+"<h1><p>"+subtext+"<p>";
  function waitFunc() {
    if (waitcheck) clearTitle();
    else waitcheck++;
    return;
  } 
  let waitCheck = 0;
  let waitTime = setInterval(waitFunc, delay);
  return;
};

export function hideTitle() {
  document.getElementById("title").style.visibility = "hidden";
  return;
};

export function clearTitle() {
  document.getElementById("title").innerText = "";
  document.getElementById("title").style.visibility = "hidden";
  return;
};
