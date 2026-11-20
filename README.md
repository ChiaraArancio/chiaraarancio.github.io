# Portfolio — Chiara Arancio

Site vitrine statique de **Chiara Arancio**, designer UX/UI en Mastère à l'ECV Bordeaux.
Il reprend la maquette fournie dans `Portfolio.pdf` : fond blanc, triangle et accents
lavande, titres en Bodoni Moda, textes en Sora, bandeaux défilants et projets présentés
sous forme de grandes compositions verticales.

Le portfolio réunit aujourd'hui **huit projets** : Bookly, L'Arcada, Luminae, le logo
de mariage de Marion & Alexandre, Chang Tea, le motion design Sunshine, l'affiche
Illusion et le challenge Daily UI. Chaque projet peut contenir plusieurs images,
consultables dans une galerie horizontale.

Le site est **autonome** : polices, images, vidéos et documents sont dans le dossier
`assets/`. Aucune connexion à un service extérieur n'est nécessaire, sauf pour ouvrir
les prototypes Figma, la vidéo ou LinkedIn.

---

## Lancer le site

### Le plus simple

Double-cliquez sur `index.html`. Le site s'ouvre dans le navigateur et tout fonctionne,
même sans serveur.

### Avec un petit serveur local (recommandé)

```bash
cd ~/Desktop/Chiara_Portfolio_Web
python3 -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000> dans votre navigateur.

Aucune installation, aucun build, aucune bibliothèque : c'est du HTML, du CSS et du
JavaScript natifs.

---

## Structure du projet

```text
Chiara_Portfolio_Web/
├── index.html                       Structure de la page
├── assets/
│   ├── images/
│   │   ├── bookly/                  Couverture + écrans du site
│   │   ├── arcada/                  Couverture + planches de l'identité
│   │   ├── luminae/                 Couverture + écrans du site
│   │   ├── mariage/                 Logo, gobelets et couverture
│   │   ├── chang-tea/               Logos, stickers, packaging, charte
│   │   ├── sunshine/                Images clés du motion design
│   │   ├── illusion/                Affiche Illusion
│   │   ├── daily-ui/                Sélection de semaines (moodboard)
│   │   └── profile/                 Portrait de Chiara
│   ├── videos/
│   │   └── Sunshine_Playlist.mp4    Motion design complet
│   ├── documents/
│   │   ├── CV_Chiara_Arancio.pdf    CV le plus récent
│   │   ├── LArcada_Presentation.pdf
│   │   └── ChangTea_Presentation.pdf
│   ├── fonts/                       Bodoni Moda + Sora (fichiers .woff2)
│   └── icons/favicon.svg
├── css/
│   ├── fonts.css                    Polices intégrées (fichiers .woff2 en base64)
│   └── style.css                    Tout le design et le responsive
├── js/
│   ├── projects.js                  ← DONNÉES DES PROJETS (à modifier)
│   └── main.js                      Génération des projets et des galeries
└── README.md
```

---

## Ajouter ou modifier un projet

Tout se passe dans **`js/projects.js`**. Aucun autre fichier n'est à modifier.

### 1. Préparer les images

Créez un dossier dans `assets/images/`, par exemple :

```text
assets/images/mon-projet/cover.jpg
assets/images/mon-projet/image-02.jpg
```

Les images sont affichées **entièrement**, sans étirement ni recadrage : chaque
diapositive conserve son ratio d'origine (`object-fit: contain`). Les images verticales
prennent moins de largeur, ce qui permet d'en voir plusieurs à la fois dans la galerie.

### 2. Dupliquer un bloc dans `js/projects.js`

Copiez un projet existant, de `{` jusqu'à `},`, puis collez-le à la fin du tableau
`PROJECTS`, avant le `];` final. Modifiez les champs :

```js
{
  id: "mon-projet",                       // identifiant unique, sans espace
  name: "Mon projet",                     // nom complet (accessibilité, liens)
  title: "Projet",                        // facultatif : titre vertical court
  meta: "3ᵉ année de Bachelor · ECV Bordeaux",
  description: [
    "Premier paragraphe.",
    "Deuxième paragraphe.",
  ],
  images: [
    {
      src: "assets/images/mon-projet/cover.jpg",
      alt: "Description de l'image pour l'accessibilité.",
      width: 1600,
      height: 1000,
    },
    {
      src: "assets/images/mon-projet/image-02.jpg",
      alt: "Description de la deuxième image.",
      width: 1200,
      height: 1600,
    },
  ],
  links: {
    desktop: {
      label: "Voir le prototype",
      url: "https://www.figma.com/proto/...",
      external: true,
    },
    mobile: {
      label: "Voir le prototype mobile",
      url: "https://www.figma.com/proto/...",
      external: true,
    },
    pdf: {
      label: "Voir le pdf",
      url: "assets/documents/mon-document.pdf",
      external: true,
    },
    video: {
      label: "Voir le motion design",
      url: "assets/videos/ma-video.mp4",
      external: true,
    },
    linkedin: {
      label: "Voir sur LinkedIn",
      url: "https://www.linkedin.com/in/chiara-arancio-ab92a8295/",
      external: true,
    },
  },
  titleSize: 130,                         // facultatif
  titleSpacing: "0.02em",                 // facultatif
  portrait: false,                        // facultatif : true pour une affiche verticale
  moodboard: false,                       // facultatif : true pour un collage d'images
},
```

- `description` accepte autant de paragraphes que nécessaire.
- `images` accepte une ou plusieurs images. **Toutes** apparaissent dans la galerie
  défilante ; la première est l'image d'ouverture.
- `width` et `height` doivent correspondre aux dimensions réelles du fichier : ils
  servent à calculer la largeur de la diapositive tout en conservant le ratio de
  l'image.
- `title` est utile quand le nom complet est trop long pour le grand titre vertical
  (par exemple « Mariage Marion & Alexandre » → titre vertical « Mariage »).
- `links` est facultatif : supprimez les liens dont le projet n'a pas besoin. Les clés
  reconnues sont `desktop`, `mobile`, `pdf`, `video` et `linkedin`.
- `titleSize` permet d'agrandir ou de réduire le titre vertical pour qu'il remplisse
  bien la hauteur de l'image. `titleSpacing` ajuste l'espacement des lettres.
- `portrait: true` donne à la galerie un cadre vertical, adapté aux affiches. C'est le
  cas du projet Illusion.
- `moodboard: true` présente les images en collage fixe, sans flèches ni défilement.
  C'est le cas du projet Daily UI.
- Les liens avec `external: true` s'ouvrent dans un nouvel onglet.

### 3. Recharger la page

Enregistrez `js/projects.js`, puis actualisez le navigateur. Le projet apparaît
automatiquement, dans l'ordre du tableau.

### Supprimer un projet

Supprimez tout son bloc `{ ... },` dans `js/projects.js`.

---

## La galerie défilante

Chaque projet avec plusieurs images affiche une galerie horizontale dans le grand cadre :

- **Souris / trackpad** : faites défiler horizontalement.
- **Mobile** : faites glisser avec le doigt.
- **Boutons ← et →** : passent d'une image à l'autre.
- **Compteur** : indique la position dans la galerie.
- **Clavier** : placez le focus sur la galerie et utilisez les flèches gauche et droite.

Les images ne sont ni étirées ni recadrées. Elles sont dimensionnées en fonction de leur
ratio et de la hauteur du cadre. Les boutons et le compteur disparaissent quand une seule
image est présente.

Le projet **Daily UI** fait exception : il utilise un grand **moodboard** fixe (collage
de cinq images), avec seulement le texte de présentation du challenge — repris de
l’explication du challenge Daily UI — et un lien LinkedIn. Pour ce type de présentation,
utilisez `moodboard: true`.

---

## Modifier le CV, le contact, LinkedIn ou les textes

- **CV** : remplacez `assets/documents/CV_Chiara_Arancio.pdf` par le nouveau PDF en
  conservant exactement le même nom de fichier. Le bouton `CV` pointe déjà dessus.
  Le CV actuellement intégré est la version « Master UX/UI Design » la plus récente.
- **Contact** : l'adresse `chiaraarancio05@gmail.com` se trouve dans `index.html`
  (triangle « Contact » et pied de page). Le lien utilise `mailto:` et ouvre le
  logiciel de messagerie avec le destinataire prérempli.
- **LinkedIn** : le profil `https://www.linkedin.com/in/chiara-arancio-ab92a8295/` est
  présent dans le pied de page et dans le projet Daily UI. Il permet de retrouver
  l'ensemble du challenge Daily UI.
