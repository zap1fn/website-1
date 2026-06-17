/* ==========================================
   🌍 SPRACHWECHSLER & ANIMATIONEN
   ========================================== */

// === ALLE TEXTE IN 5 SPRACHEN ===
const translations = {
    // ===== DEUTSCH =====
    de: {
        logo: "Code4Beginners",
        nav_home: "Start",
        nav_html: "HTML Grundlagen",
        nav_css: "CSS Grundlagen",
        // Hero
        hero_title: "Coding als <span>Anfänger</span> lernen",
        hero_text: "Du willst programmieren lernen? Perfekt! Diese Seite zeigt dir die ersten Schritte – einfach und verständlich erklärt.",
        hero_btn: "Los geht's!",
        // Section 1
        s1_title: "Warum Coding lernen?",
        s1_sub: "In der digitalen Welt ist Programmieren eine Superkraft.",
        s1_card1_title: "Kreativität",
        s1_card1_text: "Baue eigene Websites, Apps und Spiele.",
        s1_card2_title: "Karriere",
        s1_card2_text: "Entwickler werden überall gesucht.",
        s1_card3_title: "Logik",
        s1_card3_text: "Du lernst Probleme strukturiert zu lösen.",
        s1_card4_title: "Zukunft",
        s1_card4_text: "Technologie verstehen und mitgestalten.",
        // Section 2 - Lernpfad
        s2_title: "Dein Lernpfad",
        s2_sub: "So startest du als absoluter Anfänger:",
        step1_title: "1. HTML – Die Struktur",
        step1_text: "HTML ist das Grundgerüst jeder Website. Wie die Knochen eines Körpers.",
        step2_title: "2. CSS – Das Design",
        step2_text: "CSS macht alles schön: Farben, Layout, Schriftarten.",
        step3_title: "3. JavaScript – Leben einhauchen",
        step3_text: "JS macht die Seite interaktiv: Klicks, Animationen, Formulare.",
        // Footer
        footer_text: "© 2026 Code4Beginners – Aus Liebe zum Lernen 💜",
        // HTML Seite
        html_title: "HTML Grundlagen",
        html_sub: "Die Sprache hinter jeder Website – einfach erklärt.",
        html_lesson1_title: "Was ist HTML?",
        html_lesson1_text: "HTML (HyperText Markup Language) ist die Standard-Auszeichnungssprache für Websites. Stell dir vor, du schreibst einen Text und markierst mit bestimmten Zeichen, was Überschrift, was Absatz und was Bild ist.",
        html_lesson1_example: "Ein einfaches HTML-Dokument sieht so aus:",
        html_lesson2_title: "Wichtige HTML-Tags",
        html_lesson2_text: "Diese Tags solltest du als Anfänger kennen:",
        html_tag1: "<strong>&lt;h1&gt; bis &lt;h6&gt;</strong> – Überschriften (h1 ist die größte)",
        html_tag2: "<strong>&lt;p&gt;</strong> – Ein Absatz (Paragraph)",
        html_tag3: "<strong>&lt;a&gt;</strong> – Ein Link zu einer anderen Seite",
        html_tag4: "<strong>&lt;img&gt;</strong> – Ein Bild einfügen",
        html_tag5: "<strong>&lt;div&gt;</strong> – Ein Bereich (Container)",
        html_lesson3_title: "Attribute",
        html_lesson3_text: "Tags können Attribute haben – das sind Zusatzinformationen. Zum Beispiel:",
        html_attr_example: '&lt;a href=&quot;https://example.com&quot;&gt;Klick mich&lt;/a&gt;',
        html_back: "← Zurück zur Startseite",
        html_next: "Weiter zu CSS →",
        // CSS Seite
        css_title: "CSS Grundlagen",
        css_sub: "Farben, Layout und schönes Design – ganz einfach.",
        css_lesson1_title: "Was ist CSS?",
        css_lesson1_text: "CSS (Cascading Style Sheets) ist die Gestaltungssprache des Webs. Während HTML die Struktur vorgibt, bestimmt CSS das Aussehen: Farben, Schriftarten, Abstände, Positionen.",
        css_lesson1_compare: "Stell dir vor: HTML ist ein Haus (Zimmer, Wände, Türen), CSS ist die Inneneinrichtung (Farbe der Wände, Möbel, Deko).",
        css_lesson2_title: "So schreibt man CSS",
        css_lesson2_text: "CSS besteht aus Regeln. Jede Regel hat einen <strong>Selektor</strong> (wer?) und einen <strong>Block</strong> mit Eigenschaften (was?).",
        css_example: '/* Alle h1 Überschriften werden blau */\nh1 {\n    color: blue;\n    font-size: 32px;\n}',
        css_lesson3_title: "Wichtige CSS-Eigenschaften",
        css_lesson3_text: "Diese Eigenschaften brauchst du am häufigsten:",
        css_prop1: "<strong>color</strong> – Textfarbe",
        css_prop2: "<strong>background</strong> – Hintergrundfarbe oder -bild",
        css_prop3: "<strong>font-size</strong> – Schriftgröße",
        css_prop4: "<strong>margin / padding</strong> – Abstände außen / innen",
        css_prop5: "<strong>display: flex</strong> – Modernes Layout",
        css_back: "← Zurück zu HTML",
        css_home: "← Zur Startseite",
        nav_levels: "10 Levels",
        levels_title: "10 Coding-Levels",
        levels_sub: "Lerne Schritt für Schritt HTML & CSS",
        level_task_label: "Dein Code:",
        level_preview_label: "Vorschau:",
        level_check: "Prüfen",
        level_hint_btn: "💡 Hinweis",
        level_hint_header: "💡 Hinweis:",
        level_solution: "Lösung zeigen",
        level_reset: "Zurücksetzen",
        level_prev: "← Vorheriges Level",
        level_next: "Nächstes Level →",
        level_correct: "✅ Richtig! Super gemacht!",
        level_wrong: "❌ Noch nicht ganz. Versuch's nochmal!",
        level_start: "Starte Level 1",
        level_complete_all: "🎉 Alle Levels geschafft!",
        level_explain: "🤔 Warum ist das so?",
        level_hint_close: "💡 Hinweise schließen"
    },

    // ===== ENGLISH =====
    en: {
        logo: "Code4Beginners",
        nav_home: "Home",
        nav_html: "HTML Basics",
        nav_css: "CSS Basics",
        hero_title: "Learn Coding as a <span>Beginner</span>",
        hero_text: "Want to learn programming? Perfect! This site shows you the first steps – simple and easy to understand.",
        hero_btn: "Let's go!",
        s1_title: "Why learn coding?",
        s1_sub: "In the digital world, programming is a superpower.",
        s1_card1_title: "Creativity",
        s1_card1_text: "Build your own websites, apps and games.",
        s1_card2_title: "Career",
        s1_card2_text: "Developers are in demand everywhere.",
        s1_card3_title: "Logic",
        s1_card3_text: "Learn to solve problems systematically.",
        s1_card4_title: "Future",
        s1_card4_text: "Understand and shape technology.",
        s2_title: "Your Learning Path",
        s2_sub: "How to start as an absolute beginner:",
        step1_title: "1. HTML – The Structure",
        step1_text: "HTML is the skeleton of every website. Like the bones of a body.",
        step2_title: "2. CSS – The Design",
        step2_text: "CSS makes everything beautiful: colors, layout, fonts.",
        step3_title: "3. JavaScript – Bring it to life",
        step3_text: "JS makes the page interactive: clicks, animations, forms.",
        footer_text: "© 2026 Code4Beginners – Made with love for learning 💜",
        html_title: "HTML Basics",
        html_sub: "The language behind every website – explained simply.",
        html_lesson1_title: "What is HTML?",
        html_lesson1_text: "HTML (HyperText Markup Language) is the standard markup language for websites. Imagine writing a text and marking certain characters to indicate what is a heading, what is a paragraph, and what is an image.",
        html_lesson1_example: "A simple HTML document looks like this:",
        html_lesson2_title: "Important HTML Tags",
        html_lesson2_text: "These are the tags every beginner should know:",
        html_tag1: "<strong>&lt;h1&gt; to &lt;h6&gt;</strong> – Headings (h1 is biggest)",
        html_tag2: "<strong>&lt;p&gt;</strong> – A paragraph",
        html_tag3: "<strong>&lt;a&gt;</strong> – A link to another page",
        html_tag4: "<strong>&lt;img&gt;</strong> – Insert an image",
        html_tag5: "<strong>&lt;div&gt;</strong> – A container/area",
        html_lesson3_title: "Attributes",
        html_lesson3_text: "Tags can have attributes – extra information. For example:",
        html_attr_example: '&lt;a href=&quot;https://example.com&quot;&gt;Click me&lt;/a&gt;',
        html_back: "← Back to Home",
        html_next: "Go to CSS →",
        css_title: "CSS Basics",
        css_sub: "Colors, layout and beautiful design – made easy.",
        css_lesson1_title: "What is CSS?",
        css_lesson1_text: "CSS (Cascading Style Sheets) is the styling language of the web. While HTML provides the structure, CSS determines the appearance: colors, fonts, spacing, positions.",
        css_lesson1_compare: "Think of it this way: HTML is a house (rooms, walls, doors), CSS is the interior design (wall color, furniture, decor).",
        css_lesson2_title: "How to write CSS",
        css_lesson2_text: "CSS consists of rules. Each rule has a <strong>selector</strong> (who?) and a <strong>block</strong> with properties (what?).",
        css_example: '/* All h1 headings become blue */\nh1 {\n    color: blue;\n    font-size: 32px;\n}',
        css_lesson3_title: "Important CSS Properties",
        css_lesson3_text: "These are the properties you'll use most often:",
        css_prop1: "<strong>color</strong> – Text color",
        css_prop2: "<strong>background</strong> – Background color or image",
        css_prop3: "<strong>font-size</strong> – Font size",
        css_prop4: "<strong>margin / padding</strong> – Outer / inner spacing",
        css_prop5: "<strong>display: flex</strong> – Modern layout",
        css_back: "← Back to HTML",
        css_home: "← Back to Home",
        nav_levels: "10 Levels",
        levels_title: "10 Coding Levels",
        levels_sub: "Learn HTML & CSS step by step",
        level_task_label: "Your Code:",
        level_preview_label: "Preview:",
        level_check: "Check",
        level_hint_btn: "💡 Hint",
        level_hint_header: "💡 Hint:",
        level_solution: "Show solution",
        level_reset: "Reset",
        level_prev: "← Previous Level",
        level_next: "Next Level →",
        level_correct: "✅ Correct! Great job!",
        level_wrong: "❌ Not quite. Try again!",
        level_start: "Start Level 1",
        level_complete_all: "🎉 All levels completed!",
        level_explain: "🤔 Why is that?",
        level_hint_close: "💡 Close hints"
    },

    // ===== ESPAÑOL =====
    es: {
        logo: "Code4Beginners",
        nav_home: "Inicio",
        nav_html: "HTML Básico",
        nav_css: "CSS Básico",
        hero_title: "Aprende Coding como <span>Principiante</span>",
        hero_text: "¿Quieres aprender a programar? ¡Perfecto! Esta web te muestra los primeros pasos – simple y fácil de entender.",
        hero_btn: "¡Vamos!",
        s1_title: "¿Por qué aprender coding?",
        s1_sub: "En el mundo digital, programar es un superpoder.",
        s1_card1_title: "Creatividad",
        s1_card1_text: "Crea tus propias webs, apps y juegos.",
        s1_card2_title: "Carrera",
        s1_card2_text: "Los desarrolladores son buscados en todo el mundo.",
        s1_card3_title: "Lógica",
        s1_card3_text: "Aprende a resolver problemas de forma estructurada.",
        s1_card4_title: "Futuro",
        s1_card4_text: "Comprende y da forma a la tecnología.",
        s2_title: "Tu Ruta de Aprendizaje",
        s2_sub: "Cómo empezar como principiante absoluto:",
        step1_title: "1. HTML – La Estructura",
        step1_text: "HTML es el esqueleto de toda web. Como los huesos del cuerpo.",
        step2_title: "2. CSS – El Diseño",
        step2_text: "CSS lo hace todo bonito: colores, diseño, fuentes.",
        step3_title: "3. JavaScript – Dale vida",
        step3_text: "JS hace la página interactiva: clics, animaciones, formularios.",
        footer_text: "© 2026 Code4Beginners – Hecho con amor por aprender 💜",
        html_title: "HTML Básico",
        html_sub: "El lenguaje detrás de cada web – explicado de forma sencilla.",
        html_lesson1_title: "¿Qué es HTML?",
        html_lesson1_text: "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para sitios web. Imagina que escribes un texto y marcas con ciertos caracteres qué es título, qué es párrafo y qué es imagen.",
        html_lesson1_example: "Un documento HTML simple se ve así:",
        html_lesson2_title: "Etiquetas HTML importantes",
        html_lesson2_text: "Estas etiquetas deberías conocer como principiante:",
        html_tag1: "<strong>&lt;h1&gt; a &lt;h6&gt;</strong> – Encabezados (h1 es el más grande)",
        html_tag2: "<strong>&lt;p&gt;</strong> – Un párrafo",
        html_tag3: "<strong>&lt;a&gt;</strong> – Un enlace a otra página",
        html_tag4: "<strong>&lt;img&gt;</strong> – Insertar una imagen",
        html_tag5: "<strong>&lt;div&gt;</strong> – Un contenedor",
        html_lesson3_title: "Atributos",
        html_lesson3_text: "Las etiquetas pueden tener atributos – información adicional. Por ejemplo:",
        html_attr_example: '&lt;a href=&quot;https://example.com&quot;&gt;Haz clic&lt;/a&gt;',
        html_back: "← Volver al Inicio",
        html_next: "Ir a CSS →",
        css_title: "CSS Básico",
        css_sub: "Colores, diseño y estilo bonito – muy fácil.",
        css_lesson1_title: "¿Qué es CSS?",
        css_lesson1_text: "CSS (Cascading Style Sheets) es el lenguaje de estilo de la web. Mientras HTML da la estructura, CSS determina la apariencia: colores, fuentes, espacios, posiciones.",
        css_lesson1_compare: "Piénsalo así: HTML es una casa (habitaciones, paredes, puertas), CSS es el diseño interior (color de paredes, muebles, decoración).",
        css_lesson2_title: "Cómo escribir CSS",
        css_lesson2_text: "CSS consiste en reglas. Cada regla tiene un <strong>selector</strong> (¿quién?) y un <strong>bloque</strong> con propiedades (¿qué?).",
        css_example: '/* Todos los h1 se vuelven azules */\nh1 {\n    color: blue;\n    font-size: 32px;\n}',
        css_lesson3_title: "Propiedades CSS importantes",
        css_lesson3_text: "Estas son las propiedades que usarás más a menudo:",
        css_prop1: "<strong>color</strong> – Color del texto",
        css_prop2: "<strong>background</strong> – Color o imagen de fondo",
        css_prop3: "<strong>font-size</strong> – Tamaño de fuente",
        css_prop4: "<strong>margin / padding</strong> – Espaciado exterior / interior",
        css_prop5: "<strong>display: flex</strong> – Diseño moderno",
        css_back: "← Volver a HTML",
        css_home: "← Volver al Inicio",
        nav_levels: "10 Niveles",
        levels_title: "10 Niveles de Coding",
        levels_sub: "Aprende HTML y CSS paso a paso",
        level_task_label: "Tu Código:",
        level_preview_label: "Vista previa:",
        level_check: "Verificar",
        level_hint_btn: "💡 Pista",
        level_hint_header: "💡 Pista:",
        level_solution: "Mostrar solución",
        level_reset: "Reiniciar",
        level_prev: "← Nivel anterior",
        level_next: "Siguiente nivel →",
        level_correct: "✅ ¡Correcto! ¡Bien hecho!",
        level_wrong: "❌ Casi. ¡Inténtalo de nuevo!",
        level_start: "Comenzar Nivel 1",
        level_complete_all: "🎉 ¡Todos los niveles completados!",
        level_explain: "🤔 ¿Por qué es así?",
        level_hint_close: "💡 Cerrar pistas"
    },

    // ===== FRANÇAIS =====
    fr: {
        logo: "Code4Beginners",
        nav_home: "Accueil",
        nav_html: "HTML Base",
        nav_css: "CSS Base",
        hero_title: "Apprendre le Code en tant que <span>Débutant</span>",
        hero_text: "Tu veux apprendre à programmer ? Parfait ! Ce site te montre les premiers pas – simple et facile à comprendre.",
        hero_btn: "C'est parti !",
        s1_title: "Pourquoi apprendre le code ?",
        s1_sub: "Dans le monde numérique, programmer est un superpouvoir.",
        s1_card1_title: "Créativité",
        s1_card1_text: "Crée tes propres sites, applis et jeux.",
        s1_card2_title: "Carrière",
        s1_card2_text: "Les développeurs sont recherchés partout.",
        s1_card3_title: "Logique",
        s1_card3_text: "Apprends à résoudre des problèmes de façon structurée.",
        s1_card4_title: "Avenir",
        s1_card4_text: "Comprendre et façonner la technologie.",
        s2_title: "Ton Parcours d'Apprentissage",
        s2_sub: "Comment commencer en tant que débutant absolu :",
        step1_title: "1. HTML – La Structure",
        step1_text: "HTML est le squelette de chaque site web. Comme les os d'un corps.",
        step2_title: "2. CSS – Le Design",
        step2_text: "CSS rend tout beau : couleurs, mise en page, polices.",
        step3_title: "3. JavaScript – Donne vie",
        step3_text: "JS rend la page interactive : clics, animations, formulaires.",
        footer_text: "© 2026 Code4Beginners – Fait avec amour pour l'apprentissage 💜",
        html_title: "HTML Base",
        html_sub: "Le langage derrière chaque site web – expliqué simplement.",
        html_lesson1_title: "Qu'est-ce que HTML ?",
        html_lesson1_text: "HTML (HyperText Markup Language) est le langage de balisage standard pour les sites web. Imagine que tu écris un texte et que tu marques avec certains caractères ce qui est un titre, ce qui est un paragraphe et ce qui est une image.",
        html_lesson1_example: "Un document HTML simple ressemble à ceci :",
        html_lesson2_title: "Balises HTML importantes",
        html_lesson2_text: "Voici les balises que tout débutant devrait connaître :",
        html_tag1: "<strong>&lt;h1&gt; à &lt;h6&gt;</strong> – Titres (h1 est le plus grand)",
        html_tag2: "<strong>&lt;p&gt;</strong> – Un paragraphe",
        html_tag3: "<strong>&lt;a&gt;</strong> – Un lien vers une autre page",
        html_tag4: "<strong>&lt;img&gt;</strong> – Insérer une image",
        html_tag5: "<strong>&lt;div&gt;</strong> – Un conteneur",
        html_lesson3_title: "Attributs",
        html_lesson3_text: "Les balises peuvent avoir des attributs – des informations supplémentaires. Par exemple :",
        html_attr_example: '&lt;a href=&quot;https://example.com&quot;&gt;Clique-moi&lt;/a&gt;',
        html_back: "← Retour à l'Accueil",
        html_next: "Aller à CSS →",
        css_title: "CSS Base",
        css_sub: "Couleurs, mise en page et beau design – très facile.",
        css_lesson1_title: "Qu'est-ce que CSS ?",
        css_lesson1_text: "CSS (Cascading Style Sheets) est le langage de style du web. Alors que HTML fournit la structure, CSS détermine l'apparence : couleurs, polices, espacements, positions.",
        css_lesson1_compare: "Pense-y comme ça : HTML est une maison (pièces, murs, portes), CSS est la décoration intérieure (couleur des murs, meubles, déco).",
        css_lesson2_title: "Comment écrire CSS",
        css_lesson2_text: "CSS se compose de règles. Chaque règle a un <strong>sélecteur</strong> (qui ?) et un <strong>bloc</strong> avec des propriétés (quoi ?).",
        css_example: '/* Tous les h1 deviennent bleus */\nh1 {\n    color: blue;\n    font-size: 32px;\n}',
        css_lesson3_title: "Propriétés CSS importantes",
        css_lesson3_text: "Voici les propriétés que tu utiliseras le plus souvent :",
        css_prop1: "<strong>color</strong> – Couleur du texte",
        css_prop2: "<strong>background</strong> – Couleur ou image de fond",
        css_prop3: "<strong>font-size</strong> – Taille de police",
        css_prop4: "<strong>margin / padding</strong> – Espacement extérieur / intérieur",
        css_prop5: "<strong>display: flex</strong> – Mise en page moderne",
        css_back: "← Retour à HTML",
        css_home: "← Retour à l'Accueil",
        nav_levels: "10 Niveaux",
        levels_title: "10 Niveaux de Code",
        levels_sub: "Apprends HTML et CSS étape par étape",
        level_task_label: "Ton Code :",
        level_preview_label: "Aperçu :",
        level_check: "Vérifier",
        level_hint_btn: "💡 Indice",
        level_hint_header: "💡 Indice :",
        level_solution: "Voir la solution",
        level_reset: "Réinitialiser",
        level_prev: "← Niveau précédent",
        level_next: "Niveau suivant →",
        level_correct: "✅ Correct ! Super travail !",
        level_wrong: "❌ Pas tout à fait. Réessaie !",
        level_start: "Commencer Niveau 1",
        level_complete_all: "🎉 Tous les niveaux terminés !",
        level_explain: "🤔 Pourquoi ?",
        level_hint_close: "💡 Fermer les indices"
    },

    // ===== ITALIANO =====
    it: {
        logo: "Code4Beginners",
        nav_home: "Home",
        nav_html: "HTML Base",
        nav_css: "CSS Base",
        hero_title: "Impara il Coding da <span>Principiante</span>",
        hero_text: "Vuoi imparare a programmare? Perfetto! Questo sito ti mostra i primi passi – semplice e facile da capire.",
        hero_btn: "Cominciamo!",
        s1_title: "Perché imparare il coding?",
        s1_sub: "Nel mondo digitale, programmare è un superpotere.",
        s1_card1_title: "Creatività",
        s1_card1_text: "Crea i tuoi siti web, app e giochi.",
        s1_card2_title: "Carriera",
        s1_card2_text: "Gli sviluppatori sono richiesti ovunque.",
        s1_card3_title: "Logica",
        s1_card3_text: "Impara a risolvere problemi in modo strutturato.",
        s1_card4_title: "Futuro",
        s1_card4_text: "Comprendere e plasmare la tecnologia.",
        s2_title: "Il Tuo Percorso di Apprendimento",
        s2_sub: "Come iniziare da principiante assoluto:",
        step1_title: "1. HTML – La Struttura",
        step1_text: "HTML è lo scheletro di ogni sito web. Come le ossa di un corpo.",
        step2_title: "2. CSS – Il Design",
        step2_text: "CSS rende tutto bello: colori, layout, caratteri.",
        step3_title: "3. JavaScript – Dai vita",
        step3_text: "JS rende la pagina interattiva: click, animazioni, moduli.",
        footer_text: "© 2026 Code4Beginners – Fatto con amore per l'apprendimento 💜",
        html_title: "HTML Base",
        html_sub: "Il linguaggio dietro ogni sito web – spiegato semplicemente.",
        html_lesson1_title: "Cos'è HTML?",
        html_lesson1_text: "HTML (HyperText Markup Language) è il linguaggio di markup standard per i siti web. Immagina di scrivere un testo e contrassegnare con certi caratteri ciò che è un titolo, ciò che è un paragrafo e ciò che è un'immagine.",
        html_lesson1_example: "Un documento HTML semplice si presenta così:",
        html_lesson2_title: "Tag HTML importanti",
        html_lesson2_text: "Questi sono i tag che ogni principiante dovrebbe conoscere:",
        html_tag1: "<strong>&lt;h1&gt; a &lt;h6&gt;</strong> – Intestazioni (h1 è la più grande)",
        html_tag2: "<strong>&lt;p&gt;</strong> – Un paragrafo",
        html_tag3: "<strong>&lt;a&gt;</strong> – Un link a un'altra pagina",
        html_tag4: "<strong>&lt;img&gt;</strong> – Inserire un'immagine",
        html_tag5: "<strong>&lt;div&gt;</strong> – Un contenitore",
        html_lesson3_title: "Attributi",
        html_lesson3_text: "I tag possono avere attributi – informazioni aggiuntive. Per esempio:",
        html_attr_example: '&lt;a href=&quot;https://example.com&quot;&gt;Cliccami&lt;/a&gt;',
        html_back: "← Torna alla Home",
        html_next: "Vai a CSS →",
        css_title: "CSS Base",
        css_sub: "Colori, layout e design bellissimo – facilissimo.",
        css_lesson1_title: "Cos'è CSS?",
        css_lesson1_text: "CSS (Cascading Style Sheets) è il linguaggio di stile del web. Mentre HTML fornisce la struttura, CSS determina l'aspetto: colori, caratteri, spaziature, posizioni.",
        css_lesson1_compare: "Pensala così: HTML è una casa (stanze, muri, porte), CSS è l'arredamento (colore dei muri, mobili, decorazioni).",
        css_lesson2_title: "Come scrivere CSS",
        css_lesson2_text: "CSS consiste di regole. Ogni regola ha un <strong>selettore</strong> (chi?) e un <strong>blocco</strong> con proprietà (cosa?).",
        css_example: '/* Tutti gli h1 diventano blu */\nh1 {\n    color: blue;\n    font-size: 32px;\n}',
        css_lesson3_title: "Proprietà CSS importanti",
        css_lesson3_text: "Queste sono le proprietà che userai più spesso:",
        css_prop1: "<strong>color</strong> – Colore del testo",
        css_prop2: "<strong>background</strong> – Colore o immagine di sfondo",
        css_prop3: "<strong>font-size</strong> – Dimensione del carattere",
        css_prop4: "<strong>margin / padding</strong> – Spaziatura esterna / interna",
        css_prop5: "<strong>display: flex</strong> – Layout moderno",
        css_back: "← Torna a HTML",
        css_home: "← Torna alla Home",
        nav_levels: "10 Livelli",
        levels_title: "10 Livelli di Coding",
        levels_sub: "Impara HTML e CSS passo dopo passo",
        level_task_label: "Il tuo Codice:",
        level_preview_label: "Anteprima:",
        level_check: "Verifica",
        level_hint_btn: "💡 Suggerimento",
        level_hint_header: "💡 Suggerimento:",
        level_solution: "Mostra soluzione",
        level_reset: "Resetta",
        level_prev: "← Livello precedente",
        level_next: "Livello successivo →",
        level_correct: "✅ Corretto! Ottimo lavoro!",
        level_wrong: "❌ Non proprio. Riprova!",
        level_start: "Inizia Livello 1",
        level_complete_all: "🎉 Tutti i livelli completati!",
        level_explain: "🤔 Perché?",
        level_hint_close: "💡 Chiudi suggerimenti"
    }
};

// === SPRACHE LADEN & SPEICHERN ===
function getSavedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'de';
}

function saveLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

// === TEXTE AUF DER SEITE AKTUALISIEREN ===
function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Alle Elemente mit data-i18n durchgehen
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Sprach-Buttons aktualisieren
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Sprache speichern
    saveLanguage(lang);
}

// === SPRACHE WECHSELN ===
function switchLanguage(lang) {
    applyLanguage(lang);
}

// === SEITEN BEIM LADEN ÜBERSETZEN ===
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getSavedLanguage();

    // Sprach-Buttons klickbar machen
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });

    // Gespeicherte Sprache anwenden
    applyLanguage(savedLang);

    // Fade-In Animation für Elemente
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
});
