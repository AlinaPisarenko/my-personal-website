const aboutMe = document.getElementById("about");
const myInfo = document.getElementById("info").offsetTop;
function goToInfo() {
  window.scrollTo({ top: myInfo, behavior: "smooth" });
}
aboutMe.addEventListener("click", goToInfo);

const myWork = document.getElementById("work");
const myProjects = document.getElementById("projects").offsetTop;
function goToProjects() {
  window.scrollTo({ top: myProjects, behavior: "smooth" });
}
myWork.addEventListener("click", goToProjects);

const contactMe = document.getElementById("contact");
const myContacts = document.getElementById("links").offsetTop;
function goToContacts() {
  window.scrollTo({ top: myContacts, behavior: "smooth" });
}
contactMe.addEventListener("click", goToContacts);
