//Programmer: Ulada Haranina//


document.addEventListener("DOMContentLoaded", loadedPage); // with this function, script will start work only after DOM content is loaded.

function loadedPage(){


    //Declarate button variable
    let submitBtn = document.getElementById("submit");

    
  //Personal info variables
  let name = document.getElementById("name");
  let role = document.getElementById("role");
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
   let gradDate2 = document.getElementById("edu-dates2");

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

  let softSkill1 = document.getElementById("soft-skills1");
  let softSkill2 = document.getElementById("soft-skills2");
  let softSkill3 = document.getElementById("soft-skills3");
  
  let hardSkill1 = document.getElementById("hard-skills1");
  let hardSkill2 = document.getElementById("hard-skills2");
  let hardSkill3 = document.getElementById("hard-skills3");
    //add Event Listener for click event
    submitBtn.addEventListener ('click', buildResume);

    function buildResume (e){
        e.preventDefault();

        resumePage = ("<html><head><title>Resume</title><body>");
        //Contact section
        resumePage += ("<h1>" + name.value+"<h1><h3>" + role.value + "</h3><h2>Contacts<h2><br><ul><li>" + city.value + ", " + state.value +", " + zip.value + "</li><li>" + phone.value + "</li><li>"+email.value+"</li><li>"+linkedin.value+"</li><li>" + website.value +"</li>");
        resumePage += ("<h2>Profile<h2><p>"+ summary.value +"<p>");

        //Educational section
        resumePage += ("<h2>Education</h2><ul><li>"+ degree1.value +"</li><li>"+ uni1.value +"</li><li>"+ gradDate.value +"</li><li>"+ degree2.value +"</li><li>"+ uni2.value +"</li><li>"+ gradDate2.value +"</li>");

        //Skills section
        resumePage += ("<h2>Skills</h2><h4>Technical</h4><ul><li>"+ hardSkill1.value +"</li><li>"+ hardSkill2.value.value +"</li><li>"+ hardSkill3.value +"</li></ul><h4>Soft</h4><ul><li>"+ softSkill1.value +"</li><li>"+ softSkill2.value.value +"</li><li>"+ softSkill3.value +"</li>");

        //Experience section
        resumePage += ("<h2>Experience</h2><h4>"+position1.value+"<h4><ul><li>" + company1.value + " | " + startJobDate1.value + " - "+ endJobDate1.value + "</li></ul><p>"+details1.value+" "+"Reference: "+ reference1.value+"</p>");
        resumePage += ("<h4>"+position2.value+"<h4><ul><li>" + company2.value + " | " + startJobDate2.value + " - "+ endJobDate2.value + "</li></ul><p>"+details2.value+" "+"Reference: "+ reference2.value+"</p>");
        resumePage += ("<h4>"+position3.value+"<h4><ul><li>" + company3.value + " | " + startJobDate3.value + " - "+ endJobDate3.value + "</li></ul><p>"+details3.value+" "+"Reference: "+ reference3.value+"</p>");
        flyWindow = window.open('about:blank','Resume');
        flyWindow.document.write(resumePage);
    }





}