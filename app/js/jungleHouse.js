  /*Réutiliser le composant Banner de ce chapitre qui présente le nom de notre boutique. Vous devez sortir le titre dans une variable JavaScript : le titre doit initialement être en minuscules et être transformé en majuscules avec du JavaScript.
  
  Créer un composant <Cart /> (panier) qui viendra sous notre titre.
  
  Le panier contient 3 plantes : un monstera, un lierre et un bouquet de fleurs.
  
  Créer 3 variables pour les prix des plantes : le monstera coûte 8, le lierre coûte 10, et le bouquet de fleurs coûte 15.
  
  Le panier contient une liste (<ul> 😉), et chaque élément présente le nom de l'article, et le prix.
  
  Le total du panier additionne les trois prix.
  */
 function Banner() {
    const titre = "la maison jungle"
    return (<h1>{titre.toUpperCase()}</h1>)
  }
  function Cart(){
    let plants = ["Monstera", "Lierre", "Bouquet de fleurs"]
    let Monstera = 8
    let Lierre = 10
    let Bouquet = 15
    let Total = Monstera+Lierre+Bouquet
      return (
        <ul>
        <li>{plants[0]+ ' : ' + Monstera+ '€'}</li>
        <li>{plants[1]+ ' : ' + Lierre+ '€'}</li>
        <li>{plants[2]+ ' : ' + Bouquet+ '€'}</li>
        <li>{ 'Total'+ ' : ' + Total + '€'}</li>
        </ul>
      )
  }
  ReactDOM.render(<React.Fragment><Banner /><Cart /></React.Fragment>, document.getElementById('root'))
