// import localeJson from "./locale.json"


// export interface EnglishLocale {

//     navbar_menu: string[],
//     home_title: string,
//     home_title1: string,
//     home_body: string,
//     projects_title: string,
//     about_me_card_body: string,
//     contact_title: string,
//     contact_card_links: string[]


// }
// export interface SpanishLocale extends EnglishLocale { }



// export const EnglishLang = () => {
//     const engJson = localeJson.language.en;

//     const locale: EnglishLocale = {
//         navbar_menu: engJson["navbar-menu"],
//         home_title: engJson["home-card-title"],
//         home_title1: engJson["home-card-title-1"],
//         home_body: engJson["home-card-body"],
//         projects_title: engJson["projects-title"],
//         about_me_card_body: engJson["about-me-card-body"],
//         contact_title: engJson["contact-title"],
//         contact_card_links: engJson["contact-card-links"],
//     }

//     return locale
// }


// export const LangTranslations = (language: string) => {

//     switch (language) {
//         case "en":
//             const engJson = localeJson.language.en

//             const locale: EnglishLocale = {
//                 navbar_menu: engJson["navbar-menu"],
//                 home_title: engJson["home-card-title"],
//                 home_title1: engJson["home-card-title-1"],
//                 home_body: engJson["home-card-body"],
//                 projects_title: engJson["projects-title"],
//                 about_me_card_body: engJson["about-me-card-body"],
//                 contact_title: engJson["contact-title"],
//                 contact_card_links: engJson["contact-card-links"],
//             }
//             return locale


//         case "es":
//             const esJson = localeJson.language.es

//             const eslocale: SpanishLocale = {
//                 navbar_menu: esJson["navbar-menu"],
//                 home_title: esJson["home-card-title"],
//                 home_title1: esJson["home-card-title-1"],
//                 home_body: esJson["home-card-body"],
//                 projects_title: esJson["projects-title"],
//                 about_me_card_body: esJson["about-me-card-body"],
//                 contact_title: esJson["contact-title"],
//                 contact_card_links: esJson["contact-card-links"],
//             }
//             return eslocale






//     }


// }



// export const SpanishLang = () => {

//     const engJson = localeJson.language.es;



//     const locale: SpanishLocale = {
//         navbar_menu: engJson["navbar-menu"],
//         home_title: engJson["home-card-title"],
//         home_title1: engJson["home-card-title-1"],
//         home_body: engJson["home-card-body"],
//         projects_title: engJson["projects-title"],
//         about_me_card_body: engJson["about-me-card-body"],
//         contact_title: engJson["contact-title"],
//         contact_card_links: engJson["contact-card-links"],
//     }

//     return locale

// }