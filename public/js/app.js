const form = document.getElementById("form"),
  showBookingModal = () => {
    let actionHeading = window.document.getElementById("actionHeading"),
      mapImage = document.getElementById("mapImage"),
      formContainer = document.getElementById("formContainer");

    actionHeading.style.animation = "fadesUp 2s";
    setTimeout(() => {
      formContainer.style.display = "flex";
      formContainer.style.opacity = "1";
      actionHeading.style.display = "none";
    }, 1900);
    mapImage.style.animation = "fadesUp 1.5s";

    setTimeout(() => {
      mapImage.style.display = "none";
    }, 1400);
  },
  getTodaysDat = () => {
    let today = new Date(),
      maxDate = new Date();

    maxDate.setDate(today.getDate() + 30);
    form.departureDate.setAttribute("min", today.toISOString().split("T")[0]);
    form.returnDate.setAttribute("max", maxDate.toISOString().split("T")[0]);
  };

getTodaysDat();
