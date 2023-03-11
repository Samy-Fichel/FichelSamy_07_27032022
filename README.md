# FichelSamy_07_27032022
PROJET 7

# Groupomania #
![Groupomania Projet 7](https://github.com/Samy-Fichel/FichelSamy_07_27032022/blob/main/frontend/groupomania/src/assets/logo.png)

### Conditions préalables ###

Vous aurez besoin d'avoir Node et `npm` installés localement sur votre machine.

### Clone ###
Clonez le dépôt : https://github.com/Samy-Fichel/FichelSamy_07_27032022

### Installation frontend ###

## Ouvrir le dossier frontend puis groupomania dans le terminal d'un éditeur puis éxécuter la commande: ##
* npm install
puis
* npm run serve 
puis rendez-vous sur le lien suivant: 
* http://localhost:8080/home

### Installation backend ###
 Clonez ce dépôt. À partir du dossier du projet, exécutez `npm install`. 
Vous pouvez alors exécuter le serveur avec `npm start ou nodemon server`.
Le serveur doit fonctionner sur `localhost` avec le port par défaut `3000`. Si le
serveur s'exécute sur un autre port pour une raison quelconque, celui-ci est imprimé sur la
console au démarrage du serveur, par ex. `Écoute sur le port 3001`.

### Base de données ###
Vous pouvez directement vous connecter au projet pleinement fonctionnel n'ayant pas besoin 
de créer la base de données SQL (les données sont sauvegardés en mémoire avec l'utilisation de sequelize memory)

### Installation de la Base de données ###
Si vous souhaitez tous de même installe la BDD: 

Connecter vous au serveur MySql de votre choix. 
puis éxécuter la commande suivante:
* CREATE DATABASE projet7GP;
* Consulter les identifiants dans le dossier backend puis dans le dossier config et enfin dans le fichier config.json
 puis importer le fichier dump.sql 
* mysql -u root -p projet7GP < dump.sql à remplacer par le chemin du fichier de la machine 
#### Vous pouvez démarrer le projet ####

### Démarrage du serveur###

* http://localhost:8080/home
* http://localhost:8080/signup
* http://localhost:8080/login

