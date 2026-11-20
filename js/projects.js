/* ==========================================================================
   DONNÉES DES PROJETS
   ==========================================================================

   C'est le seul fichier à modifier pour ajouter, supprimer ou mettre à jour
   un projet. La page se construit automatiquement à partir de ce tableau :
   il n'y a aucune structure HTML à recopier.

   POUR AJOUTER UN PROJET
   1. Copiez un bloc complet { ... } ci-dessous (de « { » à « }, »).
   2. Collez-le à la fin du tableau PROJECTS, juste avant le « ]; » final.
   3. Modifiez ses informations : nom, texte, images et liens.
   4. Enregistrez le fichier, puis rechargez la page dans le navigateur.

   CHAMPS DISPONIBLES
   - id ............. identifiant unique, sans accent ni espace
   - name ........... nom complet du projet (sert aussi aux libellés accessibles)
   - title .......... nom affiché dans le grand titre vertical (facultatif ;
                      utile si le nom complet est trop long)
   - meta ........... catégorie / contexte : petite ligne au-dessus du texte
                      (école, année, type de projet)
   - description .... tableau de paragraphes ; chaque texte entre guillemets
   - images ......... tableau d'images. Toutes les images sont affichées dans
                      la galerie défilante du projet ; la première est l'image
                      d'ouverture. Placez les fichiers dans
                      assets/images/<projet>/ et indiquez le chemin depuis
                      index.html. Les champs width et height doivent reprendre
                      les dimensions réelles du fichier : ils servent à
                      conserver le bon ratio dans la galerie.
   - portrait ....... true si la galerie doit adopter un cadre vertical
                      (affiche, poster). Facultatif.
   - moodboard ...... true pour présenter les images en collage fixe
                      (Daily UI), au lieu de la galerie défilante. Facultatif.
   - links .......... liens affichés sous le texte :
                      desktop  = prototype ordinateur
                      mobile   = prototype mobile
                      pdf      = document PDF
                      video    = vidéo / motion design
                      linkedin = profil LinkedIn
                      Chaque lien accepte : label, url, external (true/false).
   - titleSize ...... (facultatif) taille du titre vertical en px, 130 par défaut
   - titleSpacing ... (facultatif) espacement des lettres du titre vertical

   IMPORTANT POUR LES LIENS FIGMA
   Conservez les URL complètes, avec tous leurs paramètres. Le lien
   « desktop » ouvre le prototype ordinateur, le lien « mobile » ouvre le
   prototype mobile. Ils s'ouvrent dans un nouvel onglet.

   POUR SUPPRIMER UN PROJET
   Supprimez tout son bloc { ... }, y compris la virgule qui le suit.
   ========================================================================== */

