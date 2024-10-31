async function sendEmail(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  try {
    console.log(email, firstName, phone, message);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "contactus@designprolabs.com",
        pass: "#I-IeQSgzk)t",
      },
    });
    const res = await transporter.sendMail({
      from: "contactus@designprolabs.com",
      to: "contactus@designprolabs.com",
      subject: `New Contact Form Submission from ${firstName}`,
      Body: `First Name: ${firstName} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${message}`,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
