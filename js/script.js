elementList = document.body.querySelectorAll(
  "a[href^='https://circleci.com/']"
);

elementList.forEach(e => {
  e.setAttribute("target", "_blank");
});
