function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById("companyName").innerText = getQueryParam("cname")
const submitBtn = document.getElementById("submitBtn")
submitBtn.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company_name = getQueryParam("cname") || "defaultCName";
    const slogan = getQueryParam("slogan") || "defaultSlogan";
    const industry = getQueryParam("industry") || "defaultIndustry";
    const color_picker = getQueryParam("color_picker") || "defaultColorPicker";
    const logo_type = getQueryParam("logo_type") || "defaultLogoType";
    if (!name || !email || !phone) {
        if (!name) {
            alert("Name is Required Please Fill in")
            return
        }
        if (!email) {
            alert("Email Address is Required Please Fill in")
            return
        }
        if (!phone) {
            alert("Phone Number is Required Please Fill in")
            return
        }
        return
    } else {
        const objToSend = {
            name,
            email,
            phone,
            company_name,
            slogan,
            industry,
            color_picker,
            logo_type,
            submitted_at: new Date().toLocaleString()
        }
        try {
            await fetch("https://form-submission-google-sheet.vercel.app/logo-offer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objToSend),
            });
            window.location.href = "../formsubmitted.php";
        } catch (error) {
            console.error("Error during API call:", error);
            alert("An error occurred while submitting the form. Please try again.");
        }
    }
});