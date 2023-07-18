function getWorkDetails(isWork) {
    const workDetails = document.querySelectorAll(".hideWork");
    if (isWork.value == "Yes") {
        for (let i = 0; i < workDetails.length; i++) {
            workDetails[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < workDetails.length; i++) {
            workDetails[i].style.display = "none";
        }
    }     
}