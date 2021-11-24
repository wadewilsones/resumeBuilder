//Programmer: Ulada Haranina//


document.addEventListener("DOMContentLoaded", loadedPage); // with this function, script will start work only after DOM content is loaded.

function loadedPage(){

    //Declarate button variable
    let submitBtn = document.getElementById("submit");
    //add Event Listener for click event
    submitBtn.addEventListener ('click', buildResume);

    function buildResume (e){
        e.preventDefault();

        //Personal info variables
        let name = document.getElementById("name");
        let country = document.getElementById("country");
        let state = document.getElementById("state");
        let city = document.getElementById("city");
        let zip = document.getElementById("zip");
        let linkedin = document.getElementById("linkedin");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");
        let website = document.getElementById("site");
        let summary = document.getElementById("summary");

         //Educational info variables

         let uni1 = document.getElementById("uni");
         let degree1 = document.getElementById("degree");
         let gradDate = document.getElementById("edu-dates");
         let uni2 = document.getElementById("uni2");
         let degree2 = document.getElementById("degree2");
         let gradDat2 = document.getElementById("edu-dates2");

        //Experience info variables

        let position1 = document.getElementById("position1");
        let company1 = document.getElementById("company1");
        let startJobDate1 = document.getElementById("start-job-date1");
        let endJobDate1 = document.getElementById("end-job-date1");
        let details1 = document.getElementById("experiense-1");
        let reference1 = document.getElementById("referense-1");

        let position2 = document.getElementById("position2");
        let company2 = document.getElementById("company2");
        let startJobDate2 = document.getElementById("start-job-date2");
        let endJobDate2 = document.getElementById("end-job-date2");
        let details2 = document.getElementById("experiense-2");
        let reference2 = document.getElementById("referense-2");

        let position3 = document.getElementById("position3");
        let company3 = document.getElementById("company3");
        let startJobDate3 = document.getElementById("start-job-date3");
        let endJobDate3 = document.getElementById("end-job-date3");
        let details3 = document.getElementById("experiense-3");
        let reference3 = document.getElementById("referense-3");

        //Skills info variables









    }





}