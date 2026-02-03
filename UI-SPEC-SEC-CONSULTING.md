# UI SPEC — SEC-CONSULTING (Web)

## 0) Objectif & ton visuel

- **Positionnement** : cabinet professionnel (audit, compta, fiscalité, conseil), mais **accueillant** et moderne.
- **Signature UI** : sections aérées, **grandes typos**, cards arrondies, alternance **fonds clairs** / **bandeaux colorés forts**, photos “business real-life”, détails décoratifs subtils (petits points/lignes/traits).

---

## 1) Design System

### 1.1 Palette (tokens)

Utiliser la palette fournie comme base :

- **Primary / Accent** : `#F2811D` (orange énergique)
    - boutons principaux, icônes, éléments d’action, highlights
- **Secondary / Warm** : `#F2C849` (jaune)
    - badges, tags, highlights doux
- **Soft Background 1** : `#F2D4C2` (peach)
    - fond hero/sections “friendly”
- **Soft Background 2** : `#F2D888` (beige clair)
    - fonds alternés, surfaces secondaires
- **Dark / Text** : `#592512` (brun très foncé)
    - titres, textes forts, footer

**Neutres complémentaires (à déduire)**

- `#FFFFFF` (blanc) surfaces cards
- Gris clair (ex. `#F5F5F5` / `#EFEFEF`) pour inputs et séparateurs
- Un “dark section” type bleu nuit ou brun très foncé (fallback) pour témoignages :
    - idéalement `#592512` en fond + motifs subtils (lignes/ondes très transparentes)

### 1.2 Typographie

- Police : **sans-serif moderne** (ex. Inter / Manrope / Helvetica-like).
- Hiérarchie :
    - H1 (hero) : très grand, 44–56px desktop, 32–38px mobile
    - H2 (titres section) : 28–36px desktop, 22–26px mobile
    - Body : 16–18px desktop, 15–16px mobile
    - Microcopy : 12–14px

Style : titres **semi-bold/bold**, texte courant **regular**.

### 1.3 Grille & layout

- Desktop : container max-width **1140–1200px**, padding latéral 24–32px
- Tablette : container fluide, padding 20–24px
- Mobile : padding 16px, layout **stack** (1 colonne)

**Breakpoints (recommandé)**

- Mobile: ≤ 640
- Tablet: 641–1024
- Desktop: ≥ 1025

### 1.4 Spacing / rayon / ombre

- Rayon : **16–24px** pour cards et images (friendly)
- Boutons : rayon 10–14px
- Ombres : légères, soft (éviter les shadows trop “material”)
- Espacements : sections très respirantes (80–120px vertical desktop, 48–72px mobile)

### 1.5 Iconographie & décor

- Icônes : style “flat / outline”, simples, lisibles.
- Décor : petits éléments géométriques (points, mini rectangles) dispersés en faible opacité.

---

## 2) Composants UI (bibliothèque)

### 2.1 Navigation (Header)

- Header **sticky** (optionnel) ou normal.
- À gauche : logo SEC-CONSULTING.
- À droite : menu (Accueil, À propos, Services, Études de cas, Équipe, Contact).
- CTA bouton dans le header : **“Demander un diagnostic”** (Primary).

**Mobile**

- burger menu (drawer plein écran ou panneau latéral).
- CTA en bas du menu.

### 2.2 Boutons

- **Primary** : fond `#F2811D`, texte blanc, léger shadow, hover = darken 6–10%, micro animation (scale 0.98 au click).
- **Secondary** : fond sombre `#592512` ou transparent + border, texte sombre.
- **Tertiary** : lien avec flèche “→”.

### 2.3 Cards (Services / Features / Case studies)

- Structure : image en haut (option), titre, texte court, mini badge/tag.
- Coins très arrondis.
- Hover : légère élévation + transition douce (150–200ms).

### 2.4 Badges / tags

- Petits pills : fond `#F2C849` ou `#F2D888`, texte brun foncé, radius 999px.

### 2.5 Statistiques (KPI)

- 3 KPI (ex. 95%, 2x, 8yr) alignés en row desktop, en column mobile.
- Chiffres très grands (48–64px desktop).

### 2.6 Carousel logos partenaires

- “Marquee” horizontal auto-scroll (lent), 6–10 logos, pause au hover.
- Mobile : swipe.

### 2.7 Témoignages (section sombre)

- Fond sombre avec motif “ondes” très léger.
- Cards blanches (3 visibles desktop, 1 mobile).
- Contenu : étoiles, quote, mini avatar + nom + rôle.
- Flèches rondes à droite (orange + sombre).

### 2.8 Formulaire contact (2 colonnes)

- Desktop : grille 2 colonnes.
    - Gauche : form (nom, prénom, téléphone, email, service, message)
    - Droite : 3 blocs infos (Adresse / Téléphone / Email) avec icône + fond accent.
- Mobile : tout en **stack**, blocs infos sous le form.
- Inputs : fond gris clair, radius 10–12px.

### 2.9 Footer

- Fond très sombre (brun/noir).
- 3 colonnes : “À propos”, “Liens rapides”, “Services”
- Bloc CTA : “Demander un diagnostic” (mini form email/tel) optionnel.
- Réseaux sociaux icônes.

---

## 3) Pages & sections (mapping exact du site)

> Les contenus textuels viennent de la structure fournie. site web structure 2e7e83735bd6…
> 
> 
> Style et mise en page : inspirés des captures (hero pastel + cards, case study bandeau fort, témoignages dark, contact form 2 colonnes).
> 

