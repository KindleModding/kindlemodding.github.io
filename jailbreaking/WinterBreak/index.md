---
layout: default
parent: Jailbreaking Your Kindle
title: WinterBreak
nav_order: 3
---

# WinterBreak
<a href='https://ko-fi.com/hackerdude' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />

> After all, all devices have their dangers. The discovery of speech introduced communication – and lies.
> <br/>
> \- Isaac Asimov

WinterBreak is a jailbreak which was released on New Year's Day 2025 by [HackerDude](https://www.mobileread.com/forums/member.php?u=330416)

It is based on [Mesquito](../../mesquito/)

{: .highlight}
> Special thanks to Marek, NiLuJe, Katadelos and all the beta-testers during the development of this jailbreak.
>
> RIP bricked Kindles during beta-testing
> <br/>
> RIP the original deadlines

## Prerequisites
- You will need a PC
- Your Kindle must be registered
- Your Kindle must have a valid, internet-connected WiFi network saved to it that it can connect to during steps 8 to 10 (inclusive)

{: .highlight}
If you face any issues, please check the [troubleshooting](#troubleshooting) section

## Installation Guide

<style>
    /* For browsers that support `scrollbar-*` properties */
    @supports (scrollbar-color: auto) {
        .stepwrapper {
            scrollbar-width: thin;
            scrollbar-color: #369d36 #164116;
        }
    }

    /* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
    @supports selector(::-webkit-scrollbar) {
        .stepwrapper::-webkit-scrollbar {
            width: .5em;
        }
        .stepwrapper::-webkit-scrollbar-thumb {
            width: .5em;
        }
        .stepwrapper::-webkit-scrollbar-track-piece, .stepwrapper::-webkit-scrollbar-button {
            display: none;
        }
    }

    .stepwrapper {
        width: 100%;
        background-color: #212025;
        border-radius: 50px;
        background: #212025;
        box-shadow: inset 5px 5px 10px #0d0d0f,
                    inset -5px -5px 10px #35333b;
        border-radius: 15px;

        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }

    .step {
        flex-shrink: 0;
        flex-grow: 1;
        flex-basis: 100%;
        width: 100%;
        scroll-snap-align: start;
        scroll-snap-stop: normal;
        padding: 1em;

        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .step * {
        max-width: calc(100% - 2em);
    }

    .step img {
        max-width: 100%;
        max-height: 50vh;
        object-fit: scale-down;
    }

    .step p {
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: .5em;
    }
</style>

<div id="instructions" class="instructions">
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <p>Download the latest WinterBreak release:</p>
            <br/>
            <a href="https://github.com/KindleModding/WinterBreak/releases/latest/download/WinterBreak.tar.gz" class="btn btn-purple">Download</a>
        </div>
        <div class="step">
            <p>Turn on airplane mode on your Kindle</p>
            <img src="./airplane_mode.png" />
        </div>
        <div class="step">
            <p>Plug the Kindle into your computer and extract the contents of the `WinterBreak.tar.gz` file to your Kindle</p>
            <p class="highlight">
                For Linux/MacOS users, ENSURE the hidden folder `.active_content_sandbox` has been copied to your Kindle
            </p>
            <img src="./file_list.png" />
        </div>
        <div class="step">
            <p>Eject your Kindle from your computer and reboot it</p>
            <img src="./reboot.png" />
        </div>
        <div class="step">
            <p>Open the Kindle Store on your Kindle</p>
            <p>When prompted, click `yes` to turn off airplane mode</p>
            <img src="./store_aeroplane.png" />
        </div>
        <div class="step">
            <p>Click on the WinterBreak icon when it loads:</p>
            <img src="./winterbreak_launcher.png" />
        </div>
        <div class="step">
            <p>Wait around 30 seconds, and your Kindle will say something along the lines of "Now you are ready to install the hotfix"</p>
            <p>Once it does, you can move onto the post-jailbreak stage!</p>
            <img src="./winterbreak_run.png" />
        </div>
    </div>
</div>

<div class="buttons">
    <button class="btn btn-orange" id="prev">Previous Step</button>
    <span id="stepCounter"></span>
    <button class="btn btn-green" id="next">Next Step</button>
</div>


<script>
    var currentStep = 0;
    var steps = document.getElementsByClassName("step");
    syncButtons();

    function syncButtons() {
        if (currentStep == steps.length - 1) {
            document.getElementById("next").classList.remove("btn-green");
            document.getElementById("next").classList.add("btn-purple");
            document.getElementById("next").innerText = "Post Jailbreak";
        } else {
            document.getElementById("next").classList.remove("btn-purple");
            document.getElementById("next").classList.add("btn-green");
            document.getElementById("next").innerText = "Next Step";
        }

        document.getElementById("stepCounter").innerText = `${currentStep+1}/${steps.length}`;
    }

    function scrollToStep() {
        document.getElementById("stepwrapper").scrollTo({
            top: 0,
            left: document.getElementById("stepwrapper").scrollLeft + steps[currentStep].getBoundingClientRect().x - document.getElementById("stepwrapper").getBoundingClientRect().x,
            behavior: 'smooth'
        });
    }

    document.getElementById("prev").addEventListener('click', () => {
        if (currentStep == 0) {
            currentStep = steps.length - 1;
        } else {
            currentStep -= 1;
        }

        scrollToStep();
        syncButtons();
    });

    document.getElementById("next").addEventListener('click', () => {
        if (currentStep == steps.length-1) {
            window.location.href = "../post-jailbreak/"
        } else {
            currentStep += 1;
        }
        
        scrollToStep();
        syncButtons();
    });

    document.getElementById("stepwrapper").addEventListener('scroll', (event) => {
        currentStep = Math.round((document.getElementById("stepwrapper").scrollLeft / document.getElementById("stepwrapper").scrollWidth) * steps.length);
        syncButtons();
    });
</script>

# Troubleshooting
## Kindle store encountered an unexpected error
> Faced this error and found a solution [DiabloSat](https://github.com/progzone122) & [Rexathion1](https://github.com/Rexathion1)

If an **“Unexpected error”** occurs when you try to log in to the Kindle Store or **only the Kindle Store home page** is displayed, try the following solution:

1. Factory Reset Kindle
2. Before registering your Kindle/logging into your account - plug your Kindle into your PC, move the WinterBreak files to the root of your storage space
3. Log in account and enter airplane mode as soon as possible
4. Connect Kindle to PC and delete the cache directory at the path .active_content_sandbox/store/resource/LocalStorage (Skip this step if the LocalStorage directory does not exist)
5. Reboot Kindle
6. Open the Kindle Store on your Kindle
7. When prompted, click `yes` to turn off airplane mode

# Special Thanks To Our Courageous Beta Testers
- Crystals (Bricked their PW4 testing)
- mergen3107 (Came up with the "WinterBreak" name)
- Bomberfish
- BionicGecko
- Juliet
- Rie
- Robotic
- scrad
- shamanNS
- akane
- BlackNinja
- Gimzie
- Human
- Lux
- Marek
- terra
