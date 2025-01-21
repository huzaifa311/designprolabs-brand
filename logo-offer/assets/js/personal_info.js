function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function buildPayloadObject() {
    const name = document.getElementById("name").value || "Sent when user filled up email";
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value || "Not Provided";
    const company_name = getQueryParam("cname") || "defaultCName";
    const slogan = getQueryParam("slogan") || "defaultSlogan";
    const industry = getQueryParam("industry") || "defaultIndustry";
    const color_picker = getQueryParam("color_picker") || "defaultColorPicker";
    const logo_type = getQueryParam("logo_type") || "defaultLogoType";
    return {
        name,
        email,
        phone,
        company_name,
        slogan,
        industry,
        color_picker,
        logo_type,
        submitted_at: new Date().toLocaleString()
    };
}

async function sendFormData(obj) {
    try {
        await fetch("https://form-submission-google-sheet.vercel.app/logo-offer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async () => {
    const obj = buildPayloadObject();
    if (!obj.name) {
        alert("Name is required");
        return;
    }
    if (!obj.email) {
        alert("Email is required");
        return;
    }
    await sendFormData(obj);
    window.location.href = "../formsubmitted.php";
});

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", async () => {
    const value = emailInput.value.trim();
    if (value.endsWith(".com")) {
        console.log("start");
        const obj = buildPayloadObject();
        await sendFormData(obj);
    }
});