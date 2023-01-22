export function copyTextLink() {
  var copyTextareaBtn = document.querySelector(".copy");
  copyTextareaBtn.addEventListener("click", copyTextLink, true);
  var copyTextarea = document.querySelector(".input-copy");
  copyTextarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Oops, unable to copy");
  }
}
