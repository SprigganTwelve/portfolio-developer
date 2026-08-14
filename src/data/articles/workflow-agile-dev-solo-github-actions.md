# Introduction

Travailler seul sur un projet présente un avantage évident : il n'y a personne à attendre.

Mais cette liberté peut rapidement devenir un problème.

Sans équipe, sans chef de projet et sans deadline imposée, il est facile de commencer trop de fonctionnalités en même temps, modifier constamment ses priorités, passer plusieurs heures sur un détail sans réelle valeur ou accumuler du code non terminé.

L'objectif d'une organisation agile en solo n'est donc pas de reproduire les processus d'une équipe.

Il s'agit plutôt de construire un **système personnel suffisamment simple pour être réellement utilisé**.

GitHub peut parfaitement servir de colonne vertébrale à ce système.

```text
Idée
 ↓
Issue
 ↓
Priorité
 ↓
Branche
 ↓
Développement
 ↓
Pull Request
 ↓
GitHub Actions
 ↓
Merge
 ↓
Déploiement
 ↓
Feedback
 ↓
Nouvelle issue
```

---

## 1. Le principe : travailler par petites unités

La première règle est simple :

> **Ne pas travailler sur "le projet". Travailler sur une seule tâche à la fois.**

Une mauvaise organisation ressemble souvent à ceci :

```text
Projet
├── Authentification
├── Dashboard
├── Paiement
├── Notifications
├── Tests
├── Design
└── API
```

On peut plutôt transformer ces grandes catégories en tâches concrètes :

```text
[ ] Créer le modèle User
[ ] Ajouter POST /api/login
[ ] Créer le formulaire de connexion
[ ] Afficher les erreurs de connexion
[ ] Ajouter le logout
[ ] Ajouter les tests du login
```

Chaque élément devient une unité de travail qui peut être développée, testée, revue, fusionnée ou abandonnée.

---

## 2. GitHub comme tableau de bord du projet

Pour un développeur solo, GitHub peut centraliser plusieurs responsabilités :

```text
GitHub
│
├── Issues
│   └── Travail à réaliser
│
├── Projects
│   └── Vue globale du projet
│
├── Repository
│   └── Code source
│
├── Pull Requests
│   └── Revue et intégration
│
├── Actions
│   └── Automatisation
│
└── Releases
    └── Versions publiées
```

L'objectif est d'éviter de multiplier les outils. Un projet personnel n'a pas nécessairement besoin de Jira, Trello, Slack ou d'un outil CI séparé si GitHub suffit.

---

## 3. Commencer par une roadmap, pas par du code

Avant de commencer à développer, il est utile de définir une première version du produit.

On peut utiliser les GitHub Issues pour représenter les fonctionnalités.

```text
MVP
│
├── Authentication
│   ├── Login
│   ├── Register
│   └── Logout
│
├── Dashboard
│   ├── Display statistics
│   └── Display recent activity
│
└── Profile
    ├── Display profile
    └── Edit profile
```

Mais attention à ne pas transformer cette roadmap en contrat rigide.

Un projet personnel évolue. Une fonctionnalité peut être supprimée, remplacée, repoussée ou simplifiée.

La roadmap doit donc rester un outil de décision, pas une obligation.

---

## 4. Les Issues comme unité de travail

Chaque tâche importante devient une Issue GitHub.

Une bonne Issue doit répondre rapidement à trois questions :

### Pourquoi ?

Pourquoi cette fonctionnalité existe-t-elle ?

### Quoi ?

Qu'est-ce qui doit être développé ?

### Quand considérer la tâche terminée ?

Quels sont les critères d'acceptation ?

Par exemple :

```text
Title:
Add user login

Description:

## Goal

Allow users to authenticate themselves.

## Requirements

- Email + password form
- Display validation errors
- Call POST /api/login
- Store authentication token
- Redirect to dashboard

## Acceptance criteria

- [ ] Valid credentials authenticate the user
- [ ] Invalid credentials display an error
- [ ] Empty fields are rejected
- [ ] User is redirected after login
```

---

## 5. Ne pas créer une Issue pour tout

L'organisation peut elle-même devenir une source de procrastination.

