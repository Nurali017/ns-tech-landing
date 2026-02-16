export type Locale = 'en' | 'kz';

export const content = {
    en: {
        hero: {
            badge: "New level of digital sports",
            title: "We build digital sports infrastructure",
            subtitle: "From mobile apps to full-scale platforms — NS TECH creates technology that moves sport forward in Kazakhstan and Central Asia",
            ctaPrimary: "Download App",
            ctaSecondary: "Learn More",
            stats: {
                gyms: "Gyms & Studios",
                sports: "Sports Types",
                installments: "First Payment"
            }
        },
        about: {
            title: "About Us",
            description: "NS TECH is a technology company based in Astana, Kazakhstan. We specialize in sports technology platforms and custom IT solutions. Our flagship product MiniFootball is the largest amateur football platform in Kazakhstan."
        },
        stats: {
            players: "Players",
            teams: "Teams",
            tournaments: "Tournaments",
            apps: "Apps"
        },
        minifootball: {
            title: "MiniFootball — the #1 amateur football platform in Kazakhstan",
            description: "All-in-one platform for players, teams, and tournament organizers. Create teams, join tournaments, track live scores, view player statistics, and manage leagues — all from your phone.",
            features: [
                "Team management",
                "Tournament brackets & scheduling",
                "Live scores",
                "Player statistics & ratings",
                "Referee tools",
                "League management"
            ],
            apps: [
                "MiniFootball (main app)",
                "Futsal Kazakhstan",
                "Ulttyq Sport",
                "Bag Liga"
            ],
            downloadLink: "https://onelink.to/zp8bhh",
            screenshots: {
                matchDetail: {
                    src: "/images/minifootball-match-detail.jpg",
                    alt: "MiniFootball Match Details"
                },
                teamProfile: {
                    src: "/images/minifootball-team-profile.jpg",
                    alt: "MiniFootball Team Profile"
                },
                matchFeed: {
                    src: "/images/minifootball-match-feed.jpg",
                    alt: "MiniFootball Match Feed"
                },
                playerProfile: {
                    src: "/images/minifootball-player-profile.jpg",
                    alt: "MiniFootball Player Profile"
                }
            }
        },
        services: {
            title: "Custom software development for businesses",
            list: [
                "Web Development",
                "Mobile Apps (iOS & Android)",
                "IT Infrastructure",
                "Google Workspace Integration"
            ],
            techStack: "Tech stack: Flutter, Firebase, Node.js, Google Cloud",
            clientsTitle: "Clients & Portfolio",
            portfolio: {
                kffleague: {
                    name: "KFF League",
                    url: "https://kffleague.kz",
                    description: "Digital platform for Kazakhstan Football Federation league statistics",
                    screenshots: [
                        {
                            src: "/images/kffleague-team-page.png",
                            alt: "KFF League Team Page",
                            caption: "Team dashboard with player cards and stats"
                        },
                        {
                            src: "/images/kffleague-player-profile.png",
                            alt: "KFF League Player Profile",
                            caption: "Detailed player statistics and profile"
                        },
                        {
                            src: "/images/kffleague-league-stats.png",
                            alt: "KFF League Statistics",
                            caption: "League standings, charts, and club rankings"
                        }
                    ]
                },
                kaysar: {
                    name: "FC Kaysar",
                    url: "https://kaysar.kz",
                    description: "Official website for FC Kaysar football club",
                    screenshots: [
                        {
                            src: "/images/kaysar-news-page.png",
                            alt: "FC Kaysar News Page",
                            caption: "Club news and announcements"
                        },
                        {
                            src: "/images/kaysar-navigation.png",
                            alt: "FC Kaysar Navigation",
                            caption: "Full Kazakh language support"
                        },
                        {
                            src: "/images/kaysar-team-stats.png",
                            alt: "FC Kaysar Team Statistics",
                            caption: "2025 season statistics and performance charts"
                        }
                    ]
                },
                kmff: {
                    name: "KMFF",
                    url: "https://kmff.kz",
                    description: "Kazakhstan Mini-Football Federation platform",
                    screenshots: [
                        {
                            src: "/images/kmff-homepage.png",
                            alt: "KMFF Homepage",
                            caption: "Tournament standings, news, and top scorers"
                        },
                        {
                            src: "/images/kmff-hall-of-fame.png",
                            alt: "KMFF Hall of Fame",
                            caption: "Champions and prize winners history"
                        }
                    ]
                }
            }
        },
        footer: {
            company: "Company",
            links: ["About Us", "Blog", "Contacts", "Careers"],
            partners: "Partners",
            partnerLinks: ["Become a Partner", "Login", "Integration"],
            download: "Download App",
            rights: "© 2026 NS TECH. All rights reserved.",
            legal: ["Privacy Policy", "Public Offer"]
        }
    },
    kz: {
        hero: {
            badge: "Цифрлық спорттың жаңа деңгейі",
            title: "Біз цифрлық спорт инфрақұрылымын құрамыз",
            subtitle: "Мобильді қосымшалардан толыққанды платформаларға дейін — NS TECH Қазақстан мен Орталық Азияда спортты алға жылжытатын технологиялар жасайды",
            ctaPrimary: "Қосымшаны жүктеу",
            ctaSecondary: "Толығырақ",
            stats: {
                gyms: "Залдар мен студиялар",
                sports: "Спорт түрлері",
                installments: "Алғашқы жарна"
            }
        },
        about: {
            title: "Біз туралы",
            description: "NS TECH — Астана қаласында орналасқан технологиялық компания. Біз спорттық технология платформалары мен IT-шешімдерге маманданамыз. Біздің негізгі өнім MiniFootball — Қазақстандағы ең ірі әуесқой футбол платформасы."
        },
        stats: {
            players: "Ойыншылар",
            teams: "Командалар",
            tournaments: "Турнирлер",
            apps: "Қосымшалар"
        },
        minifootball: {
            title: "MiniFootball — Қазақстандағы №1 әуесқой футбол платформасы",
            description: "Ойыншылар, командалар және турнир ұйымдастырушыларға арналған бірыңғай платформа. Команда құрыңыз, турнирлерге қатысыңыз, тікелей нәтижелерді қадағалаңыз, ойыншылар статистикасын қараңыз және лигаларды басқарыңыз — барлығы телефоныңыздан.",
            features: [
                "Команданы басқару",
                "Турнир кестесі",
                "Тікелей нәтижелер",
                "Ойыншылар статистикасы мен рейтингі",
                "Төрешілерге арналған құралдар",
                "Лига басқару"
            ],
            apps: [
                "MiniFootball (негізгі қосымша)",
                "Futsal Kazakhstan",
                "Ulttyq Sport",
                "Bag Liga"
            ],
            downloadLink: "https://onelink.to/zp8bhh",
            screenshots: {
                matchDetail: {
                    src: "/images/minifootball-match-detail.jpg",
                    alt: "MiniFootball матч мәліметтері"
                },
                teamProfile: {
                    src: "/images/minifootball-team-profile.jpg",
                    alt: "MiniFootball команда профилі"
                },
                matchFeed: {
                    src: "/images/minifootball-match-feed.jpg",
                    alt: "MiniFootball матч нәтижелері"
                },
                playerProfile: {
                    src: "/images/minifootball-player-profile.jpg",
                    alt: "MiniFootball ойыншы профилі"
                }
            }
        },
        services: {
            title: "Бизнеске арналған бағдарламалық қамтамасыз ету",
            list: [
                "Веб-әзірлеу",
                "Мобильді қосымшалар",
                "IT-инфрақұрылым",
                "Google Workspace интеграциясы"
            ],
            techStack: "Технологиялар: Flutter, Firebase, Node.js, Google Cloud",
            clientsTitle: "Клиенттер мен портфолио",
            portfolio: {
                kffleague: {
                    name: "KFF League",
                    url: "https://kffleague.kz",
                    description: "Қазақстан Футбол Федерациясы лигасының цифрлық платформасы",
                    screenshots: [
                        {
                            src: "/images/kffleague-team-page.png",
                            alt: "KFF League команда беті",
                            caption: "Ойыншылар карточкалары мен статистикасы бар команда тақтасы"
                        },
                        {
                            src: "/images/kffleague-player-profile.png",
                            alt: "KFF League ойыншы профилі",
                            caption: "Ойыншының толық статистикасы мен профилі"
                        },
                        {
                            src: "/images/kffleague-league-stats.png",
                            alt: "KFF League статистикасы",
                            caption: "Лига кестесі, диаграммалар және клуб рейтингтері"
                        }
                    ]
                },
                kaysar: {
                    name: "FC Kaysar",
                    url: "https://kaysar.kz",
                    description: "ФК Қайсар футбол клубының ресми сайты",
                    screenshots: [
                        {
                            src: "/images/kaysar-news-page.png",
                            alt: "ФК Қайсар жаңалықтар беті",
                            caption: "Клуб жаңалықтары мен хабарландырулар"
                        },
                        {
                            src: "/images/kaysar-navigation.png",
                            alt: "ФК Қайсар навигация",
                            caption: "Қазақ тілін толық қолдайтын сайт навигациясы"
                        },
                        {
                            src: "/images/kaysar-team-stats.png",
                            alt: "ФК Қайсар команда статистикасы",
                            caption: "2025 маусым статистикасы мен нәтижелер диаграммалары"
                        }
                    ]
                },
                kmff: {
                    name: "KMFF",
                    url: "https://kmff.kz",
                    description: "Қазақстан Шағын Футбол Федерациясы платформасы",
                    screenshots: [
                        {
                            src: "/images/kmff-homepage.png",
                            alt: "KMFF басты бет",
                            caption: "Турнир кестесі, жаңалықтар және бомбардирлер"
                        },
                        {
                            src: "/images/kmff-hall-of-fame.png",
                            alt: "KMFF Даңқ залы",
                            caption: "Чемпиондар мен жүлдегерлер тарихы"
                        }
                    ]
                }
            }
        },
        footer: {
            company: "Компания",
            links: ["Біз туралы", "Блог", "Байланыс", "Карьера"],
            partners: "Серіктестерге",
            partnerLinks: ["Серіктес болу", "Кабинетке кіру", "Интеграция"],
            download: "Қосымшаны жүктеу",
            rights: "© 2026 NS TECH. Барлық құқықтар қорғалған.",
            legal: ["Құпиялылық саясаты", "Жария оферта"]
        }
    }
};