const PROJECTS = [
  {
    id: "bookly",
    name: "Bookly",
    meta: "Projet de fin de Bachelor Conception UI · ECV Digital Bordeaux · 2025–2026 · solo",
    description: [
      "Le problème : les lecteurs de fantasy, fantastique et science-fiction ne cherchent pas seulement un genre, mais une ambiance, une émotion, un trope. Les plateformes existantes (Goodreads, Babelio, Booknode) gèrent bien la bibliothèque, mais restent datées, peu immersives et génériques dans leurs recommandations.",
      "La démarche : deux questionnaires diffusés dans des communautés de lecteurs, un benchmark des trois plateformes concurrentes et quatre personas. Le public identifié est majoritairement âgé de 18 à 25 ans, lit 1 à 3 livres par mois et découvre ses lectures sur Instagram, TikTok, auprès de ses amis et en librairie.",
      "La solution : une plateforme communautaire pensée mobile first, avec accueil-hub, recherche par émotions (joie, colère, tristesse, amour, dégoût, peur), recherche par genres et tropes, fiches livres enrichies, « Ma Biblio » et blog éditorial.",
      "La fabrication : zoning, wireframes, maquettes Figma mobile et desktop, prototypes, puis intégration Webflow avec composants réutilisables, CMS et base SEO.",
      "Le résultat : un site en ligne et fonctionnel, complété par un blog, du motion design, un zine imprimé et des posts réseaux sociaux. Un projet mené seule de la recherche à la mise en production.",
    ],
    images: [
      {
        src: "assets/images/bookly/bookly-cover.jpg",
        alt: "Page d’accueil du site Bookly : « Bienvenue sur Bookly », le livre du moment et une bibliothèque en arrière-plan.",
        width: 2000,
        height: 1250,
      },
      {
        src: "assets/images/bookly/bookly-screen-01.jpg",
        alt: "Recommandations de livres et genres de l’imaginaire sur Bookly.",
        width: 2000,
        height: 1250,
      },
      {
        src: "assets/images/bookly/bookly-screen-02.jpg",
        alt: "Section des sorties à venir et entrée vers la recherche par émotions sur Bookly.",
        width: 2000,
        height: 1250,
      },
      {
        src: "assets/images/bookly/bookly-screen-03.jpg",
        alt: "Recherche par émotions et auteurs favoris sur Bookly.",
        width: 2000,
        height: 1250,
      },
      {
        src: "assets/images/bookly/bookly-screen-05.jpg",
        alt: "Version mobile de Bookly avec la navigation simplifiée.",
        width: 780,
        height: 1688,
      },
    ],
    links: {
      desktop: {
        label: "Voir le prototype",
        url: "https://www.figma.com/proto/98ylyl5rb7Z47xlYyu8KOr/Bookly?node-id=98-7147&viewport=648%2C225%2C0.03&t=BlYmXU9pAkiuMIWZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=336%3A9302&page-id=98%3A6714",
        external: true,
      },
      mobile: {
        label: "Voir le prototype mobile",
        url: "https://www.figma.com/proto/98ylyl5rb7Z47xlYyu8KOr/Bookly?node-id=1-520&viewport=449%2C157%2C0.19&t=4Vqiun3YefQBYszZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A275&page-id=0%3A1",
        external: true,
      },
    },
    titleSize: 120,
    titleSpacing: "0.049em",
  },

  {
    id: "arcada",
    name: "L’Arcada",
    meta: "3ᵉ année de Bachelor · ECV Bordeaux",
    description: [
      "Le projet : repenser le logo et l’identité visuelle du restaurant L’Arcada, bistrot gastronomique bordelais, tout en conservant ses éléments emblématiques : le nom, le bleu et la baseline « Le Bistrot Gastronomique ».",
      "La démarche : moodboard autour des arches, d’une typographie sérif élégante et d’un bleu profond rehaussé d’or, puis croquis papier et trois premières propositions. Le logotype final reprend une sérif aux formes arrondies, avec l’apostrophe stylisée en arche et une arche intégrée au « A ». Un monogramme « A » est également créé.",
      "La charte : palette bleu #005bad, jaune pâle #f4eda5, bleu nuit #092146, blanc et noir ; typographies Rafgins (logo et titres) et Caviar Dreams (baseline et textes) ; zones de sécurité, déclinaisons et usages proscrits. L’arche devient l’élément graphique récurrent, décliné en motif rosace.",
      "Les applications : devanture, cartes de visite, menu A4 allongé (déjeuner/dîner) et chemises des employés.",
      "Le livrable : une présentation PDF de 32 pages détaillant le brief, le processus créatif, le logotype, la charte et les mockups.",
    ],
    images: [
      {
        src: "assets/images/arcada/arcada-cover.jpg",
        alt: "Devanture bleue du restaurant L’Arcada avec son nouveau logo sur la façade.",
        width: 1800,
        height: 1200,
      },
      {
        src: "assets/images/arcada/arcada-logo.jpg",
        alt: "Planche de présentation du logotype final L’Arcada, en bleu nuit et doré.",
        width: 1400,
        height: 788,
      },
      {
        src: "assets/images/arcada/arcada-declinaisons.jpg",
        alt: "Déclinaisons du logo L’Arcada sur différents supports et fonds.",
        width: 1400,
        height: 788,
      },
      {
        src: "assets/images/arcada/arcada-devanture.jpg",
        alt: "Mise en situation du logo L’Arcada sur la devanture du restaurant.",
        width: 1400,
        height: 788,
      },
      {
        src: "assets/images/arcada/arcada-cartes.jpg",
        alt: "Cartes de visite de L’Arcada imprimées avec le nouveau logotype.",
        width: 1400,
        height: 788,
      },
    ],
    links: {
      pdf: {
        label: "Voir le pdf",
        url: "assets/documents/LArcada_Presentation.pdf",
        external: true,
      },
    },
    titleSize: 115,
    titleSpacing: "-0.054em",
  },

  {
    id: "luminae",
    name: "Luminae",
    meta: "3ᵉ année de Bachelor · ECV Bordeaux",
    description: [
      "Le projet : concevoir de A à Z la maquette du site web Luminae, une maison de luminaires, en passant par un benchmark concurrentiel, des wireframes, des maquettes UI et du prototypage.",
      "La direction artistique : un univers élégant et épuré, mettant en valeur des luminaires aux lignes aériennes, contemporaines et design, pour une expérience visuelle harmonieuse en accord avec le positionnement esthétique de la marque.",
      "Le contenu : page d’accueil, fiches produits, tunnel d’achat, avis clients, inscription à la newsletter et contenus éditoriaux.",
      "Le livrable : une maquette interactive Figma à parcourir, accompagnée d’une vidéo de démonstration du site en mouvement.",
    ],
    images: [
      {
        src: "assets/images/luminae/luminae-cover.jpg",
        alt: "Page d’accueil du site Luminae avec une phrase de présentation et une sélection de luminaires.",
        width: 1800,
        height: 944,
      },
      {
        src: "assets/images/luminae/luminae-screen-01.jpg",
        alt: "Page produit Luminae avec une suspension en rotin et un bouton d’ajout au panier.",
        width: 1800,
        height: 944,
      },
      {
        src: "assets/images/luminae/luminae-screen-02.jpg",
        alt: "Section Luminae présentant des avis clients et un bandeau d’inscription à la newsletter.",
        width: 1800,
        height: 944,
      },
      {
        src: "assets/images/luminae/luminae-screen-03.jpg",
        alt: "Section éditoriale Luminae avec deux cartes d’articles sur l’éclairage intérieur.",
        width: 1800,
        height: 944,
      },
    ],
    links: {
      desktop: {
        label: "Voir le prototype",
        url: "https://www.figma.com/proto/a5oPmgWhSepvPl2UwNmzxX/Design_Interface?node-id=149-6904&viewport=246%2C210%2C0.02&t=ze848dyWhxBwwYIh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=149%3A6904&page-id=127%3A5439",
        external: true,
      },
      mobile: {
        label: "Voir le prototype mobile",
        url: "https://www.figma.com/proto/a5oPmgWhSepvPl2UwNmzxX/Design_Interface?node-id=307-8034&viewport=374%2C80%2C0.06&t=Y4tQDc5U3rhBqcoh-1&scaling=min-zoom&content-scaling=fixed&page-id=307%3A8022",
        external: true,
      },
    },
    titleSize: 111,
    titleSpacing: "0.0126em",
  },

  {
    id: "mariage",
    name: "Mariage Marion & Alexandre",
    title: "Mariage",
    meta: "Projet personnel · Mariage de Marion & Alexandre · 2025",
    description: [
      "Création d’un logo dans le cadre du mariage de Marion et Alexandre, autour d’un univers champêtre et naturel.",
      "Une palette de couleurs avait déjà été définie par les mariés. J’ai donc repris leur couleur principale afin de concevoir une identité visuelle harmonieuse, en accord avec l’ambiance souhaitée pour leur mariage.",
      "Le logo a ensuite été décliné et utilisé sur différents supports, notamment sur les gobelets en plastique personnalisés.",
    ],
    images: [
      {
        src: "assets/images/mariage/mariage-cover.jpg",
        alt: "Gobelet personnalisé avec le logo de mariage de Marion et Alexandre, dans les tons terracotta.",
        width: 1400,
        height: 1399,
      },
      {
        src: "assets/images/mariage/mariage-logo-avant.jpg",
        alt: "Logo de mariage avec les lettres M et A entourées d’une couronne végétale terracotta et la date 26-07-2025.",
        width: 1400,
        height: 1399,
      },
      {
        src: "assets/images/mariage/mariage-gobelet-avant.jpg",
        alt: "Gobelet transparent avec le monogramme du mariage imprimé en terracotta.",
        width: 1400,
        height: 1399,
      },
      {
        src: "assets/images/mariage/mariage-logo-arriere.jpg",
        alt: "Silhouette illustrée d’un couple de mariés en terracotta.",
        width: 1400,
        height: 1404,
      },
      {
        src: "assets/images/mariage/mariage-gobelet-arriere.jpg",
        alt: "Gobelet transparent avec l’illustration du couple de mariés imprimée en terracotta.",
        width: 1400,
        height: 1401,
      },
    ],
    links: {},
    titleSize: 106,
    titleSpacing: "0.03em",
  },

  {
    id: "chang-tea",
    name: "Chang Tea",
    meta: "3ᵉ année de Bachelor · ECV Bordeaux",
    description: [
      "Création d’un logo dans le cadre de ma troisième année de Bachelor à l’ECV Bordeaux. L’objectif était d’imaginer une identité visuelle en associant un animal à un objet.",
      "Pour ce projet, je me suis inspirée des cultures indienne et thaïlandaise, ainsi que de l’univers du thé. C’est ainsi qu’est née Chang Tea : une identité fictive autour du thé et de l’éléphant. J’ai imaginé un éléphant dont la trompe prend la forme d’une théière, créant ainsi un lien visuel entre les deux éléments.",
      "Côté direction artistique, j’ai souhaité transmettre une sensation de douceur et de légèreté à travers une palette de couleurs pastel mêlant rose, vert et violet.",
      "J’ai également réalisé plusieurs déclinaisons du logo afin d’explorer différentes possibilités d’utilisation et de construire une identité visuelle cohérente.",
    ],
    images: [
      {
        src: "assets/images/chang-tea/chang-tea-stickers.jpg",
        alt: "Rouleau de stickers Chang Tea verts avec le logo éléphant et des nuages pastel.",
        width: 1600,
        height: 960,
      },
      {
        src: "assets/images/chang-tea/chang-tea-logo-classique.jpg",
        alt: "Logo Chang Tea noir sur fond blanc, avec l’éléphant et les nuages pastel.",
        width: 1400,
        height: 1401,
      },
      {
        src: "assets/images/chang-tea/chang-tea-logo-violet.jpg",
        alt: "Logo Chang Tea blanc sur fond violet pastel.",
        width: 1400,
        height: 1401,
      },
      {
        src: "assets/images/chang-tea/chang-tea-logo-rose.jpg",
        alt: "Logo Chang Tea blanc sur fond rose poudré.",
        width: 1400,
        height: 1401,
      },
      {
        src: "assets/images/chang-tea/chang-tea-logo-vert.jpg",
        alt: "Logo Chang Tea blanc sur fond vert pastel.",
        width: 1400,
        height: 1401,
      },
      {
        src: "assets/images/chang-tea/chang-tea-packaging.jpg",
        alt: "Sachet de thé en kraft avec une étiquette rose Chang Tea.",
        width: 1600,
        height: 900,
      },
      {
        src: "assets/images/chang-tea/chang-tea-charte.jpg",
        alt: "Planche de présentation de l’identité visuelle Chang Tea et de ses déclinaisons.",
        width: 1600,
        height: 1619,
      },
    ],
    links: {
      pdf: {
        label: "Voir le pdf",
        url: "assets/documents/ChangTea_Presentation.pdf",
        external: true,
      },
    },
    titleSize: 85,
    titleSpacing: "0.02em",
  },

  {
    id: "sunshine",
    name: "Sunshine Playlist",
    title: "Sunshine",
    meta: "3ᵉ année de Bachelor · ECV Bordeaux · Motion design",
    description: [
      "Projet : créer un motion design autour de la playlist Sunshine.",
      "La direction artistique : un univers pop et solaire, construit autour d’un jaune lumineux, d’un rose franc, d’une étoile expressive et d’une typographie déformée.",
      "Le résultat : une animation courte, dont quelques images clés sont présentées ici ; la vidéo complète est accessible via le lien « Voir le motion design ».",
    ],
    images: [
      {
        src: "assets/images/sunshine/sunshine-01.jpg",
        alt: "Image clé du motion design Sunshine : le titre « Sun on your skin, Music in your head » en jaune sur fond rose.",
        width: 1920,
        height: 1080,
      },
      {
        src: "assets/images/sunshine/sunshine-02.jpg",
        alt: "Image clé du motion design Sunshine : « Carefree, a little messy, perfectly you » en rose sur fond jaune.",
        width: 1920,
        height: 1080,
      },
      {
        src: "assets/images/sunshine/sunshine-03.jpg",
        alt: "Dernière image du motion design Sunshine avec le logo Spotify et l’étoile jaune sur fond rose.",
        width: 1920,
        height: 1080,
      },
      {
        src: "assets/images/sunshine/sunshine-04.jpg",
        alt: "Image du motion design Sunshine avec l’étoile jaune sur un fond graphique noir et blanc.",
        width: 1920,
        height: 1080,
      },
    ],
    links: {
      video: {
        label: "Voir le motion design",
        url: "assets/videos/Sunshine_Playlist.mp4",
        external: true,
      },
    },
    titleSize: 94,
    titleSpacing: "0.02em",
  },

  {
    id: "illusion",
    name: "Affiche Illusion",
    title: "Illusion",
    portrait: true,
    meta: "3ᵉ année de Bachelor · ECV Bordeaux · Graphique",
    description: [
      "Projet : concevoir l’affiche d’un film fictif, Illusion.",
      "La direction artistique : un univers hivernal et onirique, un visage en surimpression, un titre monumental et un contraste entre le bleu glacé et le violet.",
      "Le résultat : une affiche au format portrait, présentée ici dans son intégralité.",
    ],
    images: [
      {
        src: "assets/images/illusion/illusion-affiche.jpg",
        alt: "Affiche du film fictif Illusion : deux visages dans un paysage hivernal bleuté et le titre Illusion en grand.",
        width: 2000,
        height: 2829,
      },
    ],
    links: {},
    titleSize: 90,
    titleSpacing: "0.03em",
  },

  {
    id: "daily-ui",
    name: "Daily UI",
    moodboard: true,
    meta: "Challenge personnel · UI Design · 100 semaines",
    description: [
      "Les 100 jours traditionnels deviennent 100 semaines. Un brief par semaine, une direction artistique, une interface — et le temps d’aller au bout de chaque idée. Bienvenue dans mon carnet de bord créatif.",
      "Un exercice régulier pour développer ma créativité, explorer différentes interfaces et continuer à progresser en UI Design, semaine après semaine.",
    ],
    images: [
      {
        src: "assets/images/daily-ui/week-01.jpg",
        alt: "Inscription à un jeu-concours Halloween pour gagner If We Were Villains, avec un formulaire e-mail.",
        width: 527,
        height: 1200,
      },
      {
        src: "assets/images/daily-ui/week-02.jpg",
        alt: "Page de paiement pour des billets du Fantôme de l’Opéra, avec récapitulatif de commande et formulaire de carte bancaire.",
        width: 1200,
        height: 774,
      },
      {
        src: "assets/images/daily-ui/week-03.jpg",
        alt: "Landing page Halloween pour une lampe citrouille lumineuse, avec titre, visuel produit et bouton d’ajout au panier.",
        width: 1600,
        height: 1048,
      },
      {
        src: "assets/images/daily-ui/week-04.jpg",
        alt: "Calculatrice à l’univers vampirique : touches rouges dégoulinantes et crocs en haut de l’écran.",
        width: 526,
        height: 1200,
      },
      {
        src: "assets/images/daily-ui/week-06a.jpg",
        alt: "Profil Clelia sur une application automnale : avatar champignon dessiné, statistiques et galerie de photos.",
        width: 553,
        height: 1200,
      },
    ],
    links: {
      linkedin: {
        label: "Voir sur LinkedIn",
        url: "https://www.linkedin.com/in/chiara-arancio-ab92a8295/",
        external: true,
      },
    },
    titleSize: 85,
    titleSpacing: "0.02em",
  },
];