Une bonne règle peut être :

> **Une Issue correspond à une unité de valeur identifiable.**

`Ajouter un bouton` n'a probablement pas besoin d'une Issue si c'est simplement une étape d'une fonctionnalité.

En revanche, `Permettre à l'utilisateur de modifier son profil` mérite probablement une Issue.

---

## 6. Un GitHub Project minimal

Un seul board peut suffire :

```text
BACKLOG        READY        IN PROGRESS        DONE
────────────────────────────────────────────────────

Issue #32      Issue #41     Issue #40          Issue #38
Issue #35      Issue #43                        Issue #37
Issue #36
```

Avec seulement quatre colonnes :

- **Backlog** : idées et tâches futures.
- **Ready** : tâches suffisamment définies pour être développées.
- **In Progress** : la tâche actuellement développée.
- **Done** : fonctionnalité terminée et intégrée.

Le point important est de limiter fortement `In Progress`.

---

## 7. La règle du WIP = 1

Pour un développeur solo, une règle particulièrement efficace est :

> **Une seule tâche importante en cours à la fois.**

Le multitâche donne souvent l'impression d'être productif, mais changer constamment de contexte coûte de l'énergie mentale.

Avec une seule tâche active :

```text
Issue
 ↓
Focus
 ↓
Implementation
 ↓
Tests
 ↓
Merge
 ↓
Next Issue
```

Le cycle devient beaucoup plus prévisible.

---

## 8. Créer une branche par fonctionnalité

Une fois l'Issue sélectionnée, créer une branche dédiée :

```bash
git checkout -b feature/user-login
```

ou :

```bash
git checkout -b fix/login-validation
```

Une convention simple peut être :

```text
feature/...
fix/...
refactor/...
docs/...
chore/...
```

Exemples :

```text
feature/user-dashboard
feature/password-reset
fix/mobile-navbar
refactor/api-client
docs/setup
chore/update-dependencies
```

---

## 9. Garder `main` toujours stable

Une règle particulièrement utile :

> **`main` doit toujours représenter une version utilisable du projet.**

Préférer :

```text
main
 │
 ├── feature/login
 │       │
 │       ├── commits
 │       ├── tests
 │       └── PR
 │
 └── merge
       ↓
      main
```

Cette règle rend également les déploiements beaucoup plus simples.

---

## 10. Les commits doivent raconter le travail

Éviter :

```text
update
fix
changes
test
stuff
```

Préférer :

```text
feat: add login form
feat: connect login form to API
fix: handle invalid credentials
test: add login validation tests
refactor: extract authentication service
```

Une convention comme Conventional Commits permet également d'automatiser certaines opérations par la suite.

---

## 11. La Pull Request même lorsqu'on est seul

Pourquoi créer une Pull Request si personne ne va faire la review ?

Parce qu'elle permet de créer un **point de contrôle artificiel**.

```text
code
 ↓
PR
 ↓
review personnelle
 ↓
tests
 ↓
merge
```

Avant de merger :

```text
□ Est-ce que la fonctionnalité fonctionne ?
□ Est-ce que les tests passent ?
□ Est-ce que le code est compréhensible ?
□ Est-ce que j'ai introduit une dette technique ?
□ Est-ce que cette solution est plus complexe que nécessaire ?
□ Est-ce que j'ai oublié un cas particulier ?
```

La Pull Request devient ainsi une **pause volontaire avant l'intégration**.

---

## 12. GitHub Actions : automatiser les vérifications

GitHub Actions permet d'exécuter automatiquement des workflows lorsqu'un événement se produit.

```text
Push
 ↓
GitHub Actions
 ↓
Install dependencies
 ↓
Lint
 ↓
Tests
 ↓
Build
 ↓
Success / Failure
```

Le développeur n'a donc plus besoin de se rappeler systématiquement :

```bash
npm run lint
npm test
npm run build
```

La machine le fait automatiquement.

---

## 13. Une première GitHub Action

Dans `.github/workflows/ci.yml` :

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Build
        run: npm run build
```

Le workflow devient :

```text
Pull Request
     ↓
