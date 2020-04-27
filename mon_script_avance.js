const tabNumeros=[773000001,773000002,773000003,773000004,773000005]
var tabComptes=[10000,30000,40000,50000,60000]
const tabCodes=[5555,1111,2222,3333,4444]
function AfficheMenu() {
option=prompt('----MENU SENMONEY------- \n  Taper le numéro du service choisi \n 1: Solde de mon compte \n 2: Transfert d\'argent \n 3: Paiement de facture \n 4: Options ', 1);}

function SoldeCompe(i){
code=prompt('Entrer votre code',5555);
if (code==tabCodes[i])
{resultat=confirm('Le solde de votre compte est : ' + tabComptes[i] + '\n Voulez-vous retourner au menu?') ;}
 else {alert('Code incorrect');}
}


function TransfertArgent(i){
dest=prompt('Entrer le numero destinataire', 773000002);
montant=prompt('Saisir le montant', 5000);
if (montant < tabComptes[i])
  { code=prompt('Entrer votre code',5555);
if (code==tabCodes[i]) { tabComptes[i]=tabComptes[i]-montant;
                         resultat2=confirm('Transfert effectué avec succés, le nouveau solde de votre compte est : ' + tabComptes[i] + '\n Voulez-vous retourner au menu?') ;}}
else {alert('Solde Inssufisant');}
}


function menu() {

num=prompt('Entrer votre numero', 773000001);

var i;
for (i = 0; i < tabNumeros.length; i++) {
if (tabNumeros[i]==num){var valide=1; 
var user=i;}}

if (valide==1){AfficheMenu()}
if (option==1){SoldeCompe(user)}
if (option==2){TransfertArgent(user)}
//{option=prompt('----MENU SENMONEY------- \n  Taper le numéro du service choisi \n 1: Solde de mon compte \n 2: Transfert d\'argent \n 3: Paiement de facture \n 4: Options ', 1);
//if (option==1)
//{ 
//code=prompt('Entrer votre code',5555);
//if (code==tabCodes[user])
//{resultat=confirm('Le solde de votre compte est : ' + soldecompte + '\n Voulez-vous retourner au menu?') ;}
//else {alert('Numero incorrect');}
//}



}
  






