# Project_InProgress

## Description

Le but de ce projet est de créer une application web permettant de gérer un système de culture.

Ce projet va utiliser Angular pour la partie front-end et dans un second temps, Java pour la partie back-end.
Mais le projet pourras marcher sans la partie back-end au début.

## Fichiers

Le projet sera séparé en plusieurs partie pour que le code soit lisible et compréhensible.

### Pages / Composants / Modules

Il y aura :

- Une page d'accueil
  > Cette page sera la page principale de l'application, elle permettra de voir les plantes en cours de culture, les capteurs, les paramètres de l'application, etc... -> si l'utilisateur est connecté, sinon elle proposera de se connecter ou de s'inscrire et affichera les informations de l'application.
- Une page de connexion/inscription
  > Cette page permettra à l'utilisateur de se connecter ou de s'inscrire. -> si l'utilisateur est connecté, elle redirigera vers la page de paramètres de l'application et/ou de l'utilisateur.
- Une page de gestion des plantes
  > Cette page affichera toutes les caractéristiques des plantes, le nombre de plante en cours de culture, le nombre de plante récolté, etc...
- Une page de gestion des capteurs
  > Cette page affichera les capteurs connectés à l'application, leurs états, leurs valeurs, etc... -> si aucun capteur n'est connecté, elle affichera un message disant qu'aucun capteur n'est connecté.
- Une page de gestion de planning de plantation (arrosoir, lumière, récolte, etc...)
  > Cette page affichera le planning de plantation, les plantes à planter, les plantes à récolter, etc...
- Une page de gestion de/des utilisateurs
  > Cette page affichera les utilisateurs connectés, leurs rôles, leurs informations, etc...
- Une page de gestion des paramètres de l'application
  > Cette page affichera les paramètres de l'application, tel que la langue, le thème, etc...

La page paramètre utilisateur et paramètre de l'application pourront être fusionnées en une seule page.

## Commandes de génération des fichiers

### Entrainement

Modèles

```txt
ng generate class models/Plant
```

Pages

```txt
ng generate component pages/home
ng generate component pages/login
ng generate component pages/register
ng generate component pages/plants
ng generate component pages/sensors
ng generate component pages/planning
ng generate component pages/users
ng generate component pages/settings
ng generate component pages/log-reg
```

Providers

```txt
ng generate service providers/auth
ng generate service providers/plants
ng generate service providers/sensors
ng generate service providers/planning
ng generate service providers/users
ng generate service providers/settings
```

Composants partagés

```txt
ng generate component shared/navbar
ng generate component shared/footer
ng generate component shared/plant
ng generate component shared/sensor
ng generate component shared/planning
ng generate component shared/user
```

Pipe partagés

```txt
ng generate pipe shared/pipes/plant
ng generate pipe shared/sensor
ng generate pipe shared/planning
ng generate pipe shared/user
```

### Production

Commande de création de l'application

```txt
ng new HydroGrow --skip-tests
```

Création du module de partage

```txt
ng generate module shared
```

Page d'accueil

```txt
ng generate module pages/home
ng g component pages/home --module=home --type=Page
```

Barre de navigation

```txt
ng generate component shared/navbar --module=shared --type=Component
```

Pied de page

```txt
ng generate component shared/footer --module=shared --type=Component
```

Autres pages

```txt
ng generate module pages/logreg
ng g component pages/logreg --module=logreg --type=Page
ng generate module pages/plants
ng g component pages/plants --module=plants --type=Page
ng generate module pages/sensors
ng g component pages/sensors --module=sensors --type=Page
ng generate module pages/planning
ng g component pages/planning --module=planning --type=Page
ng generate module pages/users
ng g component pages/users --module=users --type=Page
ng generate module pages/settings
ng g component pages/settings --module=settings --type=Page
```

Modèles

```txt
ng generate interface models/plant
```

Components partagés

```txt
ng generate component shared/plant --module=shared --type=Component
ng generate component shared/plantlist --module=shared --type=Component
ng generate component shared/calendrier --module=shared --type=Component
ng generate component shared/evenement --module=shared --type=Component
```

ng add @angular/material
