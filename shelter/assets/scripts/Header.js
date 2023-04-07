export class Header {
    constructor() {
        this.addListener();
    }




    addListener() {
        document.addEventListener('click', (event) => {
            if (event.target.tagName == "A" && event.target.closest(".header-nav__links")) {
                this.uncheck()

            }
        });

        document.getElementById("burger-icon").addEventListener('change', function (e) {
            document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
        });


    }
    uncheck() {
        document.getElementById("burger-icon").checked = false;
    }

}