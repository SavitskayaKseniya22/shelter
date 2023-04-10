import { blockScroll, toggleCheckbox } from "../scripts/utilities.js";

export class Header {
    constructor() {
        this.addListener();
    }

    addListener() {
        document.addEventListener("click", (event) => {
            if (
                event.target.tagName == "A" &&
                event.target.closest(".header-nav__links")
            ) {
                toggleCheckbox(document.getElementById("burger-icon"), false);
                blockScroll(false);
            }
        });

        document
            .getElementById("burger-icon")
            .addEventListener("change", function (e) {
                blockScroll(e.target.checked);
            });

        addEventListener("resize", (event) => {
            if (
                document.getElementById("burger-icon").checked &&
                window.innerWidth > 767 &&
                document.body.style.overflow == "hidden"
            ) {
                toggleCheckbox(document.getElementById("burger-icon"), false);
                blockScroll(false);
            }
        });
    }
}