- **Textes de l'accueil** : dans `index.html`, section « Mon parcours ».
- **Textes des projets** : dans `js/projects.js`, champ `description`.
- **Liens Figma** : dans `js/projects.js`, champs `links.desktop` et `links.mobile`.
  Les URL fournies sont conservées à l'identique, avec tous leurs paramètres.
  Le lien principal « Voir le prototype » ouvre la version ordinateur ; le lien
  « Voir le prototype mobile » ouvre la version mobile.

---

## Design

| Élément | Valeur |
| --- | --- |
| Fond | `#ffffff` |
| Violet | `#7b7ca5` |
| Lavande (bandeaux, surlignages) | `#f6f7ff` |
| Texte | `#000000` |
| Titres | Bodoni Moda |
| Textes, navigation, titres verticaux | Sora |
| Taille des paragraphes | 17 px sur ordinateur, 14 px sur mobile |
| Largeur | 100 % de la fenêtre, sans marges latérales |
| Points de rupture | 1100 px, 900 px, 760 px, 360 px |

Les polices `.woff2` sont conservées dans `assets/fonts/`. Elles sont également intégrées
en base64 dans `css/fonts.css` : le site garde ainsi ses typographies lorsqu'on
double-clique sur `index.html`, sans passer par un serveur local.

Le bandeau défilant reprend exactement les termes de la maquette : **UX/UI,
Logotypes, Prototypages, Print, Graphiste, Wireframe**. L'animation est continue et
se met en pause automatiquement si le système demande de réduire les mouvements
(`prefers-reduced-motion`).

