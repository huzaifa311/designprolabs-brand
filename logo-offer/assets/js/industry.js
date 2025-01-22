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
  skipBtn.addEventListener("click", async () => {
    const selectedArray = Array.from(selectedCategories);
    const industryValue = selectedArray.length > 0 ? selectedArray.join(",") : "Other";
  
    const cname = getQueryParam("cname") || "defaultCName";
    const slogan = getQueryParam("slogan") || "defaultSlogan";
    const id = getQueryParam("id")
  
    const nextUrl = `color_picker.php?id=${id}&cname=${encodeURIComponent(cname)}&slogan=${encodeURIComponent(slogan)}&industry=${encodeURIComponent(industryValue)}`;
  
    try {
      const res = await fetch("https://form-submission-google-sheet.vercel.app/logo-offer/industry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry: industryValue, id }),
      });
      if (res.ok) {
        window.location.href = nextUrl;
      } else {
        console.error("Failed to submit industry");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  });
  
});

// Helper function to get query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.getElementById("companyName").innerText = getQueryParam("cname")
