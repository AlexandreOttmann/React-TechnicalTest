# Candidate : Alexandre Ottmann

### Package.json : Ajout de Axios pour le fetch de l'api

J'ai essayé de respecter la logique de construction de l'app au niveau des components. En refactorisant et séparant les logiques comme je pouvais pour qu'elles soient réutilisables.

## J'ai codé toutes les features demandées :

- Display des Info / Card
- Filtre par status : Actives / Inactives
- La SearchBar qui permet de chercher en fonction des noms de familles
- Un display différent de la liste comme indiqué sur le figma quand celle-ci est filtrée via la Search && / || Status
- L'affiche de la SideBar de gauche où est affiché le type de card, si elle est déblocable ou non.
- Micros animations sur boutons et ouverture SideBar
- La Sidebar est en position Fixed, elle permet en mobile de passer devant le contenu de la page plus proprement.

## J'ai ajouté un dossier utils où sont stockées quelques fonctions réutilisables :

- // Passage des nombres en formattage local
- // Affichage des 4 derniers numéro du pan et formattage de caractère \*
- // Passage en %

## Interfaces de typage dans le dossier @types

Utilisée pour les données de l'api, lors de passages supplémentaires en props j'ai ajouté dans le component même les types supplémentaires.

### Components ajoutés pour structurer la page PaymentCards:

- CardList
  -- Card
  ---- Badge : // Affichage réutilisable des badges en fonction de la props "lost" || "active" || "locked"

- CardSidebar
  -- Content
  ---- actions : // Affichage de la card en svg avec données superposées
  ---- card : // Affichage du bloc proposant de bloquer une card

- Searchbar

- PageContainer
  -- BodyContainer : // Deux styled.component servant de contenaire.

####

Merci pour ce test, j'y ai pris beaucoup de plaisir, dans la recherche de solutions surtout, bien qu'ayant passé du temps dessus pour pouvoir vous rendre quelque chose de plus complet possible en comparaison d'un profil plus expérimenté. C'est avec hâte que j'attends de pouvoir échanger avec vous dessus :)
