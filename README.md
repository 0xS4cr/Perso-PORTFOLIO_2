# Portfolio clément RENAUD

Ce portfolio est une vitrine de mes compétences en développement front-end et de mon utilisation de technologies modernes pour créer des expériences utilisateur riches et interactives.

# 🛠 Technologies Utilisées

N'oubliez pas : les technologies ne sont qu'un moyen d'atteindre un objectif. Ce qui compte, c'est l'expérience utilisateur et la valeur que vous pouvez apporter à vos utilisateurs.

## Core Stack

- `React` (v18.2.0) - 🌟 Pour construire une interface utilisateur interactive avec une gestion efficace de l'état et du cycle de vie des composants.
- `Vite` (v4.5.0) - ⚡ Un outil de build moderne qui offre un démarrage rapide et des temps de rechargement ultra-rapides.
- `React Router Dom` (v6.8.1) - 🚦 Pour la gestion des routes dans cette application React mono-page (SPA), permettant une navigation fluide et intuitive.

## Styling and Motion

- `Tailwind CSS` (v3.2.6) - 🎨 Un framework CSS utilitaire pour un design rapide et réactif sans quitter votre HTML.
- `Framer Motion` (v9.0.7) - 💫 Bibliothèque de motion design pour React qui rend les animations et transitions fluides et simples à implémenter.

## 3D and Animation

- `@react-three/fiber` (v8.11.1) et `@react-three/drei` (v9.56.24) - 🌐 Pour intégrer des scènes 3D réactives dans le web avec Three.js, rendant les interactions plus immersives.
- `three` (v0.149.0) - 🎲 Moteur de rendu 3D pour le développement d'effets visuels impressionnants et d'expériences de navigation enrichies.

## Email Integration

- `@emailjs/browser` (v3.10.0) - 📧 Permet d'intégrer facilement l'envoi d'emails directement depuis le front-end sans nécessiter de serveur backend.

## Extra Libraries

- `react-tilt` (v1.0.2) - 📐 Crée un effet de parallaxe/tilt dynamique pour certaines sections, donnant une profondeur subtile à l'interface.
- `maath` (v0.5.2) - 🔢 Une petite bibliothèque pour les calculs mathématiques complexes dans les animations ou la logique spatiale.

## Developer Experience

- `PostCSS` (v8.4.21) et `autoprefixer` (v10.4.13) - 🧰 Permettent de s'assurer que le CSS fonctionne sur différents navigateurs et d'optimiser le CSS pour la production.

Le choix de ces technologies reflète un engagement envers la performance, la maintenabilité et la meilleure expérience utilisateur possible avec une touche de créativité et d'innovation.


🗂 Structure du Projet

Ce projet suit une structure modulaire et organisée, facilitant la navigation et la maintenance du code. Voici un aperçu des répertoires et fichiers principaux :

📁 public
Contient les fichiers accessibles au public, comme l'icône du projet (logo.svg) et le modèle 3D dans le dossier mymodel.

📁 src
Le cœur du code source de l'application se trouve ici, subdivisé en plusieurs sous-dossiers dédiés :

- 🌟 assets
Les ressources statiques telles que les images et les fichiers de style globaux.

- 🏗 components
Les composants réactifs du projet sont organisés en fonction de leur rôle :

🖼 canvas
Pour les composants liés au rendu de l'interface 3D (Model.jsx, Stars.jsx).

🔮 constants
Contient les déclarations de constantes (index.js) pour une gestion centralisée des données immuables.

🚀 hoc
Higher-Order Components (Composants d'ordre supérieur) pour la logique de composition des composants (index.js, SectionWrapper.jsx).

- 🛠 utils
Utilitaires et fonctions d'aide, comme motion.js pour les animations.

- 🎨 App.jsx & index.js
Points d'entrée principaux pour l'application React et la logique de rendu.

- 📄 index.css & styles.js
Feuilles de style globales et modules de style pour le design de l'application.

⚙️ Configuration et Divers
🌐 .env
Fichiers pour les variables d'environnement, gardant les secrets et configurations hors du contrôle de version.

🔧 postcss.config.js, tailwind.config.js, vite.config.js
Fichiers de configuration pour PostCSS, Tailwind CSS et Vite, optimisant le processus de développement et de build.


Cette structure est conçue pour être à la fois intuitive et évolutive, facilitant l'intégration de nouvelles fonctionnalités et technologies.