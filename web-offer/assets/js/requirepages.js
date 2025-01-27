function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const id = getQueryParam("id");
const businessname = getQueryParam("businessname");
const purpose = getQueryParam("purpose");
const feeling = getQueryParam("feeling");
const domain = getQueryParam("domain");
const skipBtn = document.getElementById('skipBtn'); // Skip button
const skipText = document.getElementById('skipText'); // Text inside the button
const requirePagesForm = document.getElementById('requirePagesForm'); // Form element
const otherCheckbox = document.getElementById('other'); // "Other" checkbox
const otherTextInput = document.getElementById('otherText'); // "Other" text input

otherTextInput.disabled = true;

// Monitor checkboxes to update button text and handle "Other" input focus
requirePagesForm.addEventListener('change', function () {
  const checkboxes = requirePagesForm.querySelectorAll('input[type="checkbox"]');
  const isAnyChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  skipText.textContent = isAnyChecked ? 'Next' : 'Skip';

  // Handle "Other" checkbox behavior
  if (otherCheckbox.checked) {
    otherTextInput.disabled = false; // Enable the "Other" input field
    otherTextInput.required = true; // Make it required
    setTimeout(() => otherTextInput.focus(), 100); // Add slight delay for smoother focus
  } else {
    otherTextInput.disabled = true; // Disable the "Other" input field
    otherTextInput.required = false; // Remove the required attribute
    otherTextInput.value = ''; // Clear the input value if unchecked
  }
});

// Handle form submission (Enter key or button click)
requirePagesForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitForm();
});

skipBtn.addEventListener('click', function () {
  skipBtn.disabled = true;
  submitForm().finally(() => {
    skipBtn.disabled = false;
  });
});

async function submitForm() {
  const checkboxes = requirePagesForm.querySelectorAll('input[type="checkbox"]');
  const pages = [];

  // Collect selected pages
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (checkbox.id === 'other' && otherTextInput.value.trim()) {
        pages.push(otherTextInput.value.trim());
      } else if (checkbox.id !== 'other') {
        pages.push(checkbox.nextElementSibling.textContent.trim().toLowerCase()); // Convert to lowercase for URL
      }
    }
  });

  // If no pages are selected, use "N/A"
  const requirepages = pages.length > 0 ? pages.join('+') : 'N/A';

  const nextUrl = `../brief/urgency.php?id=${id}&businessname=${encodeURIComponent(businessname)}&purpose=${encodeURIComponent(purpose)}&feeling=${encodeURIComponent(feeling)}&domain=${encodeURIComponent(domain)}&requirepages=${encodeURIComponent(requirepages)}`;

  try {
    console.log('requirepages saved successfully:', requirepages);
    const res = await fetch("https://form-submission-google-sheet.vercel.app/web-offer/requirepages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requirepages, id })
    });
    if (res.ok) {
      window.location.href = nextUrl;
    }
  } catch (error) {
    console.error('Error saving requirepages:', error);
  }
}
