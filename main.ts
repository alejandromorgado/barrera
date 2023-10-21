basic.forever(function () {
    if (0 > 0 && 0 < 0) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 0)
        basic.pause(3000)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 90)
        basic.pause(200)
    }
})
