// change navbar styles on scroll

window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle
   ('window-scroll', window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
   faq.addEventListener('click', () => {
       faq.classList.toggle('open');

       // change icon
       const icon = faq.querySelector('.faq_icon i');
       if(icon.className === 'uil uil-plus') {
           icon.className = "uil uil-minus";
       }else {
           icon.className = "uil uil-plus";
       }
   })
})


const contact = document.getElementById('contact-form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const message = document.getElementById('message')

contact.addEventListener('submit', async(e) =>{
    e.preventDefault()
    try{
        const formData = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            message: message.value
        }
        const response = await fetch('/message/contact', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        console.log('Sucessfull')
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
})


function myFunction() {

    let input, filter, courses, courseInfo, i, txtValue;

    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    courses = document.getElementById("myCourses");

    courseInfo = courses.getElementsByTagName("article");

    for (i = 0; i < courseInfo.length; i++) {

        txtValue = courseInfo[i].getElementsByTagName("h4")[0].textContent || courseInfo[i].getElementsByTagName("h4")[0].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            courseInfo[i].style.display = "";

        } else {

            courseInfo[i].style.display = "none";

        }

    }

}
//     var input, filter, div, i, info, txtValue
//     input = document.getElementById('myInput')
//     filter = input.value.toUpperCase()
//     div = document.getElementById("value")
//      course = document.getElementsByTagName('coursesinfo')

//     for( i=0; i<div.length; i++ ){
//         info = div[i].course.getElementsByTagName("h4")[0];
//         txtValue = info.textContent || arguments.innerText;

//         if(txtValue.toUpperCase().indexOf(filter) > -1){
//             course[i].style.display = ""
//         }
//         else {
//             course[i].style.display = "none"
//         }
//     }
// }
