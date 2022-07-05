/*
Who remembers back to their time in the schoolyard,
when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
 */

function howMuchILoveYou(nbPetals) {
    for(let i = 1; i <= nbPetals; i++){
        if(nbPetals % 6 === 0){
            return 'not at all';
        }else if(nbPetals % 5 === 0){
            return 'madly';
        }else if(nbPetals % 4 === 0){
            return 'passionately';
        }else if(nbPetals % 3 === 0){
            return 'a lot';
        }else if(nbPetals % 2 === 0){
            return 'a little';
        }else {
            return 'I love you';
        }
    }
}
