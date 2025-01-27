function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const businessname = getQueryParam('businessname');
const id = getQueryParam('id');
const purpose = getQueryParam('purpose');
const skipBtn = document.getElementById('skipBtn'); // Skip button
const skipText = document.getElementById('skipText'); // Text inside the button
const feelingForm = document.getElementById('feelingForm'); // Form element
const otherCheckbox = document.getElementById('other'); // "Other" checkbox
const otherTextInput = document.getElementById('otherText'); // "Other" text input
// Disable the "Other" input field by default
otherTextInput.disabled = true;

// Monitor checkboxes to update button text and handle "Other" input focus
feelingForm.addEventListener('change', function () {
  const checkboxes = feelingForm.querySelectorAll('input[type="checkbox"]');
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
feelingForm.addEventListener('submit', function (event) {
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
  const checkboxes = feelingForm.querySelectorAll('input[type="checkbox"]');
  const feelings = [];

  // Collect feelings
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (checkbox.id === 'other' && otherTextInput.value.trim()) {
        feelings.push(otherTextInput.value.trim());
      } else if (checkbox.id !== 'other') {
        feelings.push(checkbox.nextElementSibling.textContent.trim());
      }
    }
  });

  const feeling = feelings.length > 0 ? feelings.join(', ') : 'N/A';
  const nextUrl = `../brief/domain.php?id=${id}&businessname=${encodeURIComponent(businessname)}&purpose=${encodeURIComponent(purpose)}&feeling=${encodeURIComponent(feeling)}`;

  try {
    const res = await fetch("https://form-submission-google-sheet.vercel.app/web-offer/feeling", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ feeling, id })
    });
    if (res.ok) {
      window.location.href = nextUrl;
    }
  } catch (error) {
    console.error('Error saving feeling:', error);
  }
}
