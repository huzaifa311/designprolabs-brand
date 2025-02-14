document.addEventListener("DOMContentLoaded", () => {
    const stepBoxes = document.querySelectorAll(".step-box");
    const skipBtn = document.getElementById("skipBtn");
    const skipText = document.getElementById("skipText");

    const selectedCategories = new Set();

    stepBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const category = box.querySelector("p").textContent.trim();
            const stepInner = box.querySelector(".step-inner");

            // Toggle selection
            if (selectedCategories.has(category)) {
                selectedCategories.delete(category);
                stepInner.classList.remove("selected");
            } else {
                selectedCategories.add(category);
                stepInner.classList.add("selected");
            }

            // Change button text
            skipText.textContent = selectedCategories.size > 0 ? "Next" : "Skip";
        });
    });

    // Handle button click
    skipBtn.addEventListener("click", async () => {
        skipBtn.disabled = true;

        const selectedArray = Array.from(selectedCategories);
        const colorPickerValue = selectedArray.length > 0 ? selectedArray.join(",") : "Other";

        const cname = getQueryParam("cname") || "defaultCName";
        const slogan = getQueryParam("slogan") || "defaultSlogan";
        const industry = getQueryParam("industry") || "defaultIndustry";
        const id = getQueryParam("id");

        const nextUrl = `logo_type.php?id=${id}&cname=${encodeURIComponent(cname)}&slogan=${encodeURIComponent(slogan)}&industry=${encodeURIComponent(industry)}&color_picker=${encodeURIComponent(colorPickerValue)}`;

        try {
            const res = await fetch("https://form-submission-google-sheet.vercel.app/logo-offer/colors", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ color_picker: colorPickerValue, id })
            });

            if (res.ok) {
                window.location.href = nextUrl;
            } else {
                console.error("Failed to save color picker data.");
                skipBtn.disabled = false;
            }
        } catch (error) {
            console.log("Error:", error);
            skipBtn.disabled = false;
        }
    });

});

// Helper function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Set the company name dynamically
document.getElementById("companyName").innerText = getQueryParam("cname");
