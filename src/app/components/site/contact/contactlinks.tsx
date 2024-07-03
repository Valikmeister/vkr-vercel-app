
enum Contact {
    "mail",
    "github",
    "linkedin"
}

export function ContactLinks(contact: Contact) {


    switch (contact) {

        case 0:

            window.location.href = "mailto:v.kostuykovskiy@gmail.com";

            break;
        case 1:


            window.open("https://github.com/Valikmeister", '_blank')

            break;
        case 2:


            window.open("https://www.linkedin.com/in/valentin-kr/", '_blank')
            break;



    }







}