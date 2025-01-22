document.getElementById('companyForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const companyName = document.getElementById('companyName').value;
  const encodedName = encodeURIComponent(companyName);
  const id = window.btoa(companyName)
  try {
    const res = await fetch("https://form-submission-google-sheet.vercel.app/logo-offer/company-name", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company_name: companyName, id })
    });
    window.location.href = `brief/slogan.php?id=${id}&cname=${encodedName}`;
  } catch (error) {
    console.log(error);
  }
})