// // Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if(prop!=='tracks'&&value.length>0)
//     {
//       records[id][prop]=value;
//     }else if(value.length==0)
//     {
//       delete records[id][prop];
//     }
//     else 
//     {
//       if('tracks' in records[id])
//       {
//         records[id].tracks.push(value);
//       }else
//       {
//         let track=[];
//         track.push(value);
//         records[id].tracks=track;
//       }
//     }
//     return records;
//   }
  
//   console.log(updateRecords(recordCollection, 2548, "artist", ""));

function getName()
{
    name="JC";
    console.log(name);
}

let name="jjjj";
getName();
console.log(name);