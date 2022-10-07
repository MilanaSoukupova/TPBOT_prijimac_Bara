radio.onReceivedString(function (receivedString) {
    if (receivedString == "dopredu") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 100)
    } else if (receivedString == "dozadu") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 100)
    } else if (receivedString == "doleva") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 100)
    } else if (receivedString == "doprava") {
        TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 100)
    } else {
        TPBot.stopCar()
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
