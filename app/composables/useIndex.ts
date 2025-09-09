import type { IndexCardData } from "~/types/indexcard";

export default function useIndex() {

    const hero = ref({
        title: "Zkus chemii!",
        descritpion: "Vydej se s námi na akce, výlety a soustředění, kde se chemie stane součástí tvého života. " +
            "Poznej nové kamarády, se kterými budeš řešit zapeklité úlohy a objevovat svět kolem sebe. Dej chemii šanci a přidej se k nám!",
        links: [{
            label: 'Přejít na seznam',
            to: '/seznam',
            icon: 'i-lucide-rocket',
            color: 'primary',
            size: 'xl'
        },]
    });

    const sections = ref<IndexCardData>([
        {
            icon: "i-lucide-brain",
            short: "Soutěže",
            title: "Chceš soutěžit?",
            subtitle: "Chceš ukázat, že na to máš? Když ji miluješ, vždy je co řešit!",
            action: "Změřit síly",
            link: "/seznam?q=souteze",
            id: "souteze"
        },
        {
            icon: "i-lucide-map",
            short: "Akce",
            title: "Kam se vydat za chemií?",
            subtitle: "Ještě nevíš, jestli se chemii věnovat? Přijď nahlédnout do světa vědy!",
            action: "Nakouknout",
            link: "/seznam?q=akce",
            id: "akce"
        },{
            icon: "i-lucide-university",
            short: "Školy",
            title: "Co po střední?",
            subtitle: "Zajímá tě, kde se dá chemie studovat? Možností máš opravdu hodně...",
            action: "Vybrat si školu",
            link: "/seznam?q=skoly",
            id: "skoly"
        },

    ]);

    return {
        hero,
        sections,
    }

}