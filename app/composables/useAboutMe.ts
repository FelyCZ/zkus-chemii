export default function useAboutMe() {

    const aboutMe = ref({
        title: "Něco o mně",
        bio: "Ahoj! Jmenuji se Andrea, studuji na VŠCHT v Praze a zabývám se výzkumem přírodních látek na " +
            "Ústavu organické chemie a biochemie AV ČR. Nadšenec do chemie jsem už dlouho a sama jsem se " +
            "zúčastnila mnoha chemických soutěží a akcí, které se ti teď snažím představit. " +
            "Právě díky nim jsem zjistila, co mě baví a čemu se chci v životě věnovat, " +
            "a získala spoustu zkušeností, zážitků a přátel. Chemie mi zkrátka změnila život " +
            "a možná by ho mohla změnit i tobě. \n" +
            "Kdyby tě cokoliv zajímalo, ozvi se mi – pomůžu nebo propojím s někým kvalifikovanějším. ",
        img: "/image/andy.jpg",
        links: [
            {
                label: 'Napsat mail',
                to: 'mailto:slivovaa@vscht.cz',
                color: 'primary',
                variant: 'subtle',
                icon: 'i-lucide-mail',
            },
            {
                label: 'Napsat na Messengeru',
                to: 'https://m.me/andrea.slivova.56',
                color: 'secondary',
                variant: 'subtle',
                icon: 'i-fa6-brands:facebook-messenger',
                target: '_blank',
            },
        ]
    })

    return {
        aboutMe,
    }
}