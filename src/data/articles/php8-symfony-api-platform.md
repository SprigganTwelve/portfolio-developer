# Introduction

Lorsqu'une application possède un front-end moderne comme React, Vue ou Angular, il est souvent nécessaire de disposer d'une API capable de gérer les données et la logique métier.

Créer une API REST avec Symfony est parfaitement possible en partant de zéro. Mais cela implique rapidement de gérer soi-même les routes, les contrôleurs, la sérialisation, la validation, les erreurs, la documentation et la sécurité.

C'est précisément là qu'intervient **API Platform**.

API Platform est un framework construit autour de Symfony qui permet de transformer rapidement des ressources PHP en endpoints REST documentés et exploitables par un front-end.

L'objectif de cet article est de comprendre le processus complet :

1. Créer un projet Symfony.
2. Installer API Platform.
3. Créer une ressource.
4. Générer automatiquement les opérations REST.
5. Valider les données reçues.
6. Contrôler les données exposées.
7. Sécuriser les endpoints.
8. Tester l'API.
9. La connecter à un front-end React.

---

## 1. Pourquoi utiliser API Platform ?

Créer manuellement une API REST nécessite généralement de construire plusieurs briques :

- les routes HTTP ;
- les contrôleurs ;
- la sérialisation JSON ;
- la validation ;
- la gestion des erreurs ;
- les opérations CRUD ;
- la documentation ;
- l'authentification ;
- les autorisations ;
- la gestion des relations entre ressources.

API Platform fournit une grande partie de cette infrastructure.

Une ressource PHP peut ainsi devenir une ressource API simplement en lui ajoutant l'attribut `#[ApiResource]`.

L'intérêt principal n'est donc pas seulement de gagner du temps.

API Platform permet également de conserver une architecture cohérente avec Symfony tout en bénéficiant d'outils standards comme HTTP, OpenAPI, JSON et les composants Symfony.

---

## 2. Préparer le projet Symfony

Commençons par créer une application Symfony.

```bash
symfony new api-demo --webapp
cd api-demo
```

Puis installons API Platform :

```bash
composer require api
```

API Platform ajoute les composants nécessaires à la création et à l'exposition de l'API.

---

## 3. Créer notre première ressource

Prenons un exemple simple.

Notre application devra gérer des livres.

Nous voulons pouvoir :

- récupérer la liste des livres ;
- récupérer un livre ;
- créer un livre ;
- modifier un livre ;
- supprimer un livre.

Créons une entité Doctrine :

```bash
php bin/console make:entity Book
```

Avec par exemple :

```text
title       string
author      string
description text
publishedAt datetime
```

Notre classe peut ensuite ressembler à ceci :

```php
<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ApiResource]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $title;

    #[ORM\Column(length: 255)]
    private string $author;

    #[ORM\Column(type: 'text')]
    private string $description;

    // Getters & setters...
}
```

La ligne importante est :

```php
#[ApiResource]
```

Elle indique à API Platform que cette classe doit être exposée comme une ressource de l'API.

---

## 4. Le CRUD est généré automatiquement

À partir de cette simple déclaration, API Platform peut exposer les opérations REST classiques.

On obtient notamment :

```text
GET    /api/books
GET    /api/books/{id}

POST   /api/books

PUT    /api/books/{id}
PATCH  /api/books/{id}

DELETE /api/books/{id}
```

On n'a donc pas besoin de créer manuellement un contrôleur pour chacune de ces opérations.

API Platform s'occupe de faire le lien entre :

```text
HTTP Request
     ↓
API Platform
     ↓
Doctrine
     ↓
Book
     ↓
Serializer
     ↓
JSON Response
```

---

## 5. Tester l'API

Une fois le serveur Symfony lancé :

```bash
symfony server:start
```

nous pouvons accéder à :

```text
/api/books
```

Une requête :

```http
GET /api/books
```

peut alors retourner une réponse JSON représentant les ressources disponibles.

API Platform génère également une documentation interactive de l'API.

Cette documentation permet de consulter les endpoints disponibles et de tester directement les différentes opérations HTTP.

C'est particulièrement pratique pendant le développement puisqu'elle sert également de contrat entre le back-end et le front-end.

---

## 6. Le rôle du Serializer

Une API ne renvoie pas directement les objets PHP au client.

Il faut transformer :

```text
Objet PHP
   ↓
Tableau de données
   ↓
JSON
```

C'est le rôle du Serializer Symfony.

API Platform s'appuie sur le Serializer pour transformer les ressources en différentes représentations.

Le format JSON peut notamment être utilisé pour communiquer avec un front-end JavaScript.

---

## 7. Contrôler les données exposées

Il serait dangereux de simplement exposer toutes les propriétés d'une entité.

Imaginons une ressource `User` :

```php
class User
{
    private string $email;

    private string $password;

    private string $role;
}
```

