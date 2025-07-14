//Creates a new playlist object with an inputted name
// this refers to the new Playlist
function Playlist(name) {
  this.name = name; //set the name of the playlist
  this.songs = []; //initialize array
  this.currentSong = null; //set the current song
}

//This function adds a song to the playlist
// this refers to the current Playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle); //Add song to songs array
};

//This function plays the first song in the playlist
// this refers to the current Playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) { //Check if there are songs in the array
    this.currentSong = this.songs[0]; // Set the current song to the first song in the array
    console.log("Now playing:", this.currentSong);
  }
};

//This function skips the current song and playst the next one
// this refers to the current Playlist
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) { // Check if there is more than one song in the playlist
    this.songs.shift(); // Remove the first song from the array
    this.currentSong = this.songs[0]; // Set the currentSong to the new first song
    console.log("Skipped! Now playing:", this.currentSong); //Print new current song
  } else {
    console.log("No more songs to skip."); // Print a message if there are no more songs to skip
  }
};

//This function lists all the songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name); //Print playlist name
  console.log("Songs:", this.songs.join(", ")); //Prints all song names separated by a comma
};

//Create a new playlist called My Chill Mix
let myMix = new Playlist("My Chill Mix");

//Add three songs to the playlist
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");


myMix.playFirst(); //Play the first song
myMix.skipSong(); //Skip the current song
myMix.listSongs(); //List the songs

// Suggestion: Add a way to remove a specific song

// Returns the number of songs in the playlist
// this refers to the current Playlist
Playlist.prototype.getSongCount = function() {
  return this.songs.length;
};

