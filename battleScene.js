const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battleBackground.png'
const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  image: battleBackgroundImage
})

let htmlNovice
let CSSArtisan
let JavaScriptGuru
let HRInquisitor
let PyroScript
let renderedSprites
let battleAnimationId
let queue

function initBattle() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#htmlNovice').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()
  disableSpacebar();
 

  htmlNovice = new Monster(monsters.htmlNovice)
  PyroScript = new Monster(monsters.PyroScript)
  renderedSprites = [htmlNovice, PyroScript]
  queue = []

  PyroScript.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })

  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      PyroScript.attack({
        attack: selectedAttack,
        recipient: htmlNovice,
        renderedSprites
      })

      if (htmlNovice.health <= 0) {
        queue.push(() => {
          htmlNovice.faint()
        })
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              enableSpacebar();
              animate()
              document.querySelector('#userInterface').style.display = 'none'
              document.querySelector('#htmlNovice').style.display = 'none'
              gsap.to('#overlappingDiv', {
                opacity: 0
              })

              battle.initiated = false
              audio.Map.play()
            }
          })
        })
      }

      // htmlNovice or enemy attacks right here
      const randomAttack =
      htmlNovice.attacks[Math.floor(Math.random() * htmlNovice.attacks.length)]

      queue.push(() => {
        htmlNovice.attack({
          attack: randomAttack,
          recipient: PyroScript,
          renderedSprites
        })

        if (PyroScript.health <= 0) {
          queue.push(() => {
            PyroScript.faint()
          })

          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                enableSpacebar();
                animate()
                document.querySelector('#userInterface').style.display = 'none'
                document.querySelector('#htmlNovice').style.display = 'none'
                
                

                gsap.to('#overlappingDiv', {
                  opacity: 0
                })

                battle.initiated = false
                audio.Map.play()
              }
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}

function initBattle2() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#CSSArtisan').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()
  disableSpacebar();

  CSSArtisan = new Monster(monsters.CSSArtisan)
  PyroScript = new Monster(monsters.PyroScript)
  renderedSprites = [CSSArtisan, PyroScript]
  queue = []

  PyroScript.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })

  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      PyroScript.attack({
        attack: selectedAttack,
        recipient: CSSArtisan,
        renderedSprites
      })

      if (CSSArtisan.health <= 0) {
        queue.push(() => {
          CSSArtisan.faint()
        })
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              enableSpacebar();
              animate()
              document.querySelector('#userInterface').style.display = 'none'
              document.querySelector('#CSSArtisan').style.display = 'none'

              gsap.to('#overlappingDiv', {
                opacity: 0
              })

              battle.initiated = false
              audio.Map.play()
            }
          })
        })
      }

      //CSSArtisan or enemy attacks right here
      const randomAttack =
      CSSArtisan.attacks[Math.floor(Math.random() * CSSArtisan.attacks.length)]

      queue.push(() => {
        CSSArtisan.attack({
          attack: randomAttack,
          recipient: PyroScript,
          renderedSprites
        })

        if (PyroScript.health <= 0) {
          queue.push(() => {
            PyroScript.faint()
          })

          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                enableSpacebar();
                animate()
                document.querySelector('#userInterface').style.display = 'none'
                document.querySelector('#CSSArtisan').style.display = 'none'

                gsap.to('#overlappingDiv', {
                  opacity: 0
                })

                battle.initiated = false
                audio.Map.play()
              }
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}

function initBattle3() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#JavaScriptGuru').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()
  disableSpacebar();

  JavaScriptGuru = new Monster(monsters.JavaScriptGuru)
  PyroScript = new Monster(monsters.PyroScript)
  renderedSprites = [JavaScriptGuru, PyroScript]
  queue = []

  PyroScript.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })

  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      PyroScript.attack({
        attack: selectedAttack,
        recipient: JavaScriptGuru,
        renderedSprites
      })

      if (JavaScriptGuru.health <= 0) {
        queue.push(() => {
          JavaScriptGuru.faint()
        })
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              enableSpacebar();
              animate()
              document.querySelector('#userInterface').style.display = 'none'
              document.querySelector('#JavaScriptGuru').style.display = 'none'

              gsap.to('#overlappingDiv', {
                opacity: 0
              })

              battle.initiated = false
              audio.Map.play()
            }
          })
        })
      }

      //JavaScriptGuru or enemy attacks right here
      const randomAttack =
      JavaScriptGuru.attacks[Math.floor(Math.random() * JavaScriptGuru.attacks.length)]

      queue.push(() => {
        JavaScriptGuru.attack({
          attack: randomAttack,
          recipient: PyroScript,
          renderedSprites
        })

        if (PyroScript.health <= 0) {
          queue.push(() => {
            PyroScript.faint()
          })

          queue.push(() => {
            // fade back to black
            gsap.to('#overlappingDiv', {
              opacity: 1,
              onComplete: () => {
                cancelAnimationFrame(battleAnimationId)
                enableSpacebar();
                animate()
                document.querySelector('#userInterface').style.display = 'none'
                document.querySelector('#JavaScriptGuru').style.display = 'none'

                gsap.to('#overlappingDiv', {
                  opacity: 0
                })

                battle.initiated = false
                audio.Map.play()
              }
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}

function initBattle4() {
  document.querySelector('#userInterface').style.display = 'block'
  document.querySelector('#HRInquisitor').style.display = 'block'
  document.querySelector('#dialogueBox').style.display = 'none'
  document.querySelector('#enemyHealthBar').style.width = '100%'
  document.querySelector('#playerHealthBar').style.width = '100%'
  document.querySelector('#attacksBox').replaceChildren()   
  disableSpacebar();

  HRInquisitor = new Monster(monsters.HRInquisitor)
  PyroScript = new Monster(monsters.PyroScript)
  renderedSprites = [HRInquisitor, PyroScript]
  queue = []

  PyroScript.attacks.forEach((attack) => {
    const button = document.createElement('button')
    button.innerHTML = attack.name
    document.querySelector('#attacksBox').append(button)
  })

  // our event listeners for our buttons (attack)
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      PyroScript.attack({
        attack: selectedAttack,
        recipient: HRInquisitor,
        renderedSprites
      })

      if (HRInquisitor.health <= 0) {
        queue.push(() => {
          HRInquisitor.faint2()
        })
        queue.push(() => {
          // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              enableSpacebar();
              battle.initiated = false
              document.querySelector('#overlappingDiv2').style.display = 'block'
              audio.creditTheme.play()            
            }
          })
        })
      }

      //HRInquisitor or enemy attacks right here
      const randomAttack =
      HRInquisitor.attacks[Math.floor(Math.random() * HRInquisitor.attacks.length)]

      queue.push(() => {
        HRInquisitor.attack({
          attack: randomAttack,
          recipient: PyroScript,
          renderedSprites
        })

        if (PyroScript.health <= 0) {
          queue.push(() => {
            PyroScript.faint2()
          })

          queue.push(() => {
            // fade back to black
          gsap.to('#overlappingDiv', {
            opacity: 1,
            onComplete: () => {
              cancelAnimationFrame(battleAnimationId)
              enableSpacebar();
              battle.initiated = false
              document.querySelector('#overlappingDiv2').style.display = 'block'
              audio.creditTheme.play()
              }
            })
          })
        }
      })
    })

    button.addEventListener('mouseenter', (e) => {
      const selectedAttack = attacks[e.currentTarget.innerHTML]
      document.querySelector('#attackType').innerHTML = selectedAttack.type
      document.querySelector('#attackType').style.color = selectedAttack.color
    })
  })
}


function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle)
  battleBackground.draw()

  renderedSprites.forEach((sprite) => {
    sprite.draw()
  })
}

animate()
//initBattle4()
//animateBattle()

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
  if (queue.length > 0) {
    queue[0]()
    queue.shift()
  } else e.currentTarget.style.display = 'none'
})
