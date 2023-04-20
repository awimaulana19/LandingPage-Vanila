document.getElementById("keHome").addEventListener("click", function (event) {
  event.preventDefault();
  var tujuan = document.getElementById("home");
  tujuan.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("keAbout").addEventListener("click", function (event) {
  event.preventDefault();
  var tujuan = document.getElementById("about");
  tujuan.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("keFitur").addEventListener("click", function (event) {
  event.preventDefault();
  var tujuan = document.getElementById("fitur");
  tujuan.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("keTeam").addEventListener("click", function (event) {
  event.preventDefault();
  var tujuan = document.getElementById("team");
  tujuan.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("keContact").addEventListener("click", function (event) {
  event.preventDefault();
  var tujuan = document.getElementById("contact");
  tujuan.scrollIntoView({ behavior: "smooth" });
});