---

# A) PAGE ACCUEIL (Home)

## A1 — Hero (above the fold)

**Fond** : dégradé très léger ou flat `#F2D4C2` / `#F2D888` (pastel warm).

**Layout** : 2 colonnes desktop :

- Gauche : H1 + sous-titre + 2 CTA
- Droite : visuel (photo business) dans un cadre arrondi, ou collage de 2 images.

**Contenu**

- H1 : “SEC-CONSULTING — Expertise comptable, audit, conseil, digitalisation et formation”
- Texte : (fourni)
- CTA : “Demander un diagnostic” (Primary) + “Voir nos services” (Secondary)
- Badges (3) : “Rigueur & conformité”, “Décisions pilotées par les chiffres”, “Accompagnement opérationnel” site web structure 2e7e83735bd6…

## A2 — Partenaires (logos défilants)

- Bande horizontale sur fond neutre clair.
- Carrousel/marquee des logos (4–8).

## A3 — Pourquoi SEC-CONSULTING (3 blocs)

**Fond** : clair (blanc) + décor minimal.

- Titre : “Un partenaire stratégique, au-delà de la comptabilité”
- 3 cards : Sécuriser / Structurer / Développer (icône + texte).

## A4 — Aperçu services (cards)

**Fond** : alternance pastel (ex. `#F2D888`)

- Grille 3 colonnes desktop, 2 tablette, 1 mobile.
- 5 cards (selon contenu fourni) + CTA bas : “Télécharger la brochure” + “Parler à un consultant” site web structure 2e7e83735bd6…

## A5 — Méthode (process 1→4)

**Fond** : blanc.

- Composant “steps” : 4 étapes numérotées, avec lignes/points décoratifs.
- Mobile : steps en colonne.

## A6 — Réassurance (preuves)

**Fond** : clair + visuel à droite (photo).

- Texte + CTA “Voir nos références” site web structure 2e7e83735bd6…

## A7 — CTA final

**Fond** : bandeau fort en `#F2811D` (orange) ou `#592512` (dark) avec texte blanc.

- Titre + texte + bouton “Demander un devis / un diagnostic”

---

# B) PAGE “À PROPOS”

## B1 — Présentation

- Layout 2 colonnes : texte + photo équipe/cabinet.
- Utiliser cards pour “Fondé en 2012…” site web structure 2e7e83735bd6…

## B2 — Mission / Vision

- 2 cards côte à côte desktop (Mission, Vision) sur fond pastel.

## B3 — Valeurs

- 4 items avec icônes + micro-texte, grille 2x2 desktop, 1 colonne mobile.

---

# C) PAGE “NOS SERVICES”

**Structure**

- Hero léger (titre + phrase + CTA)
- Sections par service (6 blocs) : chaque bloc = card large + liste bullet + CTA “Demander une proposition technique” site web structure 2e7e83735bd6…

**UI**

- Alternance fond clair / fond pastel entre blocs.
- Possibilité d’un mini menu latéral sticky (desktop) pour naviguer aux sections.

---

# D) PAGE “ÉTUDES DE CAS”

## D1 — Hero + intro

- Titre “Ils nous ont fait confiance”
- Filtres (chips) : Tous / Audit / Étude / Formation / Assistance

## D2 — Liste en cards

- Chaque card : Client, Nature de mission, Période
- Style inspiré “circular avatars / rings” possible mais adapté :
    - soit avatar/logo client rond + anneau orange

---

# E) PAGE “ÉQUIPE”

- Grille de profils (photo ronde + nom + rôle + mini bio)
- CTA section : “Prendre rendez-vous” site web structure 2e7e83735bd6…

---

# F) PAGE “CONTACT”

- Section principale : composant **Contact 2 colonnes** (form + blocs infos) inspiré capture.
- Ajout microcopy : “Réponse sous X heures/jours” (sobre).
- CTA : “Demander un diagnostic” + “Demander un devis” site web structure 2e7e83735bd6…

---

## 4) Responsive rules (exécutables)

### Mobile (priorité)

- Tout en 1 colonne.
- Hero : titre + CTA full-width, image dessous.
- Services : cards verticales.
- KPI : chiffres empilés.
- Témoignages : 1 card visible (carousel).
- Contact : form puis info blocks.

### Tablette

- Grilles 2 colonnes.
- Header avec burger possible ou menu réduit.

### Desktop

- Grilles 3 colonnes quand pertinent.
- Mise en avant visuelle (images + whitespace).

---

## 5) Micro-interactions (simples, premium)

- Hover cards : translateY(-4px), shadow +.
- Boutons : hover darken, focus ring accessible.
- Carousels : easing doux, drag mobile.
- Scroll reveal léger (optionnel) sur sections (fade + translate 12px).

---

## 6) Accessibilité & qualité

- Contraste : texte brun `#592512` sur fonds pastel.
- Taille minimum texte : 15–16px mobile.
- Inputs : labels visibles (pas uniquement placeholder).
- États : hover/focus/disabled définis.

---

## 7) Checklist de sortie (pour l’autre LLM)

- Générer : pages (Home, About, Services, Case Studies, Team, Contact)
- Respecter : palette, coins arrondis, alternance fonds, sections “bandeau fort”, testimonial dark + cards blanches, contact 2 colonnes responsive
- Injecter : contenus textuels fournis dans la structure site web structure 2e7e83735bd6…
- Responsive : mobile-first + breakpoints