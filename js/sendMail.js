async function sendEmail(event) {
  event.preventDefault();
  console.log("start");
  

  // Get the loader and submit button elements
  const loader = document.getElementById("loader");

  try {
    // Show the loader and disable the submit button
    loader.style.display = "block";
    console.log("ghfdsacd");
    

    const formElements = event.target.elements;
    const values = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (
        element.tagName === "INPUT" ||
        element.tagName === "TEXTAREA" ||
        element.tagName === "SELECT"
      ) {
        if (element.type !== "submit" && element.type !== "button") {
          const key = element.id || `field${i}`;
          values[key] = element.value;
        }
      }
    }

    console.log(values);

    const formData = {
      name: values.firstName,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    const response = await fetch(
      "https://designprolabs.vercel.app/api/send-mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    console.log(formData);

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
  } finally {
    // Hide the loader and enable the submit button
    loader.style.display = "none";
  }
}
