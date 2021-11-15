export const showLoading = () => {
  const $fullpage = document.querySelector("#fullpage");
  const displayNone = () => {
    $fullpage.classList.remove("fullpage");
  };
  setTimeout(displayNone, 3350);

  const $loader = document.querySelector(".loader");

  window.setTimeout(function () {
    $loader.classList.add("loader--noactive");
    $loader.classList.remove("loader");
  }, 3350);
};
