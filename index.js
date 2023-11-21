hej const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}

const battleZones2Map = []
for (let i = 0; i < battleZones2Data.length; i += 70) {
  battleZones2Map.push(battleZones2Data.slice(i, 70 + i))
}

const battleZones3Map = []
for (let i = 0; i < battleZones3Data.length; i += 70) {
  battleZones3Map.push(battleZones3Data.slice(i, 70 + i))
}

const battleZones4Map = []
for (let i = 0; i < battleZones4Data.length; i += 70) {
  battleZones4Map.push(battleZones4Data.slice(i, 70 + i))
}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 70) {
  charactersMap.push(charactersMapData.slice(i, 70 + i))
}

const boundaries = []
const offset = {
  x: -50,
  y: -1200
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const battleZones = []

const battleZones2 = []

const battleZones3 = []

const battleZones4 = []


battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZones2Map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones2.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZones3Map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones3.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

battleZones4Map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones4.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})


const characters = []

const momImg = new Image()
momImg.src = './img/mom/Idle.png'

const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

const villager4Img = new Image()
villager4Img.src = './img/villager4/Idle.png'

const womenImg = new Image()
womenImg.src = './img/women/Idle.png'

const villager3Img = new Image()
villager3Img.src = './img/villager3/Idle.png'

const masterImg = new Image()
masterImg.src = './img/master/Idle.png'

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1026 === villager
    if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Welcome, brave adventurer! I am here to guide you through your journey.</p>',
          '<p>As you explore this realm, keep a vigilant eye on the dark grass patches and the treacherous bridges ahead. They are teeming with danger.</p>',
          '<p>When you step onto dark grass or cross a bridge, you may find yourself face-to-face with wild code creatures.</p>',
          '<p>In your quest, you will encounter four formidable enemies, each guarding a piece of knowledge.</p>',
          '<p>So, venture forth, fearless coder! Seek out the dark grass and bridges, face your battles with determination and conquer the trials that lie ahead in this vast digital frontier.</p>',]
        })
      )
    }
    // 1027 === villager
    else if (symbol === 1027) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Good job on your first battle!</p>' ]
        })
      )
    }
        // 1028 === villager
        else if (symbol === 1028) {
          characters.push(
            new Character({
              position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
              },
              image: villagerImg,
              frames: {
                max: 4,
                hold: 60,
              },
              scale: 3,
              animate: true,
              dialogue: ['<p>Hi, again! Let me shed some light on the story of the coder of this world. They started as a substitute teacher, facing the daunting task of speaking before a group and adapting rhetorically and behaviorally.</p>',
              '<p>Over time, these skills became second nature, and they realized that their personal development had plateaued.</p>', 
              '<p>Coding emerged as an opportunity to rekindle their self-development journey.</p>',
              '<p>If we had to summarize their strength in one word, it would be \'patience.\' Their natural calmness and patience have served them well, honed by their experiences in the world of education.</p>',
              '<p>These qualities are equally applicable in coding, where understanding and patience are vital in tackling complex problems and debugging.</p>']
            })
          )
        }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['<p>Oh, I see you\'re one of those self-taught coders, aren\'t you?</p>',
          '<p>Tinkering around in your bedroom, watching online tutorials, thinking you\'re a genius just because you Googled a few things.</p>',
          '<p>Ha! Real coders, they go to school, they get degrees, they pay their dues. What do you know about algorithms and data structures, huh?</p>',
          '<p>Probably not much...</p>',
          '<p>Let me tell you, coding isn\'t just a hobby or something you can learn from a few YouTube videos. You think you\'re \'disrupting\' the industry with your self-learning? Please...</p>' ]
        })
      )
    }
     // 1052 === mom
     else if (symbol === 1052) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: momImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['<p>I worry, dear, that your HTML, CSS, and JavaScript skills won\'t be enough in the real world. What if you face real challenges? I\'m just a mom who wants you to be prepared that maybe you are not ready.</p>' ]
        })
      )
    }
    // 1060 === villager4
    else if (symbol === 1060) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villager4Img,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Greetings, fellow traveler! I\'ve heard you\'re on a quest to showcase your coding skills. Back in early 2023, you began your journey with the basics.</p>',
          '<p>You crafted simple websites, delved into adding interactivity, and navigated through countless bugs and irritations until you got things working.</p>',
          '<p>I remember your goal was to minimize errors and bugs, but we all know how challenging that can be, especially as your projects grew in scale.</p>',
          '<p>Anyways I will quit yapping. A word of advice: there\'s a bridge ahead, and you should tread carefully. Formidable foes may await you.</p>' ]
        })
      )
    }
    // 1065 === villager
    else if (symbol === 1065) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Good job on your second battle!</p>' ]
        })
      )
    }
    // 1070 === women
    else if (symbol === 1070) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: womenImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>I hope, dear player, that as you embark on this journey, you\'ll truly appreciate the time and effort poured into crafting a unique representation that conveys the coder\'s life story, their aspirations, and the pursuit of a job within the coding world.</p>',
          '<p>The path you\'re on is more than just battles and challenges; it\'s a glimpse into the coder\'s journey, their goals, and the hurdles they\'ve faced.</p>',
          '<p>So, as you progress, remember the story behind it all, and may it inspire you to take a chance on a naive self-taught coder driven by passion and a pursuit of knowledge.</p>']
        })
      )
    }
    // 1080 === villager3
    else if (symbol === 1080) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villager3Img,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Oh, I see another dark green patch up ahead. If you\'re feeling brave, why not step into it? Who knows what adventures await those who dare?</p>']
        })
      )
    }
    // 1085 === villager
    else if (symbol === 1085) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Good job in your third battle</p>']
        })
      )
    }
    // 1090 === master
    else if (symbol === 1090) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: masterImg,
          frames: {
            max: 4,
            hold: 60,
          },
          scale: 3,
          animate: true,
          dialogue: ['<p>Ah, my young apprentice, the time has come for your ultimate test. You\'ve honed your coding skills and battled through many challenges, and now you stand on the precipice of a great career leap.</p>',
        '<p>As you step onto that bridge, know that you\'re ready to face the final boss, the job interviewer. They are your gateway to unlocking new opportunities and taking your career to new heights. Believe in your abilities, and you\'ll emerge victorious.</p>' ]
        })
      )
    }
    

    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

