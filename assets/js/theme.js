var r = document.querySelector(':root');
		
const darkTitle = document.getElementById('theme-dark-btn');
const lightTitle = document.getElementById('theme-light-btn');
var darkElements = document.querySelectorAll('.element-dark');
var lightElements = document.querySelectorAll('.element-light');
var hidepdfs = document.querySelectorAll('.hide-pdf');

var themme = "dark";

function set_dark() {
  themme = "dark";
  r.style.setProperty('--color-heading', '#FCFCFC');
  r.style.setProperty('--color-paragraph', '#D6D6D6');
  r.style.setProperty('--color-border', '#383838');
  r.style.setProperty('--color-bg', '#121212');
  r.style.setProperty('--color-surface-1', '#1e1e1f');
  r.style.setProperty('--color-surface-2', '#2a2a2b');
  r.style.setProperty('--color-surface-3', '#202021');
  r.style.setProperty('--color-accent', '#FFDB6E');
  r.style.setProperty('--color-error', '#B84C4C');
  r.style.setProperty('--color-gradient', 'linear-gradient(var(--angle), #FFDB6E 26.31%, #FFBC5E 93.75%)');
  r.style.setProperty('--color-gradient-soft', 'linear-gradient(var(--angle), rgba(255, 218, 109, 0.0375) 0%, rgba(255, 189, 94, 0) 100%), #1E1E1F');
  r.style.setProperty('--color-gradient-text', 'linear-gradient(var(--angle3), #FFDB6E, #FFBC5E)');
  r.style.setProperty('--color-gradient-border', 'linear-gradient(var(--angle2), #FFDA6D 0%, rgba(255, 191, 96, 0) 50%)');
  r.style.setProperty('--color-gradient-border-gray', 'linear-gradient(var(--angle), #404040 0%, rgba(64, 64, 64, 0) 48.44%)');
  r.style.setProperty('--color-gradient-gray', 'linear-gradient(var(--angle), #3F3F40 2.69%, #303030 93.75%)');
  r.style.setProperty('--color-gradient-icon', 'linear-gradient(var(--angle), rgba(255, 218, 109, 0.25) 0%, rgba(255, 189, 94, 0) 59.86%), #202021');
  r.style.setProperty('--color-btn', 'linear-gradient(var(--angle), rgba(45, 45, 46, 0.25) 0%, rgba(27, 27, 28, 0) 100%), #202021');
  r.style.setProperty('--box-shadow-24', '-4px 8px 24px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-30', '0px 16px 30px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-40', '0px 16px 40px rgba(0, 0, 0, 0.25)');
  r.style.setProperty('--box-shadow-50', '0px 25px 50px rgba(0, 0, 0, 0.15)');
  r.style.setProperty('--box-shadow-80', '0px 24px 80px rgba(0, 0, 0, 0.7)');
  darkTitle.classList.remove("btn-deactive")
  darkTitle.classList.add("btn-active");
  lightTitle.classList.remove("btn-active")
  lightTitle.classList.add("btn-deactive");
  darkElements.forEach(function(icon) {
    icon.classList.remove('invisible');
    icon.classList.add('visible');
  });
  lightElements.forEach(function(icon) {
    icon.classList.remove('visible');
    icon.classList.add('invisible');
  });
}

function set_light() {
  themme = "light";
  r.style.setProperty('--color-heading', '#030303');
  r.style.setProperty('--color-paragraph', '#000000');
  r.style.setProperty('--color-border', '#c1d5fb');
  r.style.setProperty('--color-bg', '#445473');
  r.style.setProperty('--color-surface-1', '#e1e1e1');
  r.style.setProperty('--color-surface-2', '#bfd0ef');
  r.style.setProperty('--color-surface-3', '#e1e1e1');
  r.style.setProperty('--color-accent', '#0f61ff');
  r.style.setProperty('--color-error', '#47b3b3');
  r.style.setProperty('--color-gradient', 'linear-gradient(var(--angle), #5e7093 56.31%, #445473 93.75%)');
  r.style.setProperty('--color-gradient-soft', 'linear-gradient(var(--angle), rgb(132 161 215 / 38%) 0%, rgb(225 225 225) 60%), #e1e1e1');
  r.style.setProperty('--color-gradient-text', 'linear-gradient(var(--angle3), #445473, #445473)');
  r.style.setProperty('--color-gradient-border', 'linear-gradient(var(--angle2), rgb(68 84 115) 0%, rgba(0, 64, 159, 0) 65%)');
  r.style.setProperty('--color-gradient-border-gray', 'linear-gradient(var(--angle), #455574 0%, rgb(68 84 115 / 21%) 48.44%)');
  r.style.setProperty('--color-gradient-gray', 'linear-gradient(var(--angle), #c0c0bf 2.69%, #cfcfcf 93.75%)');
  r.style.setProperty('--color-gradient-icon', 'linear-gradient(var(--angle), rgba(0, 37, 146, 0.25) 0%, rgba(0, 66, 161, 0) 59.86%), #dfdfde');
  r.style.setProperty('--color-btn', 'linear-gradient(var(--angle), rgb(193 213 251) 0%, rgba(27, 27, 28, 0) 100%), #dfdfde');
  r.style.setProperty('--box-shadow-24', '-4px 8px 24px rgb(0 0 0 / 30%)');
  r.style.setProperty('--box-shadow-30', '0px 16px 30px rgb(157 157 157 / 38%)');
  r.style.setProperty('--box-shadow-40', '0px 16px 40px rgb(117 117 117 / 19%)');
  r.style.setProperty('--box-shadow-50', '0px 25px 50px rgb(191 191 191 / 0%)');
  r.style.setProperty('--box-shadow-80', '0px 24px 80px rgb(213 213 213 / 70%)');
  darkTitle.classList.remove("btn-active")
  darkTitle.classList.add("btn-deactive");
  lightTitle.classList.remove("btn-deactive")
  lightTitle.classList.add("btn-active");
  lightElements.forEach(function(icon) {
    icon.classList.remove('invisible');
    icon.classList.add('visible');
  });
  darkElements.forEach(function(icon) {
    icon.classList.remove('visible');
    icon.classList.add('invisible');
  });
}

