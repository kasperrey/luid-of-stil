input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(1)
})
input.onSound(DetectedSound.Quiet, function () {
    radio.sendNumber(0)
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 128)
})
