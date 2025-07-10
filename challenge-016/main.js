const share = document.querySelector("button#share");
const otherInfo = document.querySelector("div.other-info");
const author = document.querySelector("div.author");
const popover = document.querySelector("div.popover");

share.addEventListener("click", function (e) {
  if (window.matchMedia("(min-width: 825px)").matches) {
    share.classList.toggle("on");
    popover.classList.toggle("pop-on");
  } else {
    otherInfo.classList.toggle("clicked");
    share.classList.toggle("on");

    if (otherInfo.classList.contains("clicked")) {
      author.innerHTML = `<span>SHARE</span>
            <ul>
                <li>
                    <a href="https://web.facebook.com" target="_blank"><img src="images/icon-facebook.svg"></a>
                </li>
                <li>
                    <a href="https://x.com" target="_blank"><img src="images/icon-twitter.svg" ></a>
                </li>
                <li>
                    <a href="https://pinterest.com/" target="_blank"><img src="images/icon-pinterest.svg"></a>
                </li>
            </ul>`;
    } else {
      author.innerHTML = ` <img src="images/avatar-michelle.jpg" alt="author's face">
                <div>
                <p class="name">Michelle Appleton</p>
                <p class="date">28 Jun 2020</p>
                </div>
            </div>`;
    }
  }
});
