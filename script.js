const toggleBtn = document.querySelector(".nav-toggle");

const closeBtn = document.querySelector(".close-btn");
const sideNav = document.querySelector(".nav");

function toggleSidebar() {
	sideNav.classList.toggle("show-sidevar");
}

closeBtn.addEventListener("click", toggleSidebar);

toggleBtn.addEventListener("click", toggleSidebar);
