
function menu() {
var repete=1;
while(repete==1) {
var soldecompte=10000
option=prompt('----MENU SENMONEY------- \n  Taper le num�ro du service choisi \n 1: Solde de mon compte \n 2: Transfert d\'argent \n 3: Paiement de facture \n 4: Options ', 1);
if (option==1)
{ resultat=confirm('Le solde de votre compte est : ' + soldecompte + '\n Voulez-vous retourner au menu?') ;
if (resultat){
    repete = 1;
  } else {
    repete = 0;
  }
}
else 
{ if (option==2||option==3||option==4)
{ alert('Option pas encore disponible');}
}

}}

