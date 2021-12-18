// javascript
var moreOver = document.getElementsByClassName("more-info-over")[0];
const expandBtn = document.getElementById("expand");
const shrinkBtn = document.getElementById("shrink");
const thumbsUp = document.getElementById("thumbsUp");
const thumbsDown = document.getElementById("thumbsDown");
const toggleList = document.getElementById("toggleList");
const toggleSvg = document.getElementById("toggleSvg");
const plusSvg = '<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />';
const tickSvg = '<path d="M 1 10 L 11 20 L 27 2 L 24 0 L 11 15 L 3 7" />';

console.log(toggleList);
expandBtn.addEventListener("click", () => {
  moreOver.classList.add("over-visible");
});

shrinkBtn.addEventListener("click", () => {
  moreOver.classList.remove("over-visible");
});

thumbsUp.addEventListener("click", () => {
  thumbsUp.classList.toggle("selected");
  if (thumbsDown.classList.contains("selected")) {
    thumbsDown.classList.remove("selected");
  }
});

thumbsDown.addEventListener("click", () => {
  thumbsDown.classList.toggle("selected");
  if (thumbsUp.classList.contains("selected")) {
    thumbsUp.classList.remove("selected");
  }
});

toggleList.addEventListener("click", () => {
  if (toggleList.classList.contains("selected")) {
    toggleList.classList.remove("selected");
    toggleSvg.innerHTML = plusSvg;
  } else {
    toggleList.classList.add("selected");
    toggleSvg.innerHTML = tickSvg;
  }
});

console.log(moreOver);
