class Guide {
    constructor(guideID="guide", endLink=null, endText=null) {
        this.guideID = guideID;
        this.endText = endText;
        this.endLink = endLink;
        this.guide = document.getElementById(guideID);
        
        this.currentStep = 0;
        this.steps = this.guide.getElementsByClassName("step");
        this.syncButtons();

        this.guide.getElementsByClassName("buttons")[0].children[0].addEventListener('click', () => {
            this.scrollToStep((this.currentStep-1) % this.steps.length);
            this.syncButtons();
        });

        this.guide.getElementsByClassName("buttons")[0].children[2].addEventListener('click', () => {
            this.scrollToStep((this.currentStep+1) % this.steps.length);
            this.syncButtons();
        });

        this.guide.children[0].addEventListener('scroll', (event) => {
            this.currentStep = Math.round((this.guide.children[0].scrollLeft / this.guide.children[0].scrollWidth) * this.steps.length);
            this.syncButtons();
        });
    }

    syncButtons() {
        if (this.currentStep == this.steps.length - 1 && this.endText !== null) {
            this.guide.getElementsByClassName("buttons")[0].children[2].classList.remove("btn-green");
            this.guide.getElementsByClassName("buttons")[0].children[2].classList.add("btn-purple");
            this.guide.getElementsByClassName("buttons")[0].children[2].innerText = "Post Jailbreak";
        } else {
            this.guide.getElementsByClassName("buttons")[0].children[2].classList.remove("btn-purple");
            this.guide.getElementsByClassName("buttons")[0].children[2].classList.add("btn-green");
            this.guide.getElementsByClassName("buttons")[0].children[2].innerText = "Next Step";
        }

        this.guide.getElementsByClassName("buttons")[0].getElementsByTagName("span")[0].innerText = `${this.currentStep+1}/${this.steps.length}`;
    }

    scrollToStep(step) {
        this.guide.children[0].scrollTo({
            top: 0,
            left: this.guide.children[0].scrollLeft + this.steps[step].getBoundingClientRect().x - this.guide.children[0].getBoundingClientRect().x,
            behavior: 'smooth'
        });
    }
}