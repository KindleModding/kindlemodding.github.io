const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register("/service_worker.js", {
                scope: "/",
            });
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

registerServiceWorker();

//Modal Functions
function showDialog(id) {
    const modal = document.getElementById(id);
    if (!modal) {
        console.error(`Modal with ID "${id}" not found!`);
        return;
    }

    const overlay = modal.closest(".modal-overlay");
    if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";

        const escHandler = (e) => {
            if (e.key === "Escape") {
                closeDialog(id);
                window.removeEventListener("keydown", escHandler);
            }
        };
        window.addEventListener("keydown", escHandler);
    }
}

function closeDialog(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    const overlay = modal.closest(".modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = ""; 
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
        const activeModal = e.target.querySelector(".modal-container");
        if (activeModal) {
            closeDialog(activeModal.id);
        }
    }
});