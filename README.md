# reactFormation

Histoire 

DOM rappel, 

Creation par fb, fragmentation des composants 

Virtual DOM : diff du dom existant et redessine uniqumeent les modifs 

Shadow DOM : mini dom dans un tag 

 

Aujourd'hui  

Native : genere appli mobile 

Native web : generé des appli a la fois mobile et web 

Isomorphic : server side rendering 

Desktop : appli lourd  

VR :  

Packages NPM :  http://js.coach/ listing de packages classés 

 

 

React vs ReactDOM : Core vs Génération du dom (web) 

Debug ds chrome (react dev tools) 

 

 

Component 

ReactDOM  

Insérer du react 

Créer composant avec methode render() obligatoire 

Bind 'this' vs Arrow function ou le scope du this dans les fonctions custom corrigé par les arrow function 

State local dans component 

Fragment => tag permettant d'afficher plusieurs enfant sur le 1er niveau 

Utiliser setState pour modifier un state 

SetState amène un nouvel appel à render() 

InitialState à definir en dehors de la classe et à setter dans le constructor 

Cycle de vie du component 

constructor() 

componentDidMount() 

componentDidUpdate()  

componentWillUnmount() => suppression 

render() 

Et bien d'autres...   

ShouldComponentupdate => definit si le component peut etre modifié lorsque le state est modifié (s'arrete juste avant le render) 

PureComponent => permet de gérer les modifications de state et ne fait le rendu que si les valeurs du state sont différentes 

ControlledComponent => obligé le rendu du composant input en passant les valeurs modifiées par le state du component 

 

Exercice – fil d'actu 

 

Les Props => attributs des appels aux components :  

<mydiv maprop={true} /> 

Stateless permet d'ecrire des composant en raccourci :  

const Sample = () => <p>Stateless sample</p> 

Reutilisation / controler les var (par defaut, static defaultProps = { moncode})  

Typage  des props : prop-types 

Mots réservés :  

key identifiant string d'une list 

ref : ref à un input    

children : permet de récupérer le Html d'un tag react et affiche les tags enfants 

Component errors : 

ComponentDidCatch => gére les erreurs 

Static getDerivedStateFromError => permettant de modifier le state avant de faire un dernier render 

 

 

State Management 

Flux => theorie sur la façon de remonter des infos aux parents d'un composant 

Store : stocke les données 

Dispatcher : envoie des données 

Actions : demande au store d'une donnée 

Subscribers : functions à appeler pr mettre à jour les données de l'app 

 

Redux =>  

Store : immutable 

Exemple voir simple-redux.js 

Une action est un objet par convention qui contient obligatoirement une clé type qui est un string,  

REACT + REDUX 

Container => lie les données  

Architecture  

|Actions 

|---- actions => listing des actions à dispatcher 

|Components 

|Containers 

|---- CounterContainers.js => permet la connexion entre le component et les actions/props/state 

|Reducers 

|----index.js => reference tous les reducers dans un state  

|--App.js => reference le container Provider qui va gérer le store 

|--Store.js => gère le state via le fichier index.js référençant tous les reducers du dossier 

 

Container => contient cette methode :  

Connect(MapStateToProps, MapsDispatchToProps)(monComposant) 

MapStateToProps(state) => créé des props à partir du state redux 

MapsDispatchToProps(dispatch) => créé des props à partir des actions redux 

 

Destructuring =>  

Const obj = { 

Id: 1, 

Text:'', 

Users: [] 

} 

Const { id, ...rest} = obj; // ...rest => { text, users} 

Const { id: userId } = obj;  // créé la variable userId 

Const arr = [0,1,2]; 

Const [ ...rest, value ] = arr; // 0,1 

 

Export dans les composants 

https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910 

 

Middlewares 

Function de function de fucntion 

Const myMiddleware = store => next => action => { 

// my code 

next(action); 

} 

L'appel du middleware se fait par applyMiddleware 

Exemples de middleware de la communauté 

Redux-logger => "pretty" log de dev 

Redux-persist => créé une copie du store dans le local storage du navigateur 

Redux-thunk =>  gère les promesses au sein d'un dispatch 

Reselect => lib de aggregateur de données (calcul, cached) 

 

Avance 

Render prop =>  

HOC => Hiigh Order Component permet d'agrémenter des propriétés ou des comportements à un composant 

Lazy load / suspense =>  

Stateless memo => react memo 

 

 

REACT NATIVE 

Facilement intégrable et partiellement integrable à de l'existant 

Différences :  

Composant custom pour gérer l'affichage (fini le html) 

Bridge pour gérer les évènements (onclick, ….) 

Communication avec les éléments UI natifs 

Créer une app  =>  

react-native-cli (code commu à 85%,hot reloading) 

Expo modification du bundle js dans le cloud (ce qui permet de faire certaines modifs du code sans redéploiement des applis) 

Code 

View = div 

Button = simple button 

TouchableButton = gere les effets de bouton 

Affecter plusieurs classe css à un element an passant un tableau d'objet à style : style={[btn1 , btn2]} 

Pour afficher une list, utiliser <FlatList> ou <SectionList> 

Pour debugger sur le navigateur, ctrl-M sur l'émulateur et clicker sur debug remote js 

Pour les spécificités android/ios :  

Mettre dans des fichiers suffixés :  

Monfichier.android.js 

Monfichier.ios.js 

Utiliser Platform.select({ ios: () => {},android: () => {}}) 

Faire du natif android ou ios via native (mais complexe) 

Navigation 

Système de scène en calques :  

[home], 

[home, profile] 

[home], 

[home, settings] 

[home, settings, notifications] 

Pas de navigation native, la lib ReactNavigation est plutôt sympa 

 

 

 

