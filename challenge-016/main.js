const share = document.querySelector("button#share");
const otherInfo = document.querySelector("div.other-info");
const author = document.querySelector("div.author");
const popover = document.querySelector("div.popover");

share.addEventListener("click", function (e) {
  if (window.matchMedia("(min-width: 825px)").matches) {
    share.classList.toggle("on");
    share.setAttribute("aria-controls", "popover");
    popover.classList.toggle("pop-on");
    let state = popover.classList.contains("pop-on");
    share.setAttribute("aria-expanded", state ? "true" : "false");
    popover.setAttribute("aria-hidden", !state ? "true" : "false");

    if (popover.getAttribute('aria-hidden') == "false") {
      document.querySelector('a').focus();
    }
  } else {
    otherInfo.classList.toggle("clicked");
    share.classList.toggle("on");

    let state = true;

    if (otherInfo.classList.contains("clicked")) {
      author.innerHTML = `<span>SHARE</span>
            <ul>
                <li>
                    <a href="https://web.facebook.com" target="_blank" aria-label="Facebook"><img src="images/icon-facebook.svg" alt=""></a>
                </li>
                <li>
                    <a href="https://x.com" target="_blank" aria-label="X/Twitter"><img src="images/icon-twitter.svg" alt=""></a>
                </li>
                <li>
                    <a href="https://pinterest.com/" target="_blank" aria-label="Pinterest"><img src="images/icon-pinterest.svg" alt=""></a>
                </li>
            </ul>`;
      document.querySelector('a').focus();
      share.setAttribute("aria-expanded", state);
    } else {
      author.innerHTML = ` <img src="images/avatar-michelle.jpg" alt="author's face">
                <div>
                <p class="name">Michelle Appleton</p>
                <p class="date">28 Jun 2020</p>
                </div>
            </div>`;

      share.setAttribute("aria-expanded", !state);
    }
  }
});
