export function drawTitle(title, subtext) {
  document.getElementById("CenterText").style.visibility = "visible";
  document.getElementById("CenterText").innerHTML = "<h1>"+title+"<h1><p>"+subtext+"<p>";
  return;
};

export function timedTitle(title, subtext, delay) {
  document.getElementById("CenterText").style.visibility = "visible";
  document.getElementById("CenterText").innerHTML = "<h1>"+title+"<h1><p>"+subtext+"<p>";
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
  document.getElementById("CenterText").style.visibility = "hidden";
  return;
};

export function clearTitle() {
  document.getElementById("CenterText").innerText = "";
  document.getElementById("CenterText").style.visibility = "hidden";
  return;
};
