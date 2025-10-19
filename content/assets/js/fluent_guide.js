/**
 * The fluent guide system
 * (basically a glorified carousel)
 * 
 * Created by HackerDude
 */

class Guide {
    constructor(guideID="guide", endLink=null, endText=null) {
        this.guideID = guideID;
        this.endText = endText;
        this.endLink = endLink;
        this.guide = document.getElementById(guideID);
        this.stepWrapper = this.guide.getElementsByClassName("stepwrapper")[0];
        
        this.currentStep = 0;
        this.steps = this.guide.getElementsByClassName("step");
        this.syncButtons();

        // Register button handlers
        for (const buttonSet of this.guide.getElementsByClassName("buttons")) {
            buttonSet.children[0].addEventListener('click', () => {
                // Prev
                this.scrollToStep((this.currentStep-1) % this.steps.length);
                this.syncButtons();
            });

            buttonSet.children[2].addEventListener('click', () => {
                // Next
                if (this.currentStep == this.steps.length - 1 && this.endLink !== null) {
                    window.location.href = this.endLink;
                    return;
                }
                this.scrollToStep((this.currentStep+1) % this.steps.length);
                this.syncButtons();
            });
        }

        this.stepWrapper.addEventListener('scroll', (event) => {
            this.currentStep = Math.round((this.stepWrapper.scrollLeft / this.stepWrapper.scrollWidth) * this.steps.length);
            this.syncButtons();
        });
    }

    syncButtons() {
        for (const buttonSet of this.guide.getElementsByClassName("buttons")) {
            if (this.currentStep == this.steps.length - 1 && this.endText !== null) {
                buttonSet.children[2].classList.remove("btn-green");
                buttonSet.children[2].classList.add("btn-purple");
                buttonSet.children[2].innerText = this.endText;
            } else {
                buttonSet.children[2].classList.remove("btn-purple");
                buttonSet.children[2].classList.add("btn-green");
                buttonSet.children[2].innerText = "Next Step";
            }

            buttonSet.getElementsByTagName("span")[0].innerText = `${this.currentStep+1}/${this.steps.length}`;
        }
    }

    scrollToStep(step) {
        this.stepWrapper.scrollTo({
            top: 0,
            left: this.stepWrapper.scrollLeft + this.steps[step].getBoundingClientRect().x - this.stepWrapper.getBoundingClientRect().x,
            behavior: 'smooth'
        });

        this.guide.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}