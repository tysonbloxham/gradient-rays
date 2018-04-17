for (let i = 0; i < 4; i++) {
  CSS.registerProperty({
    name: `--a${i}`,
    syntax: '<number>',
    initialValue: 1 - ~~(i / 2)
  })
}