Nous ne voulons évidemment pas renvoyer le mot de passe au front-end.

API Platform permet d'utiliser les groupes de sérialisation afin de contrôler les propriétés exposées.

Par exemple :

```php
use Symfony\Component\Serializer\Annotation\Groups;

#[Groups(['book:read'])]
private string $title;

#[Groups(['book:read'])]
private string $author;
```

Puis :

```php
#[ApiResource(
    normalizationContext: [
        'groups' => ['book:read']
    ]
)]
class Book
{
    // ...
}
```

La règle devient alors simple :

```text
PHP Entity
     ↓
Serialization Groups
     ↓
Données autorisées
     ↓
JSON
     ↓
Front-end
```

Les groupes peuvent également être utilisés pour distinguer les données en lecture et en écriture.

---

## 8. Valider les données

Une API fiable ne doit jamais faire confiance aux données envoyées par le client.

Imaginons que notre API reçoive :

```json
{
    "title": "",
    "author": ""
}
```

Nous devons vérifier que les données sont valides avant de les enregistrer.

Symfony fournit son composant Validator, directement exploitable par API Platform.

```php
use Symfony\Component\Validator\Constraints as Assert;

#[Assert\NotBlank]
#[ORM\Column(length: 255)]
private string $title;

#[Assert\NotBlank]
#[ORM\Column(length: 255)]
private string $author;
```

Nous pouvons également définir des contraintes plus précises :

```php
#[Assert\Length(
    min: 3,
    max: 255
)]
private string $title;
```

API Platform déclenche automatiquement la validation lors des opérations d'écriture.

Si les données sont invalides, l'API retourne une réponse d'erreur au lieu de sauvegarder les données incorrectes.

---

## 9. La sécurité : ne pas confondre API disponible et API sécurisée

Une API REST peut être techniquement fonctionnelle tout en étant dangereuse.

Par défaut, il faut donc réfléchir à plusieurs niveaux :

- Qui peut accéder à l'API ?
- Qui peut lire les données ?
- Qui peut créer une ressource ?
- Qui peut modifier une ressource ?
- Qui peut supprimer une ressource ?
- Quelles propriétés peuvent être modifiées ?

API Platform s'appuie sur le composant Security de Symfony pour gérer les autorisations et permet d'appliquer des règles au niveau des ressources ou des opérations.

---

## 10. Sécuriser une opération

Imaginons que tout le monde puisse consulter les livres, mais que seuls les utilisateurs authentifiés puissent en créer.

Nous pouvons définir une règle au niveau de l'opération :

```php
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\ApiResource;

#[ApiResource(
    operations: [
        new Get(),
        new Post(
            security: "is_granted('ROLE_USER')"
        )
    ]
)]
class Book
{
}
```

Le résultat est :

```text
GET /api/books
        ↓
Accessible publiquement


POST /api/books
        ↓
Utilisateur authentifié ?
        ↓
       Oui → autorisé
       Non → 403 Forbidden
```

Cette séparation est importante.

Une API sécurisée ne doit pas uniquement protéger les routes : elle doit également protéger les opérations et les données.

---

## 11. Authentification avec un token

Pour une application front-end moderne, une approche courante consiste à utiliser un token d'accès.

Le fonctionnement général est :

```text
React
  │
  │ Login
  ▼
Symfony API
  │
  │ Vérification
  ▼
Utilisateur authentifié
  │
  │ Access Token
  ▼
React
```

Puis, lors des requêtes suivantes :

```http
Authorization: Bearer <token>
```

Symfony peut alors identifier l'utilisateur à partir du token.

Selon le projet, on peut ensuite utiliser un système JWT ou une solution OAuth2/OpenID Connect lorsque les besoins de sécurité et d'architecture le justifient.

---

## 12. Exposer l'API à un front-end

Notre API peut maintenant être consommée par une application React.

Imaginons que notre back-end soit disponible sur :

```text
https://api.example.com
```

Notre front-end React peut effectuer une requête :

```typescript
const response = await fetch(
    "https://api.example.com/api/books"
);

const books = await response.json();
```

Puis utiliser les données :

```tsx
function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/api/books")
            .then(response => response.json())
            .then(data => {
                setBooks(data.member);
            });
    }, []);

    return (
        <div>
            {books.map(book => (
                <article key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </article>
            ))}
        </div>
    );
}
```

Le principe est donc très simple :

```text
React
  │
  │ HTTP GET
  ▼
Symfony + API Platform
  │
  │ Doctrine
  ▼
Database
  │
  │ JSON
  ▼
React
```

---

## 13. Attention au CORS

Si React et Symfony sont hébergés sur deux domaines différents, le navigateur applique la politique Same-Origin.

Par exemple :

```text
Front-end
https://app.example.com

API
https://api.example.com
```

Le front-end doit être explicitement autorisé à effectuer des requêtes vers l'API.

