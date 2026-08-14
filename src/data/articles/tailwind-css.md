# Introduction

Écrire du CSS est relativement simple.

Écrire du **CSS maintenable dans une application qui grandit** est une autre histoire.

À mesure qu'un projet React se développe, les styles peuvent rapidement se multiplier : fichiers CSS, conventions de nommage, classes spécifiques, media queries, variantes de composants, overrides...

C'est dans ce contexte que **Tailwind CSS** propose une approche différente : plutôt que d'écrire principalement des règles CSS personnalisées, on compose directement les interfaces avec de petites classes utilitaires.

```tsx
<button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
  Se connecter
</button>
```

Le principe peut sembler étrange au premier abord.

Pourquoi mettre autant de classes dans le JSX alors que CSS permet justement de séparer le style du HTML ?

Parce que Tailwind ne cherche pas simplement à rendre le CSS plus court. Il cherche surtout à **rendre la construction d'interfaces plus systématique, prévisible et rapide**.

Dans cet article, nous allons voir :

- d'où vient Tailwind CSS ;
- les concepts qui représentent réellement le "20 %" à connaître ;
- comment l'utiliser efficacement avec React ;
- ce qu'il change par rapport au CSS classique ;
- et pourquoi Tailwind Labs traverse actuellement une période particulièrement intéressante à observer.

---

# 1. Tailwind CSS en quelques mots

> Tailwind CSS est un framework CSS **utility-first**.

Au lieu de créer une classe représentant un composant :

```css
.button-primary {
     background: #2563eb;
     color: white;
     padding: 8px 16px;
     border-radius: 8px;
}
```

puis :

```html
<button class="button-primary">Se connecter</button>
```

Tailwind propose de composer directement les propriétés :

```html
<button class="bg-blue-600 px-4 py-2 text-white rounded-lg">Se connecter</button>
```

Chaque classe représente généralement une responsabilité très précise :

```text
bg-blue-600     → couleur de fond
px-4            → padding horizontal
py-2            → padding vertical
text-white      → couleur du texte
rounded-lg      → border-radius
```

L'idée fondamentale est donc :

> **Construire les interfaces en combinant de petites primitives plutôt qu'en créant constamment de nouvelles classes CSS.**

Cette philosophie est aujourd'hui très présente dans l'écosystème React et dans de nombreux outils de génération d'interfaces.

---

# 2. Une histoire qui commence presque par accident

Tailwind CSS est créé par **Adam Wathan**, avec notamment **Steve Schoger**, et voit le jour en 2017.

À l'origine, Tailwind n'est pas pensé comme le produit commercial majeur qu'il deviendra.

Le framework provient en partie des problèmes rencontrés par Wathan lorsqu'il travaillait sur ses propres interfaces : il accumulait du CSS et cherchait une manière plus rapide et plus cohérente de construire des interfaces personnalisées.

La première version de Tailwind est publiée en 2017 comme un framework CSS orienté utilitaires.

Le projet grandit ensuite rapidement grâce à son approche différente des frameworks comme Bootstrap.

En 2020, Adam Wathan expliquait déjà que Tailwind avait dépassé les **10 millions d'installations cumulées** et que Tailwind UI, leur premier produit commercial, approchait les **2 millions de dollars de revenus**.

C'est progressivement que l'entreprise **Tailwind Labs** se structure autour de l'écosystème :

```text
Tailwind CSS
     │
     ├── Open Source Framework
     │
     ├── Documentation
     │
     └── Produits commerciaux
          ├── UI components
          ├── Templates
          └── autres produits
```

Le succès de Tailwind repose donc sur un paradoxe intéressant :

> Le framework est gratuit et open source, mais son écosystème permet à Tailwind Labs de construire un business autour de produits complémentaires.

Et c'est précisément ce modèle qui va être fortement perturbé par l'arrivée de l'IA générative.

Nous y reviendrons.

---

