// /*
//  * JavaScript to handle filtering of emoticons and copying to the clipboard.
//  *
//  * This file is loaded on every page via the index.html template.  It binds
//  * events to the search box and the copy buttons.  When a user types into
//  * the search box, the list of emoticons is filtered in real time.  When
//  * a copy button is clicked the corresponding emoticon is copied to the
//  * clipboard using the modern Clipboard API.
//  */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const items = document.querySelectorAll(".emoticon-item");

  // Filter emoticons as user types
  searchInput.addEventListener("input", (event) =>
    handleSearchInput(event, items),
  );

  // Handle copy buttons
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", () => {
      handleCopyButtonClick(button);
    });
  });
});

function handleSearchInput(event, items) {
  // const query = searchInput.value.toLowerCase();
  const query = event.target.value;
  items.forEach((item) => {
    console.log(item);
    const name = item.querySelector(".name").textContent.toLowerCase();
    const symbol = item.querySelector(".symbol").textContent.toLowerCase();
    item.style.display =
      name.includes(query) || symbol.includes(query) ? "" : "none";
  });
}

function handleCopyButtonClick(button) {
  // const text = button.getAttribute('data-symbol');
  const symbolEl = button.parentElement.querySelector(".symbol");
  const text = symbolEl.textContent;

  // Attempt to copy using modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showCopied(button));
  } else {
    fallbackCopy(text, button);
  }
}

// Show 'Copied!' feedback briefly
function showCopied(button) {
  const original = button.textContent;
  button.textContent = "Copied!";
  setTimeout(() => {
    button.textContent = original;
  }, 1000);
}

// Fallback copy method for older browsers
function fallbackCopy(text, button) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    document.execCommand("copy");
    showCopied(button);
  } catch (err) {
    alert("Copy failed");
  }

  document.body.removeChild(tempInput);
}
