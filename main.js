const nav_btn = document.querySelector(".mobile_nav #nav .nav_btn");
const main_menu = document.querySelector(".mobile_nav .main_menu");
const nav__items = document.querySelectorAll(
	".mobile_nav .main_menu .nav__item"
);
console.log(nav__items);
nav__items.forEach((items) => {
	items.addEventListener("click", function () {
		main_menu.classList.remove("active");
	});
});
function add_nav_btn_border() {
	nav_btn.classList.toggle("active");
	main_menu.classList.toggle("active");
	nav_btn.classList.toggle("nav_animation");
	if (!nav_btn.classList.contains("nav_animation")) {
		nav_btn.classList.add("remove_animation");
	} else {
		nav_btn.classList.remove("remove_animation");
	}
}
nav_btn.addEventListener("click", add_nav_btn_border);
