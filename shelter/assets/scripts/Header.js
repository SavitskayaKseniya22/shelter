import { makeShadowBackground, toggleCheckbox } from "../scripts/utilities.js";

export class Header {
    constructor() {
        this.addListener();
    }




    addListener() {
        document.addEventListener('click', (event) => {
            if (event.target.tagName == "A" && event.target.closest(".header-nav__links")) {
                toggleCheckbox(document.getElementById("burger-icon"), false);
                makeShadowBackground(false)

            }
        });

        document.getElementById("burger-icon").addEventListener('change', function (e) {
            makeShadowBackground(e.target.checked)
        });


    }



}