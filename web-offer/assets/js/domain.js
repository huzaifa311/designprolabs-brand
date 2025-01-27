document.addEventListener("DOMContentLoaded", () => {
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const id = getQueryParam("id");
  const businessname = getQueryParam("businessname");
  const purpose = getQueryParam("purpose");
  const feeling = getQueryParam("feeling");

  const nextBtn = document.getElementById("nextBtn");
  const noCheckbox = document.getElementById("no");
  const yesCheckbox = document.getElementById("yes");
  const domainInput = document.getElementById("domain");

  // Disable the domain input by default
  domainInput.disabled = true;

  // Ensure mutual exclusivity of checkboxes and manage domain input state
  noCheckbox.addEventListener("change", () => {
    if (noCheckbox.checked) {
      yesCheckbox.checked = false; // Uncheck "Yes" if "No" is selected
      domainInput.value = ""; // Clear domain input
      domainInput.disabled = true; // Disable domain input
      domainInput.required = false; // Domain input not required
    }
  });

  yesCheckbox.addEventListener("change", () => {
    if (yesCheckbox.checked) {
      noCheckbox.checked = false; // Uncheck "No" if "Yes" is selected
      domainInput.disabled = false; // Enable domain input
      domainInput.required = true; // Make domain input required
      setTimeout(() => domainInput.focus(), 100); // Focus domain input with slight delay
    } else {
      domainInput.disabled = true; // Disable domain input if unchecked
      domainInput.required = false; // Domain input not required
      domainInput.value = ""; // Clear domain input
    }
  });

  // Form submission handler
  nextBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      nextBtn.disabled = true; // Disable button temporarily
      redirectToNextPage().finally(() => {
        nextBtn.disabled = false; // Re-enable button after process completes
      });
    }
  });

  // Validate the form inputs
  function validateForm() {
    if (!noCheckbox.checked && !yesCheckbox.checked) {
      alert("Please select either 'Yes' or 'No'.");
      return false;
    }
    if (yesCheckbox.checked && !domainInput.value.trim()) {
      alert("Please enter your domain if 'Yes' is selected.");
      return false;
    }
    return true;
  }

  // Redirect to the next page
  async function redirectToNextPage() {
    const domain = yesCheckbox.checked ? domainInput.value.trim() : "N/A";

    const nextUrl = `../brief/requirepages.php?id=${id}&businessname=${encodeURIComponent(businessname)}&purpose=${encodeURIComponent(purpose)}&feeling=${encodeURIComponent(feeling)}&domain=${encodeURIComponent(domain)}`;

    try {
      console.log("Redirecting to:", nextUrl);
      // Simulate async behavior for testing
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates delay for testing
      const res = await fetch("https://form-submission-google-sheet.vercel.app/web-offer/domain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, id })
      });
      if (res.ok) {
        window.location.href = nextUrl;
      }
    } catch (error) {
      console.error("Error during redirection:", error);
    }
  }
});
