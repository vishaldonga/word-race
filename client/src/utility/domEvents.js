const getKey = (e) => {
  const location = e.location;
  let selector;
  if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
    selector = ['[data-key="' + e.keyCode + '-R"]'];
  } else {
    const code = e.keyCode || e.which;
    selector = [
      '[data-key="' + code + '"]',
      '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]',
    ].join(",");
  }
  return document.querySelector(selector);
};

document.body.addEventListener("keydown", function (e) {
  const key = getKey(e);
  if (!key) {
    return console.warn("No key for", e.keyCode);
  }
  localStorage.currentWord = localStorage.currentWord || "";
  localStorage.currentWord += key.innerText;
  key.setAttribute("data-pressed", "on");
});

document.body.addEventListener("keyup", function (e) {
  const key = getKey(e);
  key && key.removeAttribute("data-pressed");
});
