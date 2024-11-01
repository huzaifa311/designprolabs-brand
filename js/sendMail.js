// Updated sendEmail function
async function sendEmail(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  try {
    const formData = {
      name: firstName,
      email,
      phone,
      message,
    };

    console.log("start");
    
    const response = await fetch("https://designprolabs.vercel.app/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      document.getElementById("contactForm").reset();
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert(
      "An error occurred while sending your message. Please try again later."
    );
  }
}