let movables = [
  background,
  ...boundaries,
  foreground,
  ...battleZones,
  ...battleZones2,
  ...battleZones3,
  ...battleZones4,
  ...characters
]
let renderables = [
  background,
  ...boundaries,
  ...battleZones,
  ...battleZones2,
  ...battleZones3,
  ...battleZones4,
  ...characters,
  player,
  foreground
]

const battle = {
  initiated: false,
  battleStarted: false
}



const battle2 = {
  initiated: false,
  battleStarted2: false
}

const battle3 = {
  initiated: false,
  battleStarted3: false
}

const battle4 = {
  initiated: false,
  battleStarted4: false
}

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (battle.initiated) return


  // activate a battle
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < (battle.battleStarted ? 0 : 1) // Change 1 to 0 after initBattle has been called
      ) {
        if (!battle.initiated) {
          // Deactivate current animation loop
          window.cancelAnimationFrame(animationId)
  
          audio.Map.stop()
          audio.initBattle.play()
          audio.battle.play()
  
          battle.initiated = true
          gsap.to('#overlappingDiv', {
            opacity: 1,
            repeat: 3,
            yoyo: true,
            duration: 0.4,
            onComplete() {
              gsap.to('#overlappingDiv', {
                opacity: 1,
                duration: 0.4,
                onComplete() {
                  // Activate a new animation loop only if battle has been initiated
                  initBattle()
                  animateBattle()
                  gsap.to('#overlappingDiv', {
                    opacity: 0,
                    duration: 0.4
                  })
                  battle.battleStarted = true; // Set battleStarted to true after initBattle has been called
                }
              })
            }
          })
        }
        break
      }
    }
  }

  // activate a battle 2
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones2.length; i++) {
      const battleZone2 = battleZones2[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone2.position.x + battleZone2.width
        ) -
          Math.max(player.position.x, battleZone2.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone2.position.y + battleZone2.height
        ) -
          Math.max(player.position.y, battleZone2.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone2
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < (battle.battleStarted2 ? 0 : 1) // Change 1 to 0 after initBattle has been called
      ) {
        if (!battle.initiated2) {
          // Deactivate current animation loop
          window.cancelAnimationFrame(animationId)
  
          audio.Map.stop()
          audio.initBattle.play()
          audio.battle.play()
  
          battle2.initiated = true
          gsap.to('#overlappingDiv', {
            opacity: 1,
            repeat: 3,
            yoyo: true,
            duration: 0.4,
            onComplete() {
              gsap.to('#overlappingDiv', {
                opacity: 1,
                duration: 0.4,
                onComplete() {
                  // Activate a new animation loop only if battle has been initiated
                  initBattle2()
                  animateBattle()
                  gsap.to('#overlappingDiv', {
                    opacity: 0,
                    duration: 0.4
                  })
                  battle.battleStarted2 = true; // Set battleStarted to true after initBattle has been called
                }
              })
            }
          })
        }
        break
      }
    }
  }

  // activate a battle 3
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones3.length; i++) {
      const battleZone3 = battleZones3[i]
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone3.position.x + battleZone3.width
        ) -
          Math.max(player.position.x, battleZone3.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone3.position.y + battleZone3.height
        ) -
          Math.max(player.position.y, battleZone3.position.y))
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone3
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < (battle.battleStarted3 ? 0 : 1) // Change 1 to 0 after initBattle has been called
      ) {
        if (!battle.initiated) {
          // Deactivate current animation loop
          window.cancelAnimationFrame(animationId)
  
          audio.Map.stop()
          audio.initBattle.play()
          audio.battle.play()
  
          battle3.initiated = true
          gsap.to('#overlappingDiv', {
            opacity: 1,
            repeat: 3,
            yoyo: true,
            duration: 0.4,
            onComplete() {
              gsap.to('#overlappingDiv', {
                opacity: 1,
                duration: 0.4,
                onComplete() {
                  // Activate a new animation loop only if battle has been initiated
                  initBattle3()
                  animateBattle()
                  gsap.to('#overlappingDiv', {
                    opacity: 0,
                    duration: 0.4
                  })
                  battle.battleStarted3 = true; // Set battleStarted to true after initBattle has been called
                }
              })
            }
          })
        }
        break
      }
    }
  }

