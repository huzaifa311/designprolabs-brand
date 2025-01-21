document.addEventListener("DOMContentLoaded", () => {
    const stepBoxes = document.querySelectorAll(".step-box");
    const skipBtn = document.getElementById("skipBtn");
    const skipText = document.getElementById("skipText");

    const selectedCategories = new Set();

    // Handle step box selection
    stepBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const category = box.querySelector("p").textContent.trim();
            const stepInner = box.querySelector(".step-inner");

            // Toggle selection
            if (selectedCategories.has(category)) {
                // If already selected, deselect
                selectedCategories.delete(category);
                stepInner.classList.remove("selected");
            } else {
                // If not selected, add selection
                selectedCategories.add(category);
                stepInner.classList.add("selected");
            }

            // Change button text
            skipText.textContent = selectedCategories.size > 0 ? "Next" : "Skip";
        });
    });

    // Handle button click
    skipBtn.addEventListener("click", () => {
        const selectedArray = Array.from(selectedCategories);
        const queryParams =
            selectedArray.length > 0
                ? `logo_type=${encodeURIComponent(selectedArray.join("+"))}`
                : "logo_type=Other";

        const cname = getQueryParam("cname") || "defaultCName";
        const slogan = getQueryParam("slogan") || "defaultSlogan";
        const industry = getQueryParam("industry") || "defaultIndustry";
        const color_picker = getQueryParam("color_picker") || "defaultColorPicker";

        const nextUrl = 
        `personal_info.php?cname=${encodeURIComponent(cname)}&slogan=${encodeURIComponent(slogan)}&industry=${encodeURIComponent(industry)}&color_picker=${encodeURIComponent(color_picker)}&${queryParams}`;
        window.location.href = nextUrl;
    });
});

// Helper function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}