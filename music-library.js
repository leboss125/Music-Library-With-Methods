var argv = process.argv.slice(2);

var library = {
    tracks: { 123: { id: 123,
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              456: { id: 456,
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"}
            },
  
    playlists: { 789: { id: 789,
                        name: "Coding Music",
                        tracks: [123, 456]
                      }
               },



               printPlaylists: function (){

                for(var print in library){
                    
                   return this['playlists']
                }
               },
               
               printPlaylist: function (arg){
               
                   for(var print in library){
                       
                      return this['playlists'][arg]
                   }
                  },
               
               
                  printTracks: function () {
                   for(var print in library){
                    
                       return this['tracks']
                   }
               },
               
               addTrackToPlaylist: function (playlistId, trackId){
                      this['playlists'][playlistId]['tracks'].push(trackId)
                     
                   
                  },
               
                  addTrack: function (trackId,name1,artist1,album1){
                   return this['tracks'] = {
                       id: trackId,
                       name:   name1,
                       artist: artist1,
                       album:  album1
                   }
               
                  
                
               },
               
               addPlaylist: function (tracks, id1, name){
                   return this['playlists'][id1] =  {
                       id: id1,
                       name:   name,
                       tracks: tracks
                   }
               
               
                  
                
               }
  }

//  function printPlaylists(){

//  for(var print in library){
     
//     return library['playlists']
//  }
// }

// function printPlaylist(arg){

//     for(var print in library){
        
//        return library['playlists'][arg]
//     }
//    }


// function printTracks() {
//     for(var print in library){
     
//         return library['tracks']
//     }
// }

// function addTrackToPlaylist(playlistId, trackId){
//        library['playlists'][playlistId]['tracks'].push(trackId)
      
    
//    }

//    function addTrack(trackId,name1,artist1,album1){
//     return library['tracks'] = {
//         id: trackId,
//         name:   name1,
//         artist: artist1,
//         album:  album1
//     }

   
 
// }

// function addPlaylist(tracks, id1, name){
//     return library['playlists'][id1] =  {
//         id: id1,
//         name:   name,
//         tracks: tracks
//     }


   
 
// }

  // console.log(printPlaylists())
  // console.log(printTracks())
  // console.log(printPlaylist(argv))
  console.log(library.addPlaylist([1, 2], 789, 'ASD'))


  
