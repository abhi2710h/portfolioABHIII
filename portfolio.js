// Function to display the ABOUT section
function about() {
    // Hide all sections
    document.getElementById("about11").style.display = "block";
    document.getElementById("services11").style.display = "none";
    document.getElementById("projects11").style.display = "none";
    document.getElementById("contact11").style.display = "none";
    
    // Set the active navigation link
    setActiveLink('a1');
}

// Function to display the SERVICES section
function services() {
    // Hide all sections
    document.getElementById("about11").style.display = "none";
    document.getElementById("services11").style.display = "block";
    document.getElementById("projects11").style.display = "none";
    document.getElementById("contact11").style.display = "none";
    
    // Set the active navigation link
    setActiveLink('a2');
}

// Function to display the PROJECTS section
function projects() {
    // Hide all sections
    document.getElementById("about11").style.display = "none";
    document.getElementById("services11").style.display = "none";
    document.getElementById("projects11").style.display = "block";
    document.getElementById("contact11").style.display = "none";
    
    // Set the active navigation link
    setActiveLink('a3');
}

// Function to display the CONTACT section
function contact() {
    // Hide all sections
    document.getElementById("about11").style.display = "none";
    document.getElementById("services11").style.display = "none";
    document.getElementById("projects11").style.display = "none";
    document.getElementById("contact11").style.display = "block";
    
    // Set the active navigation link
    setActiveLink('a4');
}

// Function to highlight the active navigation link
function setActiveLink(linkId) {
    // Reset the active state for all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    // Add the active class to the selected link
    document.getElementById(linkId).classList.add('active');
}
const submit=document.querySelector("button");
const para=document.getElementById("pp");
function sp(){
    

    para.innerHTML="messege sent successfully";
    setTimeout(function(){
        para.innerHTML="";
    },5000);
    
    
}
submit.addEventListener('click',sp);
