# Introduction

Travailler seul offre beaucoup de liberté, mais aussi un risque : se disperser.

L'objectif n'est pas de reproduire une méthodologie Agile d'équipe, mais de créer un **workflow simple, léger et répétable**.

Avec GitHub, on peut organiser l'essentiel du cycle :

```text
Idée → Issue → Branch → Code → PR → CI → Merge → Deploy
```

---

## 1. Une Issue = une tâche claire

Avant de coder, transformer le besoin en une Issue GitHub.

Une bonne Issue doit définir :

- **le problème** à résoudre ;
- **ce qui doit être développé** ;
- **les critères de réussite**.

Exemple :

```text
# Add user login

## Goal
Allow users to authenticate themselves.

## Requirements
- Login form
- API call
- Error handling
- Redirect after login

## Acceptance criteria
- [ ] Valid credentials work
- [ ] Invalid credentials display an error
- [ ] Empty fields are rejected
```

L'idée est de savoir exactement ce que signifie "terminé".

---

## 2. Limiter le travail en cours

Pour un développeur solo :

> **Une seule fonctionnalité importante à la fois.**

Éviter :

```text
IN PROGRESS

Login
Dashboard
Notifications
Settings
```

Préférer :

```text
IN PROGRESS

Login
```

Puis :

```text
Login
 ↓
DONE

Dashboard
 ↓
DONE
```

Limiter le **WIP (Work In Progress)** réduit les changements de contexte et facilite la progression.

---

## 3. Une branche par fonctionnalité

Chaque Issue importante possède sa propre branche :

```bash
git checkout -b feature/user-login
```

Convention simple :

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
fix/login-validation
refactor/api-client
```

La branche permet de développer sans mettre `main` dans un état instable.

---

## 4. Garder `main` stable

Une règle simple :

> **`main` doit toujours représenter une version utilisable du projet.**

Le workflow devient :

```text
main
 │
 └── feature/user-login
       │
       ├── commits
       ├── tests
       └── Pull Request
              │
              ▼
            merge
              │
              ▼
             main
```

Même seul, la Pull Request apporte un point de contrôle avant l'intégration.

---

## 5. Utiliser GitHub Actions pour automatiser

GitHub Actions peut automatiquement exécuter :

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

Exemple minimal :

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
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

Si la CI échoue, le code doit être corrigé avant le merge.

---

## 6. Automatiser le déploiement

Une fois la branche fusionnée dans `main`, le déploiement peut également être automatisé :

```text
Pull Request
     ↓
CI
     ↓
Merge main
     ↓
Build
     ↓
Deploy
     ↓
Production
```

Le déploiement devient une conséquence naturelle du workflow plutôt qu'une tâche manuelle supplémentaire.

---

## 7. Le workflow quotidien

Le cycle peut rester très simple :

```text
1. Choisir une Issue
        ↓
2. Créer une branche
        ↓
3. Développer
        ↓
4. Tester
        ↓
5. Créer une Pull Request
        ↓
6. Laisser GitHub Actions vérifier
        ↓
7. Corriger si nécessaire
        ↓
8. Merge
        ↓
9. Deploy
        ↓
10. Passer à l'Issue suivante
```

L'objectif est de répéter ce cycle plutôt que de chercher constamment une nouvelle méthode d'organisation.

---

## 8. Une courte revue chaque semaine

Une fois par semaine, prendre quelques minutes pour répondre à trois questions :

```text
Qu'est-ce que j'ai terminé ?
Qu'est-ce qui est réellement prioritaire ?
Quelle est la prochaine fonctionnalité à livrer ?
```

On peut simplement organiser le backlog en :

```text
NOW
NEXT
LATER
```

Les nouvelles idées vont dans `LATER` plutôt que d'interrompre la tâche actuelle.

---

## 9. Les règles essentielles

Si tout le workflow devait être résumé :

1. **Une tâche importante à la fois.**
2. **Une Issue doit avoir un objectif clair.**
3. **Une branche par fonctionnalité ou correction.**
4. **`main` doit rester stable.**
5. **Une Pull Request avant le merge.**
6. **Automatiser lint, tests et build avec GitHub Actions.**
7. **Automatiser le déploiement lorsque c'est possible.**
8. **Revoir régulièrement les priorités.**

---

## Conclusion

Être développeur solo ne nécessite pas une méthodologie complexe.

Un système efficace peut tenir en quelques étapes :

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
```

GitHub fournit déjà la majorité des outils nécessaires pour mettre cette boucle en place.

Le but n'est pas d'ajouter du processus au développement, mais de **réduire la charge mentale**, rester concentré sur une tâche et livrer régulièrement.

> **Moins de multitâche, moins de processus, plus de fonctionnalités livrées.**