# 3. Les 20 % de Tailwind à connaître

Il n'est pas nécessaire de connaître des centaines de classes pour commencer à être productif.

Une grande partie du travail quotidien repose sur quelques concepts fondamentaux.

On peut les résumer en **six blocs** :

```text
1. Layout
2. Spacing
3. Typography
4. Colors & borders
5. Responsive design
6. States & variants
```

Si ces concepts sont maîtrisés, une grande partie des interfaces courantes devient beaucoup plus simple à implémenter.

---

# 4. Layout : construire la structure

La première chose à maîtriser est le layout.

Les classes les plus importantes sont notamment :

```text
block
inline
flex
grid
hidden
relative
absolute
```

### Flexbox

Exemple :

```tsx
<div className="flex items-center justify-between">
     <span>Logo</span>
     <nav>Menu</nav>
</div>
```

Ce qui correspond approximativement à :

```css
display: flex;
align-items: center;
justify-content: space-between;
```

Quelques classes à retenir :

| Tailwind | CSS |
|---|---|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `items-center` | `align-items: center` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `gap-4`           | `gap: 1rem`                      |

### Grid

Pour des interfaces plus structurées :

```tsx
<div className="grid grid-cols-3 gap-6">
  ...
</div>
```

Cela permet de construire rapidement des dashboards, galeries ou grilles de cartes.

---

# 5. Spacing : le système qui change tout

Tailwind fournit une échelle de spacing cohérente.

On retrouve constamment :

```text
p-2
p-4
p-6
p-8

m-2
m-4
m-6

gap-2
gap-4
gap-6
```

Par exemple :

```tsx
<div className="p-6">
     <div className="flex gap-4">...</div>
</div>
```

Au lieu de réfléchir à chaque fois :

> "Est-ce que je mets 17px, 18px ou 20px ?"

on travaille avec une échelle cohérente.

C'est l'un des avantages les plus importants de Tailwind : **le framework impose implicitement une discipline visuelle**.

---

# 6. Typography

Les classes principales :

```text
text-sm
text-base
text-lg
text-xl
text-2xl
text-4xl
```

Puis :

```text
font-normal
font-medium
font-semibold
font-bold
```

Et :

```text
text-left
text-center
text-right
```

Exemple :

```tsx
<h1 className="text-4xl font-bold tracking-tight">Build better interfaces.</h1>
```

On peut également contrôler :

```text
leading-tight
leading-normal
tracking-tight
uppercase
```

---

# 7. Couleurs, bordures et effets

Une autre partie extrêmement fréquente :

```text
bg-blue-600
text-white
border-gray-200
rounded-lg
shadow-md
```

Exemple :

```tsx
<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">...</div>
```

On obtient rapidement un composant visuellement cohérent sans avoir à écrire une feuille CSS dédiée.

---

# 8. Responsive Design : probablement l'une des fonctionnalités les plus puissantes

Tailwind adopte une approche **mobile-first**.

On écrit d'abord le comportement mobile :

```tsx
<div className="text-center">
```

puis on ajoute des variantes pour les écrans plus grands :

```tsx
<div className="text-center md:text-left">
```

Cela signifie :

```text
Mobile
  ↓
text-center

À partir de md
  ↓
text-left
```

On peut combiner plusieurs breakpoints :

```tsx
<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
">
```

Ce qui donne :

```text
Mobile       → 1 colonne
Tablette     → 2 colonnes
Desktop      → 3 colonnes
```

Tailwind permet ainsi de gérer les breakpoints directement dans les classes utilitaires.

C'est particulièrement intéressant dans React, où un composant peut encapsuler toute sa logique de présentation.

---

# 9. Les variants : hover, focus, dark mode...

C'est probablement le deuxième gros concept à retenir.

Tailwind permet de préfixer une classe par un état :

```text
hover:
focus:
active:
disabled:
dark:
```

Exemple :

