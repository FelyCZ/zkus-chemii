import type { ItemCardData } from "~/types/itemcard";

export default function useCards() {

    const cards = ref<ItemCardData[]>([
        {
            title: "LOS Běstvina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisi nisl tincidunt nisl, eget tincidunt nisl nisl eget tincidunt nisl.",
            imgSrc: "https://www.zaghorice.cz/wp-content/uploads/2023/08/IMG-20230825-WA0058.jpg",
            links: [
                {
                    to: "/link",
                    title: "Něco jiného...",
                },
                {
                    to: "/link",
                    title: "Webová stránka",
                },
            ],
            icon: "i-heroicons-home",
            color: "primary"
        },
        {
            title: "LOS Běstvina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisi nisl tincidunt nisl, eget tincidunt nisl nisl eget tincidunt nisl.",
            imgSrc: "https://www.zaghorice.cz/wp-content/uploads/2023/08/IMG-20230825-WA0058.jpg",
            links: [
                {
                    to: "/link",
                    title: "Něco jiného...",
                },
                {
                    to: "/link",
                    title: "Webová stránka",
                },
            ],
            icon: "i-heroicons-home",
            color: "primary"
        },
        {
            title: "LOS Běstvina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisi nisl tincidunt nisl, eget tincidunt nisl nisl eget tincidunt nisl.",
            imgSrc: "https://www.zaghorice.cz/wp-content/uploads/2023/08/IMG-20230825-WA0058.jpg",
            links: [
                {
                    to: "/link",
                    title: "Něco jiného...",
                },
                {
                    to: "/link",
                    title: "Webová stránka",
                },
            ],
            icon: "i-heroicons-home",
            color: "primary"
        },
        {
            title: "LOS Běstvina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisi nisl tincidunt nisl, eget tincidunt nisl nisl eget tincidunt nisl.",
            imgSrc: "https://www.zaghorice.cz/wp-content/uploads/2023/08/IMG-20230825-WA0058.jpg",
            links: [
                {
                    to: "/link",
                    title: "Něco jiného...",
                },
                {
                    to: "/link",
                    title: "Webová stránka",
                },
            ],
            icon: "i-heroicons-home",
            color: "primary"
        },
        {
            title: "LOS Běstvina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget tincidunt condimentum, nisi nisl tincidunt nisl, eget tincidunt nisl nisl eget tincidunt nisl.",
            imgSrc: "https://www.zaghorice.cz/wp-content/uploads/2023/08/IMG-20230825-WA0058.jpg",
            links: [
                {
                    to: "/link2",
                    title: "Něco jiného...",
                },
                {
                    to: "/link2",
                    title: "Webová stránka",
                },
            ],
            icon: "i-heroicons-home",
            color: "primary"
        },
    ])

    return {
        cards
    }
}