function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get `cname`
const cname = getQueryParam('cname');
document.getElementById('companyName').innerText = cname || '';

// References
const sloganInput = document.getElementById('sloganInput');
const skipBtn = document.getElementById('skipBtn');    // <-- Button
const skipText = document.getElementById('skipText');   // <-- Span inside button
const sloganForm = document.getElementById('sloganForm');

// Change button text to "Next" if user types something
sloganInput.addEventListener('input', function () {
  if (sloganInput.value.trim() !== '') {
    skipText.innerText = 'Next';
  } else {
    skipText.innerText = 'Skip';
  }
});

// Handle form submission if user presses Enter
sloganForm.addEventListener('submit', function (event) {
  event.preventDefault();
  redirectToNextPage();
});

// Handle click on the entire button
skipBtn.addEventListener('click', function () {
  skipBtn.disabled = true;
  redirectToNextPage();
  skipBtn.disabled = false;
});

async function redirectToNextPage() {
  const slogan = sloganInput.value.trim();
  const id = getQueryParam("id");
  let nextUrl = `../brief/industry.php?id=${id}&cname=${encodeURIComponent(cname)}`;
  if (slogan) {
    nextUrl += `&slogan=${encodeURIComponent(slogan)}`;
  }
  try {
    const res = await fetch("https://form-submission-google-sheet.vercel.app/logo-offer/slogan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slogan, id }), // Include `id` in the body
    });

    if (!res.ok) {
      throw new Error("Failed to update slogan");
    }

    console.log("Slogan saved successfully");
    window.location.href = nextUrl;
  } catch (error) {
    console.error("Error saving slogan:", error);
  }
}