```tsx
<button
     className="
  bg-blue-600
  hover:bg-blue-700
  focus:ring-2
  disabled:opacity-50
"
>
     Envoyer
</button>
```

On peut donc décrire plusieurs états directement au même endroit.

### Dark mode

Même principe :

```tsx
<div className="
  bg-white
  text-gray-900
  dark:bg-gray-900
  dark:text-white
">
```

Tailwind documente directement cette approche par variants.

---

# 10. Le vrai super-pouvoir avec React : les composants

C'est ici qu'il faut éviter une erreur fréquente.

Tailwind ne signifie pas :

> "Je mets 40 classes dans chaque composant et je ne factorise jamais rien."

Au contraire.

React permet justement de transformer les compositions Tailwind répétées en composants.

Par exemple :

```tsx
function Button({ children }) {
  return (
    <button
      className="
        rounded-lg
        bg-blue-600
        px-4
        py-2
        font-medium
        text-white
        hover:bg-blue-700
      "
    >
      {children}
    </button>
  );
}
```

Puis :

```tsx
<Button>Se connecter</Button>
```

La combinaison devient alors :

```text
Tailwind
   +
React Components
   =
UI réutilisable
```

C'est cette combinaison qui rend Tailwind particulièrement efficace dans une application React.

---

# 11. CSS3 vs Tailwind CSS

Tailwind n'est pas un remplacement du CSS.

C'est une autre manière d'organiser son utilisation.

Comparons.

## CSS classique

On peut écrire :

```css
.card {
     padding: 24px;
     border-radius: 12px;
     background: white;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card-title {
     font-size: 20px;
     font-weight: 600;
}
```

Puis :

```tsx
<div className="card">
  <h2 className="card-title">
    Mon projet
  </h2>
</div>
```

Cela fonctionne parfaitement.

Mais dans une application importante, il faut progressivement gérer :

- conventions de nommage ;
- fichiers CSS ;
- dépendances entre classes ;
- overrides ;
- responsive rules ;
- variantes ;
- duplication.

---

# 12. Avec Tailwind

Le même composant peut devenir :

```tsx
<div className="
  rounded-xl
  bg-white
  p-6
  shadow-sm
">
  <h2 className="
    text-xl
    font-semibold
  ">
    Mon projet
  </h2>
</div>
```

Le style est directement associé au composant.

Cela réduit notamment le besoin de naviguer entre plusieurs fichiers pour comprendre comment un élément est stylé.

---

# 13. Là où Tailwind accélère réellement le développement

## 1. Moins de contexte à changer

Avec CSS traditionnel :

```text
Component.tsx
     ↓
styles.css
     ↓
media query
     ↓
retour Component.tsx
```

Avec Tailwind :

```text
Component.tsx
     ↓
classes Tailwind
```

Le développeur peut généralement modifier la structure et le style au même endroit.

---

## 2. Responsive directement dans le composant

CSS classique :

```css
.card {
     width: 100%;
}

@media (min-width: 768px) {
     .card {
          width: 50%;
     }
}
```

Tailwind :

```tsx
<div className="w-full md:w-1/2">
```

---

## 3. Les variantes deviennent lisibles

CSS :

```css
.button:hover {
     background: #1d4ed8;
}

.button:disabled {
     opacity: 0.5;
}
```

Tailwind :

```tsx
<button className="
  bg-blue-600
  hover:bg-blue-700
  disabled:opacity-50
">
```

---

# 14. Mais Tailwind n'est pas magique

Il possède aussi des défauts.

### Des class names très longs

```tsx
<div className="
  flex
  min-h-screen
  items-center
  justify-center
  bg-slate-950
  px-6
  py-12
">
```

Cela peut devenir difficile à lire.

### Risque de duplication

Si la même combinaison apparaît partout :

```text
px-4 py-2 rounded-lg bg-blue-600 ...
```

il faut probablement créer un composant.

