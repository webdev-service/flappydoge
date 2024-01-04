let slider = null;
let closeBtn = null;
let burgerBtn = null;
let copyBtns = null;
let resetInputTm = null;

if (document.getElementsByClassName('mobile-slider').length > 0) {
  slider = document.getElementsByClassName('mobile-slider')[0];
}

if (document.getElementsByClassName('close-btn').length > 0) {
  closeBtn = document.getElementsByClassName('close-btn')[0];
}

if (document.getElementsByClassName('burger-btn').length > 0) {
  burgerBtn = document.getElementsByClassName('burger-btn')[0];
}

if (document.getElementsByClassName('input-bg').length > 0) {
  copyBtns = document.getElementsByClassName('input-bg');
}

if (burgerBtn != null) burgerBtn.onclick = function() {
  if (slider != null) {
    slider.classList.remove("hidden");
  }
}

if (closeBtn != null) closeBtn.onclick = function() {
  if (slider != null) {
    slider.classList.add("hidden");
  }
}

if (copyBtns != null) {
  for (i = 0, len = copyBtns.length; i < len; i++) {
    copyBtns[i].onclick = function() {
      const that = this
      const line = that.querySelector('#contract').innerText
      navigator.clipboard.writeText(line)
        .then(() => {
          that.classList.add("success");
          const messageEls = document.getElementsByClassName('copy-message')
          messageEls[0].classList.add("show");
          messageEls[1].classList.add("show");

          resetInputTm = setTimeout(function() {
            const messageEls = document.getElementsByClassName('copy-message')
            messageEls[0].classList.remove("show");
            messageEls[1].classList.remove("show");

            that.classList.remove("success");
          }, 1500);
        })
        .catch(err => {
          console.error('clipboard was not written', err)
        });
    };
    copyBtns[i].onmouseleave = function() {
      clearTimeout(resetInputTm);
      this.classList.remove("success");
      const messageEls = document.getElementsByClassName('copy-message')
      messageEls[0].classList.remove("show");
      messageEls[1].classList.remove("show");
    }
  }
}
