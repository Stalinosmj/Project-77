document.getElementById("job").onchange = getWorkDetails;
function getWorkDetails() {
    var isWork = this.value
    var workDetails = document.querySelectorAll(".hideWork");
    if (isWork == "Yes") {
        for (const workDetail of workDetails) {
            workDetail.setAttribute("class", "inputbox");
        }
    }
    else if(isWork == "No") {
            for (const workDetail of workDetails) {
                workDetail.setAttribute("class", "hideWork");
            }
    }
}