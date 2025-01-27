function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const id = getQueryParam("id");
const businessname = getQueryParam("businessname");
const purpose = getQueryParam("purpose");
const feeling = getQueryParam("feeling");
const domain = getQueryParam("domain");
const requirepages = getQueryParam("requirepages");
const urgency = getQueryParam("urgency");

const anythingElseInput = document.getElementById('anythingElseInput');
const skipBtn = document.getElementById('skipBtn');    // <-- Button
const skipText = document.getElementById('skipText');   // <-- Span inside button
const anyhtingElseForm = document.getElementById('anyhtingElseForm');

// Change button text to "Next" if user types something
anythingElseInput.addEventListener('input', function () {
  if (anythingElseInput.value.trim() !== '') {
    skipText.innerText = 'Next';
  } else {
    skipText.innerText = 'Skip';
  }
});

// Handle form submission if user presses Enter
anyhtingElseForm.addEventListener('submit', function (event) {
  event.preventDefault();
  redirectToNextPage();
});

// Handle click on the entire button
skipBtn.addEventListener('click', async function () {
  skipBtn.disabled = true;
  await redirectToNextPage();
  skipBtn.disabled = false;
});

async function redirectToNextPage() {
  let anythingElse = anythingElseInput.value.trim();
  const id = getQueryParam("id");

  // If no anythingElse is provided, use "N/A"
  if (!anythingElse) {
    anythingElse = "N/A";
  }

  const nextUrl = `../brief/personal_info.php?id=${id}&businessname=${encodeURIComponent(businessname)}&purpose=${encodeURIComponent(purpose)}&feeling=${encodeURIComponent(feeling)}&domain=${encodeURIComponent(domain)}&requirepages=${encodeURIComponent(requirepages)}&urgency=${encodeURIComponent(urgency)}&anythingelse=${anythingElse}`;

  try {
    console.log("Redirecting to:", nextUrl);
    const res = await fetch("https://form-submission-google-sheet.vercel.app/web-offer/anything-else", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ anythingElse, id })
    });
    if (res.ok) {
      window.location.href = nextUrl;
    }
  } catch (error) {
    console.error("Error during redirection:", error);
  }

  // Redirect to the next page regardless of API success
  window.location.href = nextUrl;
}