Les textes des trois projets d'origine proviennent de la maquette. Les textes des
nouveaux projets reprennent les descriptions des ressources locales lorsqu'elles
existaient, avec les corrections orthographiques et typographiques nécessaires.

---

## Vérifications effectuées

- Affichage comparé à la maquette aux largeurs 1512, 1440, 1024, 768, 390 et 320 px.
- Aucun débordement horizontal.
- Galeries testées aux mêmes largeurs : défilement natif, boutons, compteur, clavier.
- Moodboard Daily UI testé aux mêmes largeurs : collage fixe, cinq images, LinkedIn.
- Bouton CV : ouverture du PDF dans un nouvel onglet.
- Bouton Contact : ouverture de la messagerie avec `chiaraarancio05@gmail.com`.
- Liens Bookly : prototype ordinateur et prototype mobile distincts.
- Liens Luminae : prototype ordinateur et prototype mobile distincts.
- Bouton « Voir le pdf » de L'Arcada : ouverture de la présentation PDF.
- Bouton « Voir le pdf » de Chang Tea : ouverture de la présentation PDF.
- Lien « Voir le motion design » : ouverture de la vidéo Sunshine.
- Lien LinkedIn présent dans le pied de page et dans Daily UI.
- Bandeau défilant fluide sur ordinateur et mobile.
- Audit d'accessibilité axe-core sans violation.
- Absence d'erreur JavaScript et de ressource manquante.
