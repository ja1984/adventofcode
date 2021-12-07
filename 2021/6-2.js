const data = '3,4,3,1,2';

const groups = []
const fishes = new Map();
groups.push(fishes);

data.split(',').forEach((x, index) => {
  groups[0].set(index, parseFloat(x))
});

for (let day = 0; day < 80; day += 1) {
  // console.log('---------------------', day)
  const newFishes = [];
  groups.forEach((group) => {
    for (let i = 0; i < group.size; i += 1) {
      const fish = group.get(i);
      if (fish === 0) {
        newFishes.push({ index: (group.size + newFishes.length), timer: 8 });
        group.set(i, 6);
        // console.log('new', group.size, newFishes.length);
      } else {
        const updateTimer = (fish - 1);
        // console.log('get', i, fish, updateTimer)
        group.set(i, updateTimer);
      }
    }
  });

  const isNewGroup = (day % 5 === 0);
  if (isNewGroup) {
    const newGroup = new Map();
    newFishes.forEach((fish) => {
      // console.log('newFish new group', fish)
      newGroup.set(fish.index, 8);
      groups.push(newGroup);
    });
  } else {
    newFishes.forEach((fish) => {
      // console.log('newFish old gourp', fish)
      groups[groups.length - 1].set(fish.index, 8);
    });
    
  }

}

let total = 0;
console.log(groups.length)
// groups.forEach((group) => {
//   total += group.size;
// });

// console.log(total);
//   const newFishes = [];
//   groups.groups.forEach(() => {
//     for (let i = 0; i < fishes.size; i += 1) {
//       const fish = fishes.get(i);
//       if (fish === 0) {
//         fishes.set(i, 6);
//         newFishes.push({ index: (fishes.size + newFishes.length + 1), timer: 8 });
//       } else {
//         fishes.set(i, (fish - 1));
//       }
//     }
//   })


//   newFishes.forEach((fish) => {
//     fishes.set(fish.index, 8);
//   })
// }

// console.log(fishes.size);

// const days = [{
//   day: 0,
//   fishes: data.split(',').map((x, index) => ({
//     index: index,
//     timer: parseFloat(x),
//   }))
// }]

// for (let day = 0; day < 80; day += 1) {
//   const newFishes = [];
//   days.forEach((_day) => {
//     _day.fishes.forEach((fish) => {
//       if (fish.timer === 0) {
//         fish.timer = 6;
//         newFishes.push({ index: _day, timer: 8 });
//       } else {
//         fish.timer -= 1;
//       }
//     })
//     if (newFishes.length) {
//       days.push({ day: (day + 1), fishes: newFishes });
//     }
//   });
//   // fishes.forEach((fish) => {
//   //   if (fish.timer === 0) {
//   //     fish.timer = 6;
//   //     newFishes.push({ index: (fishes.length + newFishes.length + 1), timer: 8 });
//   //   } else {
//   //     fish.timer -= 1;
//   //   }
//   // });
//   // fishes.push(...newFishes);
// }

// console.log(days.length);