### Courbe d'apprentissage

Au début, il faut apprendre le vocabulaire :

```text
p-4 ?
px-6 ?
gap-4 ?
items-center ?
justify-between ?
```

Mais cette difficulté disparaît assez rapidement avec la pratique.

---

# 15. Le principe 80/20 à retenir

Si je devais réduire Tailwind à une fiche mémoire :

```text
LAYOUT
flex / grid / absolute / relative

SPACING
p-* / m-* / gap-*

SIZE
w-* / h-* / max-w-*

TYPOGRAPHY
text-* / font-* / leading-* / tracking-*

COLORS
bg-* / text-* / border-*

DECORATION
rounded-* / shadow-* / ring-*

RESPONSIVE
sm: / md: / lg: / xl:

STATES
hover: / focus: / active: / disabled:

THEME
dark:

REUSE
React components
```

Avec ça, on peut déjà construire une immense majorité des interfaces d'une application React moderne.

---

# 16. Tailwind Labs face à l'IA : un paradoxe particulièrement intéressant

C'est probablement la partie la plus surprenante de l'histoire récente de Tailwind.

En janvier 2026, Adam Wathan a annoncé que Tailwind Labs avait licencié **3 de ses 4 ingénieurs**, soit environ **75 % de son équipe d'ingénierie**.

La raison donnée est particulièrement paradoxale :

> Tailwind est plus populaire que jamais, mais son activité commerciale souffre fortement de l'essor de l'IA.

Selon les chiffres communiqués par Wathan, le trafic vers la documentation avait diminué d'environ **40 % par rapport au début de 2023**, tandis que les revenus avaient chuté de près de **80 %**.

Le framework, lui, n'a pas disparu.

C'est précisément ce qui rend la situation intéressante.

---

# 17. Pourquoi l'IA peut-elle faire autant de mal à Tailwind Labs ?

Le problème n'est pas simplement :

> "Les développeurs utilisent ChatGPT au lieu de Tailwind."

C'est plus subtil.

Historiquement, la documentation de Tailwind jouait plusieurs rôles :

```text
Documentation
      ↓
Découverte de Tailwind
      ↓
Apprentissage
      ↓
Visite du site
      ↓
Découverte des produits commerciaux
      ↓
Achat
```

Avec les assistants IA et les outils de développement modernes :

```text
Développeur
     ↓
Claude / ChatGPT / Copilot / Cursor / etc.
     ↓
"Comment faire cette interface avec Tailwind ?"
     ↓
Réponse + code
```

Le développeur peut obtenir directement :

```tsx
className="
  flex
  items-center
  justify-between
  rounded-xl
  bg-white
  p-6
"
```

sans nécessairement visiter la documentation officielle.

Le produit open source peut donc devenir **plus populaire tout en générant moins de valeur commerciale pour l'entreprise qui le maintient**.

C'est un problème de modèle économique, pas nécessairement un problème de technologie.

---

# 18. Le paradoxe de l'IA

La situation peut être résumée ainsi :

```text
             IA
              │
       ┌──────┴──────┐
       ↓             ↓
Utilisation       Trafic web
   ↑                  ↓
Tailwind          Documentation
   ↑                  ↓
Popularité         Produits
   ↑                  ↓
   └────────────── Revenus ↓
```

C'est un exemple particulièrement intéressant d'un phénomène plus large :

> **L'IA peut augmenter l'utilisation d'un produit tout en détruisant certains mécanismes économiques qui permettaient de financer ce produit.**

Dans le cas de Tailwind, Wathan a expliqué que le framework continuait à croître alors que les revenus avaient fortement diminué.

Ce phénomène dépasse donc largement Tailwind.

Il concerne potentiellement :

- la documentation technique ;
- les médias ;
- les blogs spécialisés ;
- les plateformes éducatives ;
- les projets open source ;
- les entreprises qui monétisent l'audience plutôt que directement le logiciel.

