// noinspection HttpUrlsUsage

import type { ItemCardData } from "~/types/itemcard";

export default function useCards() {

    const competetions = [
        {
            title: "Chemická olympiáda",
            description: "Chceš se zkusit věnovat chemii? Začni Chemickou olympiádou! " +
                "Je ideální pro každého, kdo se chce dozvědět o chemii nad rámec výuky ve škole, " +
                "vyzkoušet si zajímavé laboratorní úlohy a poměřit síly s ostatními studenty z celé České republiky.",
            imgSrc: "/image/cho.jpg",
            imgCaption: "Chemická olympiáda, národní kolo 2025",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://olympiada.vscht.cz/cs/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "individualni",
                "skola",
            ],
            section: "souteze",
        },
        {
            title: "KSICHT",
            subtitle: "Korespondenční seminář inspirovaný chemickou tematikou",
            description: "Jenom další test z chemie? Ani náhodou! KSICHT ti přináší zapeklité chemické úlohy přímo do obýváku. " +
                "Vyřeš je, získej body a za odměnu tě čekají společné výlety nebo letní soustředění plné experimentů a nových přátel.",
            imgSrc: "/image/ksicht.jpg",
            imgCaption: "KSICHT, soustředění 2023",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://ksicht.natur.cuni.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "individualni",
                "korespondencni",
            ],
            section: "souteze",
        },
        {
            title: "ViBuCh",
            subtitle: "Vzdělávací ikurz pro budoucí chemiky",
            description: "Chceš se dozvědět o aktuálních tématech chemického výzkumu? ViBuCh je přesně pro tebe! " +
                "Korespondenční seminář od MUNI plný úloh, které tě budou bavit, a na závěrečném soustředění si všechno vyzkoušíš na vlastní kůži.",
            imgSrc: "/image/vibuch.jpg",
            imgCaption: "ViBuCh",
            imgCaptionLink: "https://vibuch.sci.muni.cz/",
            links: [
                {
                    to: "https://vibuch.sci.muni.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "individualni",
                "korespondencni",
            ],
            section: "souteze",
        },
        {
            title: "Chemiklání",
            description: "Sestav tým a rozjeď to! Chemiklání je rychlá, týmová soutěž mozků z Česka i Slovenska. " +
                "Čekají vás netradiční úlohy, kde rozhodují nejen znalosti, ale i selský rozum, strategie a spolupráce. " +
                "Žádná nadšená parta se soutěživým duchem se tu rozhodně neztratí!",
            imgSrc: "/image/chemiklani_2.jpg",
            imgCaption: "Chemiklání",
            imgCaptionLink: "",
            links: [
                {
                    to: "http://chemiklani.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tymove",
                "zima",
            ],
            section: "souteze",
        },
        {
            title: "ChemQuest",
            description: "Ukaž svoji kreativitu! Navrhni a zrealizuj atraktivní experiment na zadané téma, " +
                "natoč krátké video a nech odbornou porotu i veřejnost rozhodnout. " +
                "Ti nejúspěšnější pak dostanou příležitost svůj pokus předvést naživo ve finále na VŠCHT v Praze. ",
            imgSrc: "/image/chemquest.jpeg",
            imgCaption: "VŠCHT, ChemQuest",
            imgCaptionLink: "https://www.vscht.cz/spoluprace/skoly/pro-zaky/chemquest",
            links: [
                {
                    to: "https://www.vscht.cz/spoluprace/skoly/pro-zaky/chemquest",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tymove",
                "kreativni",
            ],
            section: "souteze",
        },
        {
            title: "Fotosoutěž Svět (je) chemie",
            description: "Máš umělecký cit, originální nápady a smysl pro detail? " +
                "Podívej se na svět kolem sebe hledáčkem chemie a pokus se ji zachytit fotografií!",
            imgSrc: "/image/fotosoutez.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://www.vscht.cz/spoluprace/skoly/pro-zaky/fotosoutez",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "individualni",
                "kreativni",
            ],
            section: "souteze",
        },
        {
            title: "ChemMasters",
            description: "Středoškolská únikovka ChemMasters tě vtáhne do hry plné úkolů a prověří rychlost a týmovou spolupráci. " +
                "Sestav tým, vymysli originální název a přijeď se s ostatními školami utkat o vítězství!",
            imgSrc: "/image/chemmasters.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://www.vscht.cz/spoluprace/skoly/pro-ucitele/chemmasters",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tymove",
                "unikovka",
            ],
            section: "souteze",
        },
        {
            title: "SOČ",
            subtitle: "Středoškolská odborná činnost",
            description: "Máš v hlavě vlastní nápad na experiment nebo projekt? " +
                "SOČka je tvoje šance ho proměnit ve skutečnost! " +
                "Ponoř se do světa opravdové vědy, získej cenné zkušenosti z praxe a ohrom porotu svým vlastním výzkumem.",
            imgSrc: "/image/soc.jpg",
            imgCaption: "SOČ, 47. CP v Teplicích",
            imgCaptionLink: "https://www.soc.cz/fotogalerie-ze-47-cp-soc-v-teplicich/",
            links: [
                {
                    to: "https://www.soc.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "staz",
                "individualni",
            ],
            section: "souteze",
        },
        {
            title: "Otevřená věda",
            description: "Přestaň o vědě jen číst a začni ji dělat! Program Otevřená věda ti umožní stát se na rok " +
                "součástí skutečného vědeckého týmu v Akademii věd. Získej praxi, která ti změní život a rozšíří obzory.",
            imgSrc: "/image/otevrena_veda.jpg",
            imgCaption: "Otevřená věda",
            imgCaptionLink: "https://www.otevrenaveda.cz/cs/staze-pro-studenty/bud-hrdinou-sve-doby/",
            links: [
                {
                    to: "https://www.otevrenaveda.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "staz",
                "individualni",
            ],
            section: "souteze",
        },
        {
            title: "Najdi si vlastní cestu!",
            description: "Zkoušet nové věci někdy není jednoduché, ale vždycky to stojí za to. " +
                "Chemie nabízí víc než jenom soutěže a organizované akce, " +
                "stačí mít odvahu se zeptat a dát svým nápadům šanci. Co za příležitost si vytvoříš ty?",
            imgSrc: "/image/vlastni_cesta.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [

            ],
            badges: [
                "bud_original"
            ],
            section: "souteze",
            highlighted: true,
        },
    ];

    const events = [
        {
            title: "LOS Běstvina",
            description: "Nejlepší letní prázdniny pro chemiky? Jedině Běstvina! " +
                "Čekají tě dva týdny v přírodě nabité přednáškami i experimenty, zábavou, " +
                "a hlavně partou lidí, kteří jsou do chemie stejně zapálení jako ty.",
            imgSrc: "/image/bestvina.jpg",
            imgCaption: "LOS Běstvina 2025",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://www.youtube.com/watch?v=YdXolgocpDM",
                    title: "Video z roku 2019",
                },
                {
                    to: "http://www.bestvina.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "soustredeni",
                "leto",
            ],
            section: "akce",
        },
        {
            title: "Noc vědců",
            description: "Zažij vědu jinak! Už v pátek 26. 9. 2025 se laboratoře " +
                "a posluchárny stovek vědeckých budov otevřou široké veřejnosti. " +
                "Čekají tě velkolepé experimenty, interaktivní workshopy a možnost " +
                "nahlédnout tam, kam se normálně nedostaneš.",
            imgSrc: "/image/noc_vedcu.jpg",
            imgCaption: "Noc vědců",
            imgCaptionLink: "https://www.nocvedcu.cz/o-akci",
            links: [
                {
                    to: "https://www.nocvedcu.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tip_vylet",
                "podzim",
            ],
            section: "akce",
        },
        {
            title: "VědaFest",
            description: "VědaFest spojuje nadšení pro vědu s interaktivními workshopy, přednáškami " +
                "a pokusy pro všechny generace. Poznej rozmanitý svět vědy a bav se!",
            imgSrc: "/image/vedafest.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://www.vedafest.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tip_vylet",
                "leto",
            ],
            section: "akce",
        },
        {
            title: "Veletrh vědy",
            description: "Chceš vidět budoucnost na vlastní oči? Veletrh vědy ti ukáže to nejlepší z českého výzkumu. " +
                "Roboti, lasery, nové materiály a spousta interaktivních exponátů, které si můžeš osahat.",
            imgSrc: "/image/veletrh_vedy.jpg",
            imgCaption: "Veletrh Vědy",
            imgCaptionLink: "https://www.veletrhvedy.cz/cs/press/",
            links: [
                {
                    to: "https://www.veletrhvedy.cz/cs/uvod/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tip_vylet",
                "leto",
            ],
            section: "akce",
        },
        {
            title: "Dny vědy a techniky",
            description: "V pátek 19. září 2025 tě na náměstí Republiky v Plzni budou čekat vědci a vědkyně ze Západočeské univerzity. " +
                "Je připraven nabitý program, tak neváhej a přijď zažít vědu na vlastní kůži!",
            imgSrc: "/image/zcu_dvt.jpg",
            imgCaption: "ZČU, Dny vědy a techniky 2025",
            imgCaptionLink: "https://dnyvedy.zcu.cz/fotogalerie/",
            links: [
                {
                    to: "https://dnyvedy.zcu.cz/plzen-2025/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "tip_vylet",
                "podzim",
            ],
            section: "akce",
        },
        {
            title: "GoHigher",
            description: "Nevíš, co vyzkoušet? Nejsi v tom sám. GoHigher je nejen tvůj rozcestník do světa příležitostí, " +
                "ale hlavně komunita nadaných a aktivních studentů. Spoj se s ostatními a společně využijte svůj potenciál!",
            imgSrc: "/image/gohigher_2.jpg",
            imgCaption: "GoHigher, Café#4 2024",
            imgCaptionLink: "https://www.podporatalentu.cz/fotogalerie/cafe4-7-3-2024/",
            links: [
                {
                    to: "https://www.podporatalentu.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "networking",
                "moznosti",
            ],
            section: "akce",
        },
    ]

    const schools = [
        {
            title: "VŠCHT Praha",
            subtitle: "Vysoká škola chemicko-technologická v Praze",
            description: "Chceš chemii nejen studovat, ale doopravdy dělat? VŠCHT je místo, kde se teorie okamžitě mění v praxi. " +
                "Ať už tě láká vaření piva, vývoj léků nebo nanotechnologie, tady tě připraví na reálnou kariéru.",
            imgSrc: "/image/vscht.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://www.vscht.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "praha",
            ],
            section: "skoly",
        },
        {
            title: "PřF UK",
            subtitle: "Přírodovědecká fakulta Univerzity Karlovy",
            description: "Toužíš po objevech, které mění svět? PřF UK v Praze je ideální pro budoucí vědce, " +
                "kteří chtějí jít za hranice probádaného světa. " +
                "Čeká tě špičkový výzkum, hlavně v oblasti biochemie a medicinální chemie.",
            imgSrc: "/image/prf_uk.jpg",
            imgCaption: "PřF UK, Petr Jan Juračka",
            imgCaptionLink: "",
            links: [
                {
                    to: "https://natur.cuni.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "praha",
            ],
            section: "skoly",
        },
        {
            title: "MUNI",
            subtitle: "Masarykova univerzita v Brně",
            description: "Láká tě věda v té nejmodernější podobě? Vítej na MUNI! " +
                "Moderní kampus, mezioborovost a inovativní prostředí. Tady se tvoří budoucnost.",
            imgSrc: "/image/muni.jpg",
            imgCaption: "SCI MUNI",
            imgCaptionLink: "https://www.sci.muni.cz/o-nas",
            links: [
                {
                    to: "https://www.muni.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "pole",
            ],
            section: "skoly",
        },
        {
            title: "FCHT UPCE",
            subtitle: "Fakulta chemicko-technologická Univerzity Pardubice",
            description: "Hledáš chemii s osobnějším přístupem? Pardubice jsou víc než jen 'dvojka' po VŠCHT. " +
                "Najdeš tu moderní vybavení, unikátní obory a komunitu, kde se neztratíš.",
            imgSrc: "/image/upce_fcht.jpg",
            imgCaption: "FCHT UPCE",
            imgCaptionLink: "https://fcht.upce.cz/fcht/slchpl/historie.html",
            links: [
                {
                    to: "https://studuj.upce.cz/fakulta-chemicko-technologicka",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "pardubice",
            ],
            section: "skoly",
        },
        {
            title: "VUT v Brně",
            subtitle: "Vysoké učení technické v Brně",
            description: "Jsi spíš technik a vynálezce? Na Fakultě chemické VUT v Brně se chemie potkává s inženýrstvím. " +
                "Můžeš vyvíjet a testovat třeba materiály budoucnosti – od bioplastů přes chytré nátěry až po součástky pro medicínu.",
            imgSrc: "/image/vut.jpg",
            imgCaption: "FCH VUT, DOD a Den chemie 2024",
            imgCaptionLink: "https://www.fch.vut.cz/fakulta/fotogalerie",
            links: [
                {
                    to: "https://www.fch.vut.cz/",
                    title: "Webová stránka",
                },
            ],
            badges: [
                "pole",
            ],
            section: "skoly",
        },
        {
            title: "… a mnohem víc!",
            description: "Existuje spousta menších fakult a škol, které se do přehledu nevešly, " +
                "což ale neznamená, že nestojí za pozornost. A rozhodně se neboj přemýšlet i za hranice!",
            imgSrc: "/image/skoly.jpg",
            imgCaption: "Archiv VŠCHT Praha",
            imgCaptionLink: "",
            links: [

            ],
            badges: [
                "kamkoli",
            ],
            section: "skoly",
            highlighted: true,
        },
    ];

    const items = ref<ItemCardData[]>([
        ...competetions,
        ...events,
        ...schools,
    ])

    return {
        items
    }
}