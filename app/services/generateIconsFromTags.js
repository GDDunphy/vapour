const icons = {
  rpg: 'fa-dragon',
  fps: 'fa-gun',
  action: 'fa-explosion',
  strategy: 'fa-brain',
  magic: 'fa-wand-magic',
  singleplayer: 'fa-user',
  multiplayer: 'fa-users',
  story: 'fa-book',
  dialogue: 'fa-comment',
  rng: 'fa-dice'
}

const generateIconsFromTags = function(tags) {
  return tags.map((t) => {
    return icons[t]
  })
}

module.exports = generateIconsFromTags;