---

# 19. Est-ce la fin de Tailwind CSS ?

Non.

Il faut faire attention à ne pas confondre :

```text
Tailwind Labs ≠ Tailwind CSS
```

Tailwind CSS reste un projet open source très utilisé.

Le problème concerne principalement **la viabilité économique de l'entreprise qui se trouve derrière l'écosystème**, et non l'existence immédiate du framework.

Le cas Tailwind est même particulièrement intéressant parce que l'IA peut contribuer à rendre Tailwind encore plus facile à utiliser.

Un développeur peut demander :

> "Crée-moi une card responsive en Tailwind avec un état hover et un dark mode."

Et obtenir immédiatement :

```tsx
<div className="
  rounded-xl
  border
  border-slate-200
  bg-white
  p-6
  shadow-sm
  transition
  hover:-translate-y-1
  hover:shadow-md
  dark:border-slate-700
  dark:bg-slate-900
">
```

L'IA devient donc simultanément :

**un accélérateur d'adoption et un concurrent potentiel du parcours commercial.**

---

# 20. Ce que cette histoire nous apprend en tant que développeurs

Cette actualité est intéressante au-delà de Tailwind.

Elle montre notamment que :

### Une technologie populaire n'est pas forcément un business rentable.

Tailwind peut être extrêmement utilisé tout en générant moins de revenus pour son entreprise.

### L'IA change également la manière d'apprendre.

Avant :

```text
Google
↓
Documentation
↓
Stack Overflow
↓
Exemple
↓
Code
```

Aujourd'hui :

```text
Prompt
↓
IA
↓
Explication
↓
Code
```

### Les développeurs doivent comprendre les abstractions.

Plus les outils deviennent capables de générer du code, plus il devient important de comprendre **ce que le code généré fait réellement**.

Connaître Tailwind ne signifie donc pas mémoriser toutes ses classes.

Cela signifie comprendre :

```text
CSS
   ↓
Utility classes
   ↓
Responsive design
   ↓
Variants
   ↓
Component architecture
```

---

# Conclusion

Tailwind CSS peut sembler compliqué au premier regard.

Des dizaines de classes dans un JSX donnent parfois l'impression d'aller à l'encontre des principes traditionnels du CSS.

Mais une fois son modèle mental compris, l'approche devient beaucoup plus simple :

> **des primitives CSS → combinées → dans des composants réutilisables → avec des variantes responsives.**

Pour utiliser efficacement Tailwind dans un projet React, il n'est pas nécessaire de connaître toute la documentation.

Les concepts essentiels sont :

```text
Flexbox / Grid
Spacing
Typography
Colors
Sizing
Responsive variants
States
Dark mode
Componentisation React
```

Le véritable intérêt de Tailwind n'est donc pas de remplacer CSS.

C'est de fournir **un langage de composition cohérent autour de CSS**, particulièrement adapté à la construction rapide d'interfaces avec des frameworks comme React.

Et son actualité récente ajoute une dimension intéressante à cette technologie : Tailwind est devenu suffisamment populaire pour que des outils d'IA sachent eux-mêmes générer son code, au point de perturber le modèle économique de l'entreprise qui le développe.

C'est peut-être la leçon la plus intéressante de cette veille :

> **Une technologie peut être techniquement plus populaire que jamais tout en devant réinventer la manière dont elle crée de la valeur dans un monde dominé par l'IA.**

---

## Pour aller plus loin

- [Documentation officielle de Tailwind CSS](https://tailwindcss.com/)
- [Documentation — Utility Classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Documentation — Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Histoire de Tailwind CSS par Adam Wathan](https://adamwathan.me/tailwindcss-from-side-project-byproduct-to-multi-mullion-dollar-business/)
- [Retour d'Adam Wathan sur la situation de Tailwind Labs en 2026](https://simonwillison.net/2026/Jan/7/adam-wathan/)