API Platform/Symfony peut être configuré avec le mécanisme CORS afin d'autoriser les origines nécessaires.

En développement, on peut par exemple autoriser :

```text
http://localhost:5173
```

pour une application React/Vite.

Il faut cependant éviter d'autoriser aveuglément toutes les origines en production.

Le principe est :

```text
React
https://app.example.com
        │
        │ HTTP request
        ▼
Symfony API
https://api.example.com
        │
        │ CORS validation
        ▼
    Autorisé ?
       / \
     Oui  Non
      │     │
      ▼     ▼
    JSON   Error
```

---

## 14. Une API ne doit pas forcément exposer directement ses entités

Pour une petite application, exposer directement une entité Doctrine peut être parfaitement acceptable.

Mais dans une application plus importante, il peut être préférable de séparer :

```text
Database Model
      ≠
API Resource
```

On peut alors avoir :

```text
Doctrine Entity
      ↓
Business Logic
      ↓
API Resource / DTO
      ↓
Serializer
      ↓
JSON
```

Cette approche permet de contrôler précisément ce qui est exposé au client et d'éviter de coupler trop fortement la structure de la base de données avec le contrat public de l'API.

---

## 15. Le rôle du front-end

Une fois l'API correctement exposée, React n'a plus besoin de connaître la structure interne de Symfony.

Il connaît uniquement le contrat HTTP.

Par exemple :

```http
GET /api/books
```

ou :

```http
POST /api/books
Content-Type: application/json
```

avec :

```json
{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "description": "A handbook of agile software craftsmanship."
}
```

Le back-end s'occupe ensuite de :

- valider les données ;
- vérifier les permissions ;
- appliquer la logique métier ;
- sauvegarder les données ;
- sérialiser la réponse.

Le front-end se concentre sur :

- l'interface ;
- les formulaires ;
- l'expérience utilisateur ;
- l'affichage des données ;
- la gestion des états de chargement et d'erreur.

---

## 16. Architecture finale

Nous obtenons finalement une architecture assez claire :

```text
                  ┌────────────────────┐
                  │      React         │
                  │                    │
                  │ UI / State / Forms │
                  └─────────┬──────────┘
                            │
                       HTTP / JSON
                            │
                            ▼
                  ┌────────────────────┐
                  │   API Platform     │
                  │                    │
                  │ Routing            │
                  │ Serialization      │
                  │ Validation         │
                  │ Security           │
                  └─────────┬──────────┘
                            │
                            ▼
                  ┌────────────────────┐
                  │      Symfony       │
                  │                    │
                  │ Business Logic     │
                  │ Security           │
                  │ Services           │
                  └─────────┬──────────┘
                            │
                            ▼
                  ┌────────────────────┐
                  │      Doctrine      │
                  │                    │
                  │ ORM                │
                  └─────────┬──────────┘
                            │
                            ▼
                       PostgreSQL
```

Cette architecture permet de séparer clairement les responsabilités.

---

## 17. Les 20 % à retenir

Pour utiliser efficacement API Platform avec Symfony, il n'est pas nécessaire de connaître immédiatement toute la technologie.

Les concepts essentiels sont :

### 1. `#[ApiResource]`

Permet d'exposer une classe comme ressource API.

### 2. Les opérations HTTP

```text
GET
POST
PUT
PATCH
DELETE
```

Comprendre leur rôle est indispensable.

### 3. Le Serializer

Il contrôle la transformation :

```text
PHP ↔ JSON
```

### 4. Les groupes de sérialisation

Ils permettent de contrôler les propriétés exposées ou modifiables.

### 5. Symfony Validator

Il permet de refuser les données invalides avant leur persistance.

### 6. Security

Les permissions doivent être définies au niveau des opérations et des ressources.

### 7. HTTP + JSON

Le front-end n'a pas besoin de connaître Symfony.

Il doit simplement connaître le contrat de l'API.

---

## Conclusion

Créer une API REST avec Symfony peut rapidement devenir complexe si chaque élément est construit manuellement.

API Platform permet de réduire considérablement cette complexité en fournissant une infrastructure prête à l'emploi autour des ressources, du routing, de la sérialisation, de la validation, de la documentation et de la sécurité.

Le processus peut finalement être résumé en quelques étapes :

```text
Entity
  ↓
#[ApiResource]
  ↓
Operations
  ↓
Validation
  ↓
Security
  ↓
Serialization
  ↓
JSON
  ↓
React
```

L'intérêt d'API Platform n'est donc pas seulement de créer une API plus rapidement.

C'est surtout de disposer d'un cadre cohérent permettant de construire une API REST maintenable, documentée et capable de communiquer proprement avec un front-end moderne.

Pour un développeur full-stack, comprendre cette chaîne permet de passer d'un modèle PHP à une véritable architecture client / serveur sans avoir à réimplémenter toutes les briques fondamentales d'une API.
