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
          ? `industry=${encodeURIComponent(selectedArray.join("+"))}`
          : "industry=Other";
  
      const cname = getQueryParam("cname") || "defaultCName";
      const slogan = getQueryParam("slogan") || "defaultSlogan";
  
      const nextUrl = `logo_style.php?cname=${encodeURIComponent(cname)}&slogan=${encodeURIComponent(
        slogan
      )}&${queryParams}`;
  
      // Navigate to the next page
      window.location.href = nextUrl;
    });
  });
  
  // Helper function to get query parameters
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  document.getElementById("companyName").innerText = getQueryParam("cname")
  