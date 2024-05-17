function choisirPhrasesOuMots() {
    let choix = prompt("choisis la liste : mots ou phrases")
    while (choix !== "mots" && choix !=="phrases") {
        choix = prompt("choisis la liste : mots ou phrases")
    }
    return choix
}


function lancerBoucleDeJeu(listeProposition) {
    let score =0    
    for(i=0; i<listeProposition.length ; i++){
            let motUtilisateur=prompt("hey rentres le mot "+listeProposition[i])
            if (motUtilisateur===listeProposition[i]){
                score +=1
            } 
        }
        return score 
}


function afficherResultat(score, nombreMotsProposes) {
    console.log('Votre score est de ' + score + ' sur ' + nombreMotsProposes)
}


function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMotsProposes = 0

    if ( choix ==='mots') {
        score =lancerBoucleDeJeu(listeMots)
        nombreMotsProposes = listeMots.length
    } else {
        score =lancerBoucleDeJeu(listePhrases)
        nombreMotsProposes = listePhrases.length
    }
    afficherResultat(score,nombreMotsProposes)
}

lancerJeu()