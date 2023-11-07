import {booki,ohmyfood,sophie,kasa,bank,events} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const projects = [
  {
    name: "BOOKI",
    description:
      "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.Je suis chargé d'intégrer l'interface du site avec du code HTML et CSS.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "intégration",
        color: "pink-text-gradient",
      },
    ],
    image: booki,
    source_code_link: "https://github.com/0xS4cr/Project_3_BOOKI",
  },
  {
    name: "OH MY FOOD",
    description:
      "OhMyFood, a pour objectif de répertorier les menus de restaurants gastronomiques et d'offrir bien plus qu'un simple système de réservation. Les clients auront la possibilité de composer leur propre menu, et leurs plats seront prêts dès leur arrivée.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "animation_css",
        color: "pink-text-gradient",
      },
    ],
    image: ohmyfood,
    source_code_link: "https://github.com/0xS4cr/Project_4_OHMYFOOD",
  },
  {
    name: "SOPHIE BLUEL",
    description:
      "Dans le cadre de ce projet, j'ai eu l'opportunité passionnante de me consacre à la conception du site portfolio d'une talentueuse architecte d'intérieur.Pour cela j'ai du mettre en place un système de login et modal 🏠✨",
    tags: [
      {
        name: "integration",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: sophie,
    source_code_link: "https://github.com/0xS4cr/Project_6_SOPHIE-BLUEL",
  }, {
    name: "KASA",
    description:
      "Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Le but de se projet est une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.",
    tags: [
      {
        name: "vite_reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: ".json",
        color: "pink-text-gradient",
      },
    ],
    image: kasa,
    source_code_link: "https://github.com/0xS4cr/Project_8_KASA",
  }, {
    name: "724 EVENTS",
    description:
      "Ce projet a eu pour but de reprendre le travail d'un premier dévellopeur, d'analyser le travail effectué de cibler les problèmes auquels le client est confronté. La correction de ces tests et à la mise en place de nouveau test a été la notion principale",
    tags: [
      {
        name: "react_dev_tool",
        color: "blue-text-gradient",
      },
      {
        name: "test_jest",
        color: "green-text-gradient",
      },
      {
        name: "yarn",
        color: "pink-text-gradient",
      },
    ],
    image: events,
    source_code_link: "https://github.com/0xS4cr/Project_10_724-EVENTS",
  }, {
    name: "ARGENT BANK",
    description:
      "Le projet simule mon intégration chez Argent Bank comme développeur front-end. Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire. Je travaille à la mise en place du tableau de bord des utilisateurs.",
    tags: [
      {
        name: "react_redux",
        color: "blue-text-gradient",
      },
      {
        name: "swagger",
        color: "green-text-gradient",
      },
      {
        name: "api_model",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/0xS4cr/Project_11_ARGENT-BANK",
  },
];

export {navLinks, projects };
