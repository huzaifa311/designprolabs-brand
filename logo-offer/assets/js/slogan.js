function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Get `cname`
  const cname = getQueryParam('cname');
  document.getElementById('companyName').innerText = cname || '';
  
  // References
  const sloganInput = document.getElementById('sloganInput');
  const skipBtn     = document.getElementById('skipBtn');    // <-- Button
  const skipText    = document.getElementById('skipText');   // <-- Span inside button
  const sloganForm  = document.getElementById('sloganForm');
  
  // Change button text to "Next" if user types something
  sloganInput.addEventListener('input', function() {
    if (sloganInput.value.trim() !== '') {
      skipText.innerText = 'Next';
    } else {
      skipText.innerText = 'Skip';
    }
  });
  
  // Handle form submission if user presses Enter
  sloganForm.addEventListener('submit', function(event) {
    event.preventDefault();
    redirectToNextPage();
  });
  
  // Handle click on the entire button
  skipBtn.addEventListener('click', function() {
    redirectToNextPage();
  });
  
  function redirectToNextPage() {
    const slogan = sloganInput.value.trim();
    let nextUrl = `../brief/industry.php?cname=${encodeURIComponent(cname)}`;
    if (slogan) {
      nextUrl += `&slogan=${encodeURIComponent(slogan)}`;
    }
    window.location.href = nextUrl;
  }
  