function openEn() {
  var currentURL = window.location.href;
  var currentHost = window.location.host;
  var currentPathname = window.location.pathname;
  currentPathname = currentPathname.replace("/index.html", "");
  currentPathname = currentPathname.replace("/en", "");
  currentPathname = currentPathname.replace("/fa", "");
  window.open('/en', "_self");
}

function openFa() {
  var currentURL = window.location.href;
  var currentHost = window.location.host;
  var currentPathname = window.location.pathname;
  currentPathname = currentPathname.replace("/index.html", "");
  currentPathname = currentPathname.replace("/en", "");
  currentPathname = currentPathname.replace("/fa", "");
  window.open('/fa', "_self");
}

function toPDF() {
  hidepdfs.forEach(function(elmnt) {
    elmnt.classList.remove('visible');
    elmnt.classList.add('invisible');
  });
  
  r.style.setProperty('--box-shadow-24', '0px 0px 0px rgb(255 255 255 / 0%)');
  r.style.setProperty('--box-shadow-30', '0px 0px 0px rgb(255 255 255 / 0%)');
  r.style.setProperty('--box-shadow-40', '0px 0px 0px rgb(255 255 255 / 0%)');
  r.style.setProperty('--box-shadow-50', '0px 0px 0px rgb(255 255 255 / 0%)');
  r.style.setProperty('--box-shadow-80', '0px 0px 0px rgb(255 255 255 / 0%)');

  if(themme=="dark") {
    r.style.setProperty('--color-heading', '#FCFCFC');
    r.style.setProperty('--color-paragraph', '#D6D6D6');
    r.style.setProperty('--color-border', '#383838');
    r.style.setProperty('--color-bg', '#121212');
    r.style.setProperty('--color-surface-1', '#1e1e1f');
    r.style.setProperty('--color-surface-2', '#2a2a2b');
    r.style.setProperty('--color-surface-3', '#202021');
    r.style.setProperty('--color-accent', '#FFDB6E');
    r.style.setProperty('--color-error', '#B84C4C');
    r.style.setProperty('--color-gradient', '#d5b656');
    r.style.setProperty('--color-gradient-soft', '#2a2a2b');
    r.style.setProperty('--color-gradient-text', '#FFDB6E');
    r.style.setProperty('--color-gradient-border', '#af9a5b');
    r.style.setProperty('--color-gradient-border-gray', '#FFDB6E');
    r.style.setProperty('--color-gradient-gray', '#2a2a2b');
    r.style.setProperty('--color-gradient-icon', '#2a2a2b');
    r.style.setProperty('--color-btn', '#2a2a2b');
    r.style.setProperty('--box-shadow-24', '#121212');
    r.style.setProperty('--box-shadow-30', '#121212');
    r.style.setProperty('--box-shadow-40', '#121212');
    r.style.setProperty('--box-shadow-50', '#121212');
    r.style.setProperty('--box-shadow-80', '#121212');
  }
  if(themme=="light") {
    r.style.setProperty('--color-heading', '#030303');
    r.style.setProperty('--color-paragraph', '#000000');
    r.style.setProperty('--color-border', '#c1d5fb');
    r.style.setProperty('--color-bg', '#445473');
    r.style.setProperty('--color-surface-1', '#e1e1e1');
    r.style.setProperty('--color-surface-2', '#bfd0ef');
    r.style.setProperty('--color-surface-3', '#e1e1e1');
    r.style.setProperty('--color-accent', '#0057ff');
    r.style.setProperty('--color-error', '#47b3b3');
    r.style.setProperty('--color-gradient', '#8e9ebd');
    r.style.setProperty('--color-gradient-soft', '#cfdbf1');
    r.style.setProperty('--color-gradient-text', '#445473');
    r.style.setProperty('--color-gradient-border', '#445473');
    r.style.setProperty('--color-gradient-border-gray', '#445473');
    r.style.setProperty('--color-gradient-gray', '#bfd0ef');
    r.style.setProperty('--color-gradient-icon', '#bfd0ef');
    r.style.setProperty('--color-btn', '#bfd0ef');
    r.style.setProperty('--box-shadow-24', '#e1e1e1');
    r.style.setProperty('--box-shadow-30', '#e1e1e1');
    r.style.setProperty('--box-shadow-40', '#e1e1e1');
    r.style.setProperty('--box-shadow-50', '#e1e1e1');
    r.style.setProperty('--box-shadow-80', '#e1e1e1');
  }
}

function hidePanel() {
  var panel = document.getElementById("panel");
  var content = document.getElementById("content");
  panel.classList.remove('visible');
  panel.classList.add('invisible');
  content.classList.remove('col-xl-9');
  content.classList.add('col-xl-12');
}

function handleKeyPress(event) {
  if (event.ctrlKey && event.key === ".") {
    toPDF();
  }
  if (event.ctrlKey && event.key === ",") {
    hidePanel();
  }
  if (event.ctrlKey && event.key === "l") {
    set_light();
  }
  if (event.ctrlKey && event.key === "k") {
    set_dark();
  }
}

document.addEventListener('keydown', handleKeyPress);