GitHub Actions
     ↓
 ┌───────────┐
 │   Lint    │
 ├───────────┤
 │   Tests   │
 ├───────────┤
 │   Build   │
 └───────────┘
     ↓
   Success
     ↓
   Merge
```

---

## 14. Faire de GitHub Actions une barrière

Une bonne pratique consiste à empêcher le merge si la CI échoue.

```text
PR
 │
 ▼
CI
 │
 ├── ❌ Tests
 └── ❌ Build
       ↓
    Pas de merge
```

ou :

```text
PR
 │
 ▼
CI
 │
 ├── ✓ Lint
 ├── ✓ Tests
 └── ✓ Build
       ↓
    Merge
```

Même seul, cela apporte une forme de discipline.

---

## 15. Automatiser le déploiement

Une fois `main` mis à jour :

```text
Merge
  ↓
GitHub Actions
  ↓
Build
  ↓
Deploy
  ↓
Production
```

Cela permet d'obtenir un système de **Continuous Deployment**.

```text
feature/login
      ↓
Pull Request
      ↓
CI
      ↓
Merge main
      ↓
Deploy
      ↓
Production
```

Le déploiement devient une conséquence du workflow plutôt qu'une tâche supplémentaire à réaliser manuellement.

---

## 16. Le workflow quotidien

### Étape 1 — Choisir une Issue

```text
BACKLOG
   ↓
READY
   ↓
IN PROGRESS
```

### Étape 2 — Créer la branche

```bash
git checkout -b feature/nom-de-la-feature
```

### Étape 3 — Développer

Faire de petits commits cohérents.

### Étape 4 — Tester localement

```bash
npm run lint
npm test
npm run build
```

### Étape 5 — Push

```bash
git push -u origin feature/nom-de-la-feature
```

### Étape 6 — Pull Request

GitHub Actions démarre automatiquement.

### Étape 7 — Review personnelle

Vérifier :

```text
Code
Tests
UX
Security
Performance
Complexity
```

### Étape 8 — Merge

La branche rejoint `main`.

### Étape 9 — Déploiement

GitHub Actions déploie automatiquement si le projet est configuré ainsi.

### Étape 10 — Passer à l'Issue suivante

Et le cycle recommence.

---

## 17. Une routine hebdomadaire

Une fois par semaine, prendre environ 20 à 30 minutes pour faire une revue.

Questions à se poser :

```text
Qu'est-ce que j'ai réellement terminé ?
Qu'est-ce qui bloque ?
Qu'est-ce qui n'est plus important ?
Quelle est la prochaine fonctionnalité utile ?
Est-ce que le projet est toujours pertinent ?
```

Puis nettoyer le backlog.

On peut utiliser trois catégories :

```text
NOW
NEXT
LATER
```

- **NOW** : ce qui doit être fait maintenant.
- **NEXT** : ce qui vient ensuite.
- **LATER** : idées intéressantes mais non prioritaires.

---

## 18. La règle "Finish before starting"

Une règle particulièrement utile pour les projets personnels :

> **Terminer avant de commencer quelque chose de nouveau.**

Plutôt que de travailler simultanément sur Login, Dashboard, Notifications et Settings :

```text
Login
 ↓
DONE

Dashboard
 ↓
DONE

Notifications
 ↓
DONE

Settings
 ↓
DONE
```

Cela permet de générer un sentiment de progression beaucoup plus concret.

---

## 19. Mesurer la progression autrement que par le temps

Passer cinq heures sur un projet ne signifie pas forcément avoir progressé.

Il est plus intéressant de mesurer :

```text
Issues completed
Features shipped
Bugs fixed
Releases
```

Par exemple :

```text
Sprint personnel

✓ Authentication
✓ Dashboard
✓ User profile
○ Notifications
○ Settings
```

La question devient :

> "Qu'est-ce que j'ai livré ?"

plutôt que :

> "Combien d'heures ai-je travaillé ?"

---

## 20. Le backlog n'est pas une liste de rêves

Un piège fréquent dans les projets personnels est d'ajouter constamment des idées :

```text
"Ce serait cool d'ajouter..."
"Et si je faisais..."
"Je pourrais aussi..."
```

Le backlog grossit alors beaucoup plus vite que le projet.

Une solution simple consiste à créer une Issue :

```text
💡 Idea: Add AI recommendations
```

Puis la laisser dans `LATER`.

Cela permet de conserver l'idée sans lui donner immédiatement une priorité.

---

## 21. Les releases comme points de respiration

Lorsqu'une fonctionnalité importante est terminée, créer une release :

```text
v0.1.0
Initial MVP