// activate a battle 4
if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
  for (let i = 0; i < battleZones4.length; i++) {
    const battleZone4 = battleZones4[i]
    const overlappingArea =
      (Math.min(
        player.position.x + player.width,
        battleZone4.position.x + battleZone4.width
      ) -
        Math.max(player.position.x, battleZone4.position.x)) *
      (Math.min(
        player.position.y + player.height,
        battleZone4.position.y + battleZone4.height
      ) -
        Math.max(player.position.y, battleZone4.position.y))
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: battleZone4
      }) &&
      overlappingArea > (player.width * player.height) / 2 &&
      Math.random() < (battle.battleStarted4 ? 0 : 1) // Change 1 to 0 after initBattle has been called
    ) {
      if (!battle.initiated) {
        // Deactivate current animation loop
        window.cancelAnimationFrame(animationId)

        audio.Map.stop()
        audio.initBattle.play()
        audio.finalBattle.play()

        battle4.initiated = true
        gsap.to('#overlappingDiv', {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                // Activate a new animation loop only if battle has been initiated
                initBattle4()
                animateBattle()
                gsap.to('#overlappingDiv', {
                  opacity: 0,
                  duration: 0.4
                })
                battle.battleStarted4 = true; // Set battleStarted to true after initBattle has been called
              }
            })
          }
        })
      }
      break
    }
  }
}
  
  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
// animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})

function handleSpacebar(event) {
  if (event.code === 'Space') {
    event.preventDefault();
  }
}

function disableSpacebar() {
  document.addEventListener('keydown', handleSpacebar);
}

function enableSpacebar() {
  document.removeEventListener('keydown', handleSpacebar);
}

function changeText(button) {
    button.innerHTML = "Yes";
  }

  function resetText(button) {
    button.innerHTML = "No";
  }

  function redirectToPage() {
    
    window.location.href = 'info.html'; 
  }

  window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};
