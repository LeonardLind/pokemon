class Sprite {
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
    scale = 1
  }) {
    this.position = position
    this.image = new Image()
    this.frames = { ...frames, val: 0, elapsed: 0 }
    this.image.onload = () => {
      this.width = (this.image.width / this.frames.max) * scale
      this.height = this.image.height * scale
    }
    this.image.src = image.src

    this.animate = animate
    this.sprites = sprites
    this.opacity = 1

    this.rotation = rotation
    this.scale = scale
  }

  draw() {
    c.save()
    c.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    )
    c.rotate(this.rotation)
    c.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    )
    c.globalAlpha = this.opacity

    const crop = {
      position: {
        x: this.frames.val * (this.width / this.scale),
        y: 0
      },
      width: this.image.width / this.frames.max,
      height: this.image.height
    }

    const image = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: this.image.width / this.frames.max,
      height: this.image.height
    }

    c.drawImage(
      this.image,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      image.position.x,
      image.position.y,
      image.width * this.scale,
      image.height * this.scale
    )

    c.restore()

    if (!this.animate) return

    if (this.frames.max > 1) {
      this.frames.elapsed++
    }

    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++
      else this.frames.val = 0
    }
  }
}

class Monster extends Sprite {
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1, hold: 20 },
    sprites,
    animate = false,
    rotation = 0,
    isEnemy = false,
    name,
    attacks,
  }) {
    super({
      position,
      velocity,
      image,
      frames,
      sprites,
      animate,
      rotation
    })
    this.health = 100
    this.isEnemy = isEnemy
    this.name = name
    this.attacks = attacks
    
  }

  faint() {
    document.querySelector('#dialogueBox').innerHTML = this.name + ' fainted!'
    gsap.to(this.position, {
      y: this.position.y + 20
    })
    gsap.to(this, {
      opacity: 0
    })
    audio.battle.stop()
    audio.victory.play()
  }

  faint2() {
    document.querySelector('#dialogueBox').innerHTML = this.name + ' fainted!'
    gsap.to(this.position, {
      y: this.position.y + 20
    })
    gsap.to(this, {
      opacity: 0
    })
    audio.finalBattle.stop()
    audio.victory.play()
  }


  attack({ attack, recipient, renderedSprites }) {
    document.querySelector('#dialogueBox').style.display = 'block'
    document.querySelector('#dialogueBox').innerHTML =
      this.name + ' used ' + attack.name

    let healthBar = '#enemyHealthBar'
    if (this.isEnemy) healthBar = '#playerHealthBar'

    let rotation = 1
    if (this.isEnemy) rotation = -2.2

    recipient.health -= attack.damage

    switch (attack.name) {
      case 'ParagraphPunch':
        audio.initParagraphPunch.play()
        const ParagraphPunchImage = new Image()
        ParagraphPunchImage.src = './img/HTMLAttack.png'
        const ParagraphPunch = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          image: ParagraphPunchImage,
          frames: {
            max: 4,
            hold: 10,
          },
          animate: true,
          rotation
        })
        renderedSprites.splice(1, 0, ParagraphPunch)

        gsap.to(ParagraphPunch.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          duration: 0.8,
          onComplete: () => {
            // Enemy actually gets hit
            audio.fireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        })

        break
        
      case 'Procrastinat':
        const tl = gsap.timeline()

        let movementDistance = 20
        if (this.isEnemy) movementDistance = -20

        tl.to(this.position, {
          x: this.position.x - movementDistance
        })
          .to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete: () => {
              // Enemy actually gets hit
              audio.tackleHit.play()
              gsap.to(healthBar, {
                width: recipient.health + '%'
              })

              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              })

              gsap.to(recipient, {
                opacity: 0,
                repeat: 5,
                yoyo: true,
                duration: 0.08
              })
            }
          })
          .to(this.position, {
            x: this.position.x
          })

        break

        case 'ColorCascade':
        audio.initFireball.play()
        const ColorCascadeImage = new Image()
        ColorCascadeImage.src = './img/CSSAttack.png'
        const ColorCascade = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          image: ColorCascadeImage,
          frames: {
            max: 4,
            hold: 10
          },
          animate: true,
          rotation
        })
        renderedSprites.splice(1, 0, ColorCascade)

        gsap.to(ColorCascade.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            // Enemy actually gets hit
            audio.fireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        })

        break

        case 'BugBlitz':
        audio.initBugBlitz.play()
        const BugBlitzImage = new Image()
        BugBlitzImage.src = './img/BugBlitz.png'
        const BugBlitz = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          image: BugBlitzImage,
          frames: {
            max: 4,
            hold: 10
          },
          animate: true,
          rotation
        })
        renderedSprites.splice(1, 0, BugBlitz)

        gsap.to(BugBlitz.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          duration: 0.6,
          onComplete: () => {
            // Enemy actually gets hit
            audio.fireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        })

        break

        case 'CVCyclone':
        audio.initFireball.play()
        const CVCycloneImage = new Image()
        CVCycloneImage.src = './img/CVCyclone.png'
        document.querySelector('#dialogueBox').innerHTML =
      this.name + ' used ' + attack.name + '<br> <br>' + 'Explain how, if at all, your skills match the actual needs of the position?'
        const CVCyclone = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          image: CVCycloneImage,
          frames: {
            max: 4,
            hold: 10
          },
          animate: true,
          rotation
        })
        renderedSprites.splice(1, 0, CVCyclone)

        gsap.to(CVCyclone.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          duration: 0.9,
          onComplete: () => {
            // Enemy actually gets hit
            audio.fireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        })

        break

        case 'ResumeRejectionRumble':
          audio.initFireball.play()
          const ResumeRejectionRumbleImage = new Image()
          ResumeRejectionRumbleImage.src = './img/ResumeRejectionRumble.png'
          document.querySelector('#dialogueBox').innerHTML =
          this.name + ' used ' + attack.name + '<br> <br>' + 'We appreciate your interest, but after careful consideration...'
          const ResumeRejectionRumble = new Sprite({
            position: {
              x: this.position.x,
              y: this.position.y
            },
            image: ResumeRejectionRumbleImage,
            frames: {
              max: 4,
              hold: 10
            },
            animate: true,
            
          })
          renderedSprites.splice(1, 0, ResumeRejectionRumble)
  
          gsap.to(ResumeRejectionRumble.position, {
            x: recipient.position.x,
            y: recipient.position.y,
            duration: 1,
            onComplete: () => {
              // Enemy actually gets hit
              audio.fireballHit.play()
              gsap.to(healthBar, {
                width: recipient.health + '%'
              })
  
              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              })
  
              gsap.to(recipient, {
                opacity: 0,
                repeat: 5,
                yoyo: true,
                duration: 0.08
              })
              renderedSprites.splice(1, 1)
            }
          })
  
          break

    }
  }
}

class Boundary {
  static width = 48
  static height = 48
  constructor({ position }) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw() {
    c.fillStyle = 'rgba(255, 0, 0, 0)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

class Character extends Sprite {
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
    scale = 1,
    dialogue = ['']
  }) {
    super({
      position,
      velocity,
      image,
      frames,
      sprites,
      animate,
      rotation,
      scale
    })

    this.dialogue = dialogue
    this.dialogueIndex = 0
  }
}