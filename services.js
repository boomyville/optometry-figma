
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    }


  let rand = [0,1,2,3,4,5];
  shuffle(rand);
  document.querySelectorAll(".details2")[rand[0]].style.display = "none";
  document.querySelectorAll(".details2")[rand[1]].style.display = "none";
  document.querySelectorAll(".details2")[rand[2]].style.display = "none";
  document.querySelectorAll(".details2")[rand[3]].style.display = "block";
  document.querySelectorAll(".details2")[rand[4]].style.display = "block";
  document.querySelectorAll(".details2")[rand[5]].style.display = "block";
  