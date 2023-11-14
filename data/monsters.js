const monsters = {
  PyroScript: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/embySprite.png',
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'PyroScript',
    attacks: [attacks.Procrastinat, attacks.ParagraphPunch, attacks.ColorCascade, attacks.BugBlitz],
  },
  htmlNovice: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/htmlNoice.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'html Novice',
    attacks: [attacks.Procrastinat, attacks.ParagraphPunch]
  },
  CSSArtisan: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/CSSArtisan.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'CSS Artisan',
    attacks: [attacks.Procrastinat, attacks.ColorCascade]
  },
  JavaScriptGuru: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/JavaScriptGuru.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Js Guru',
    attacks: [attacks.Procrastinat, attacks.BugBlitz]
  },
  HRInquisitor: {
    position: {
      x: 733,
      y: 50
    },
    image: {
      src: './img/HRInquisitor.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'HR Inquisitor',
    attacks: [attacks.CVCyclone, attacks.ResumeRejectionRumble]
  }

}
