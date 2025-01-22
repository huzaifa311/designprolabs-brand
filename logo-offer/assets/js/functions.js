document.getElementById('companyForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  const companyName = document.getElementById('companyName').value;
  const encodedName = encodeURIComponent(companyName); 
  window.location.href = `brief/slogan.php?cname=${encodedName}`;
})