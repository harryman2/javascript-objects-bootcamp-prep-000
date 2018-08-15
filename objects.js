/*var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
};
var meals = new Object({breakfast: 'oatmeal'});*/

const firstMeal = 'breakfast';

var meals = {firstMeal: 'oatmeal'};

var playlist = new Object({Kamikazee: 'tender bear'});



function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
  
}

function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName];
  return playlist;
}

