sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 d d d 2 d d d 2 . . . . 
        . . . 2 d f d 2 d f d 2 . . . . 
        . . . 2 d d d 2 d d d 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 d 2 d 2 d 2 d 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, jugador, 50, 0)
})
let projectile: Sprite = null
let jugador: Sprite = null
jugador = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 7 7 7 7 7 5 7 7 7 7 7 5 5 5 
    5 5 7 7 7 7 7 5 7 7 7 7 7 5 5 5 
    5 5 7 7 d 7 7 5 7 7 d 7 7 5 5 5 
    5 5 7 7 7 7 7 5 7 7 7 7 7 5 5 5 
    5 5 7 7 7 7 7 5 7 7 7 7 7 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 7 7 7 7 7 5 5 5 5 5 5 
    5 5 5 5 5 7 d 7 d 7 5 5 5 5 5 5 
    5 5 5 5 5 7 d d d 7 5 5 5 5 5 5 
    5 5 5 5 5 7 7 7 7 7 5 5 5 5 5 5 
    5 5 5 5 5 7 7 7 7 7 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
controller.moveSprite(jugador)
let bala_enemiga = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 8 8 . . . 
    . . . . . 8 8 8 8 8 8 8 8 8 . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . . 8 8 8 1 8 8 8 1 8 8 8 . 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . . 8 8 8 8 8 1 8 8 8 8 8 . 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . . 8 8 8 1 1 8 1 1 8 8 8 . 
    . . . . 8 8 8 8 1 1 1 8 8 8 8 . 
    . . . . . 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . 8 8 8 8 8 8 8 . . . 
    `, -100, 100)