v0.2.0
Authentication

v0.3.0
Dashboard

v0.4.0
Analytics
```

Les releases permettent de regarder le projet avec davantage de recul.

Au lieu de voir :

```text
247 commits
```

on peut voir :

```text
v0.1 → v0.2 → v0.3 → v0.4
```

Le projet devient une succession de versions plutôt qu'un flux continu de modifications.

---

## 22. Ne pas sur-ingénieriser son organisation

L'organisation elle-même peut devenir une forme de procrastination.

Il est facile de passer une journée à créer 15 labels, 8 workflows, 4 templates, une documentation de 30 pages ou un dashboard personnel alors que le projet n'a toujours pas avancé.

Le système minimal devrait plutôt être :

```text
GitHub Issue
     ↓
Branch
     ↓
Code
     ↓
Pull Request
     ↓
GitHub Actions
     ↓
Merge
     ↓
Deploy
```

C'est suffisant pour commencer.

---

## 23. Le workflow minimal recommandé

```text
                    ┌──────────────┐
                    │    IDEE      │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    ISSUE     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    READY     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    BRANCH    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ DEVELOPMENT  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │      PR      │
                    └──────┬───────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │   GITHUB ACTIONS   │
                 │                    │
                 │ Lint / Tests / Build│
                 └─────────┬──────────┘
                           │
                     ┌─────┴─────┐
                     │           │
                    FAIL       SUCCESS
                     │           │
                     ▼           ▼
                   Fix        MERGE
                                 │
                                 ▼
                              DEPLOY
                                 │
                                 ▼
                              RELEASE
                                 │
                                 ▼
                            NEXT ISSUE
```

---

## 24. Les 20 % à retenir

Si tout cet article devait être résumé en quelques règles :

### 1. Une seule tâche importante à la fois

Limiter le Work In Progress.

### 2. Une Issue = une unité de valeur

Ne pas créer des tickets artificiels.

### 3. Une branche par fonctionnalité

Ne pas casser `main`.

### 4. Une Pull Request avant le merge

Même lorsque l'on est seul.

### 5. Automatiser les vérifications

Lint, tests et build doivent être exécutés automatiquement.

### 6. Déployer automatiquement lorsque c'est possible

Le moins d'étapes manuelles possible.

### 7. Faire une revue hebdomadaire

Nettoyer le backlog et choisir la prochaine priorité.

### 8. Garder le système simple

L'objectif est de faire avancer le projet, pas de devenir administrateur de son propre système de productivité.

---

## Conclusion

Être développeur solo ne signifie pas devoir travailler sans méthodologie.

Au contraire, une organisation minimale permet de profiter de la liberté du développement individuel sans tomber dans le chaos.

L'objectif n'est pas de reproduire Scrum ou une méthodologie destinée aux grandes équipes.

Il s'agit plutôt de construire une boucle simple :

```text
Plan
 ↓
Build
 ↓
Test
 ↓
Review
 ↓
Ship
 ↓
Learn
 ↓
Plan again
```

GitHub peut être au centre de cette boucle.

Les Issues permettent de définir le travail, les branches isolent les changements, les Pull Requests offrent un point de contrôle, GitHub Actions automatise les vérifications et le déploiement transforme le code validé en version utilisable.

Le plus important reste cependant la discipline personnelle.

Un bon workflow ne doit pas rendre le développement plus lourd.

Il doit permettre de **réduire la charge mentale**, savoir précisément ce que l'on doit faire maintenant et terminer régulièrement de petites unités de travail.

Pour un projet personnel, c'est probablement l'une des formes d'agilité les plus utiles :

> **moins de processus, plus de clarté ; moins de multitâche, plus de fonctionnalités livrées.**
