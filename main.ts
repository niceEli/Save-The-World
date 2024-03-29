scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (info.score() >= 5) {
            tiles.setTilemap(tilemap`level1`)
            game.showLongText("You Saved the world", DialogLayout.Full)
            info.stopCountdown()
            game.over(true, effects.confetti)
        }
    } else {
        mySprite.say("I should press A (Z)", 500)
    }
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    0,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    controller.moveSprite(mySprite, 200, 200)
    mySprite.ay = 0
    _2d = 0
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    game.showLongText("This Is A Non Multiplayer Game Players 2 3 4 Cannot Play", DialogLayout.Bottom)
    console.log("Console Warn: No Multiplayer")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_2d == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.ay = 500
            mySprite.vy = -300
            music.jumpUp.play()
            console.log("Jump Bottom")
        } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
            mySprite.ay = 500
            mySprite.vy = -250
            mySprite.ax = -5
            music.jumpUp.play()
            mySprite.ax = 0
            console.log("Jump Left")
        } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
            mySprite.ay = 500
            mySprite.vy = -250
            mySprite.ax = 5
            music.jumpUp.play()
            mySprite.ax = 0
            console.log("Jump Right")
        } else {
        	
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_2d == 0) {
        music.jumpUp.playUntilDone()
        music.jumpDown.playUntilDone()
        music.playTone(262, music.beat(BeatFraction.Half))
        game.showLongText("You jumped", DialogLayout.Bottom)
        music.playTone(262, music.beat(BeatFraction.Half))
        game.showLongText("...", DialogLayout.Bottom)
        music.playTone(262, music.beat(BeatFraction.Half))
        game.showLongText("It did nothing (try going in a 2d section)", DialogLayout.Bottom)
        music.playTone(262, music.beat(BeatFraction.Half))
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.ay = 500
            mySprite.vy = -300
            music.jumpUp.play()
            console.log("Jump Bottom")
        } else if (mySprite.isHittingTile(CollisionDirection.Left)) {
            mySprite.ay = 500
            mySprite.vy = -250
            mySprite.ax = -5
            music.jumpUp.play()
            mySprite.ax = 0
            console.log("Jump Left")
        } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
            mySprite.ay = 500
            mySprite.vy = -250
            mySprite.ax = 5
            music.jumpUp.play()
            mySprite.ax = 0
            console.log("Jump Right")
        } else {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(-1)
    music.playTone(262, music.beat(BeatFraction.Half))
    game.showLongText("You Got Hit", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
    game.showLongText("Respawning", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
    pause(500)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    music.powerDown.play()
    pause(500)
    music.playTone(262, music.beat(BeatFraction.Half))
    game.showLongText("Respawn Succesfull", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . 4 4 e . f e f f f f f . . . 
        . . 4 d 4 f e e e f e f f f . . 
        . . f f f e e 4 f f 2 e f f f . 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        . . f f f e e 4 f f 2 e f f f . 
        . . 4 d 4 f e e e f e e f f . . 
        . . 4 4 e . f e f f f f f . . . 
        . . . . . . . f f . . . . . . . 
        `],
    100,
    false
    )
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    game.showLongText("This Is A Non Multiplayer Game Players 2 3 4 Cannot Play", DialogLayout.Bottom)
    console.log("Console Warn: No Multiplayer")
})
info.onCountdownEnd(function () {
    music.playTone(554, music.beat(BeatFraction.Half))
    game.showLongText("Spirt: You Deserve This", DialogLayout.Bottom)
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Half))
    game.showLongText("Spirt: HAHA", DialogLayout.Bottom)
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    game.showLongText("Some Times poeple cannot make it to the end someimes they have to start over this time you got the bad ending and that is", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Double))
    game.showLongText("You Died!", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f . . . . . . . 
        . . 4 4 e . f e f f f f f . . . 
        . . 4 d 4 f e e e f e f f f . . 
        . . f f f e e 4 f f 2 e f f f . 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        . . f f f e e 4 f f 2 e f f f . 
        . . 4 d 4 f e e e f e e f f . . 
        . . 4 4 e . f e f f f f f . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . 4 4 e . f e f f f f f . . . 
        . . 4 d 4 f e e e f e f f f . . 
        . . f f f e e 4 f f 2 e f f f . 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        . . f f f e e 4 f f 2 e f f f . 
        . . 4 d 4 f e e e f e e f f . . 
        . . 4 4 e . f e f f f f f . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . 4 4 e . f e f f f f f . . . 
        . . 4 d 4 f e e e f e f f f . . 
        . . f f f e e 4 f f 2 e f f f . 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
        f f 4 2 2 4 d f f e f 2 e 2 f f 
        f f 4 2 2 e d 1 b f f 2 e f f . 
        . . f f f e e 4 f f 2 e f f f . 
        . . 4 d 4 f e e e f e e f f . . 
        . . 4 4 e . f e f f f f f . . . 
        . . . . . . . f f . . . . . . . 
        `],
    5000,
    true
    )
    music.playTone(554, music.beat(BeatFraction.Half))
    game.showLongText("Spirt: Bruh U Ded Why You Ruin The World", DialogLayout.Bottom)
    music.playTone(554, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Double))
    music.playMelody("B C5 B C5 B A - - ", 120)
    music.playMelody("F G A G A G - - ", 120)
    music.playMelody("C - D - C - - - ", 120)
    game.over(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_2d == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    controller.moveSprite(mySprite, 200, 0)
    mySprite.ay = 500
    _2d = 1
})
info.onLifeZero(function () {
    ded = 1
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.playTone(262, music.beat(BeatFraction.Half))
    game.showLongText("You Got a Coin!", DialogLayout.Bottom)
    music.playTone(262, music.beat(BeatFraction.Half))
    info.changeScoreBy(1)
    music.powerUp.play()
    otherSprite.destroy(effects.fire, 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.showLongText("This Is A Non Multiplayer Game Players 2 3 4 Cannot Play", DialogLayout.Bottom)
    console.log("Console Warn: No Multiplayer")
})
let _2d = 0
let ded = 0
let mySprite: Sprite = null
let moola: Sprite = null
console.log("Start Game")
game.setDialogTextColor(7)
game.setDialogFrame(img`
    11bbbbbbbbbbbbbbbbbbbb11
    1b11bb11bb11bb11bb11bbb1
    bbb11bb11bb11bb11bb11b1b
    bb1bbbbbbbbbbbbbbbbbb11b
    b11bb11111111111111bb1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1bb11111111111111bb11b
    b11bbbbbbbbbbbbbbbbbb1bb
    b1b11bb11bb11bb11bb11bbb
    1bbb11bb11bb11bb11bb11b1
    11bbbbbbbbbbbbbbbbbbbb11
    `)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    moola = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    tiles.setTileAt(value, sprites.dungeon.floorDark0)
    tiles.placeOnTile(moola, value)
}
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 0)
scene.cameraFollowSprite(mySprite)
info.setLife(5)
ded = 0
_2d = 1
mySprite.ay = 500
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
console.log("Done Startup")
game.splash("Save The World", "By Eli")
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . f f . . . . . . . 
    . . 4 4 e . f e f f f f f . . . 
    . . 4 d 4 f e e e f e f f f . . 
    . . f f f e e 4 f f 2 e f f f . 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    . . f f f e e 4 f f 2 e f f f . 
    . . 4 d 4 f e e e f e e f f . . 
    . . 4 4 e . f e f f f f f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . 4 4 e . f e f f f f f . . . 
    . . 4 d 4 f e e e f e f f f . . 
    . . f f f e e 4 f f 2 e f f f . 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    . . f f f e e 4 f f 2 e f f f . 
    . . 4 d 4 f e e e f e e f f . . 
    . . 4 4 e . f e f f f f f . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . 4 4 e . f e f f f f f . . . 
    . . 4 d 4 f e e e f e f f f . . 
    . . f f f e e 4 f f 2 e f f f . 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    . f 5 2 2 4 d d 4 e f 2 e 2 2 f 
    f f 4 2 2 4 d f f e f 2 e 2 f f 
    f f 4 2 2 e d 1 b f f 2 e f f . 
    . . f f f e e 4 f f 2 e f f f . 
    . . 4 d 4 f e e e f e e f f . . 
    . . 4 4 e . f e f f f f f . . . 
    . . . . . . . f f . . . . . . . 
    `],
500,
true
)
pause(1000)
scene.cameraShake(5, 1000)
animation.runImageAnimation(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `],
100,
false
)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("Eli: Wow i think its a earthquake", DialogLayout.Bottom)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("Roz: The world is going to explode", DialogLayout.Right)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("Mocca: Ya", DialogLayout.Left)
music.playTone(262, music.beat(BeatFraction.Half))
game.showLongText("Roz And Mocca: Uh Oh", DialogLayout.Center)
music.playTone(262, music.beat(BeatFraction.Half))
info.startCountdown(1)
forever(function () {
    if (controller.up.isPressed()) {
    	
    } else if (controller.down.isPressed()) {
    	
    } else if (controller.left.isPressed()) {
    	
    } else if (controller.right.isPressed()) {
    	
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        console.log("Animation Stop")
    }
})
forever(function () {
    if (_2d == 1) {
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            mySprite.ay = 100
            console.log("On Left Wall (2D)")
        } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
            mySprite.ay = 100
            console.log("On Right Wall (2D)")
        } else {
            mySprite.ay = 500
        }
    }
})
forever(function () {
    console.logValue("x", mySprite.x)
    console.logValue("y", mySprite.y)
    console.logValue("2d", _2d)
})
forever(function () {
    console.logValue("Frames", randint(30, 60))
    pause(1000)
})
