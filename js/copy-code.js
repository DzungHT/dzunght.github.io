window.copyCode = function (button) {
  const codeId = button.getAttribute('data-target');
  const codeElement = document.getElementById(codeId);

  if (!codeElement) return;

  const text = codeElement.innerText;
  navigator.clipboard.writeText(text).then(() => {
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 1500);
  });
};
