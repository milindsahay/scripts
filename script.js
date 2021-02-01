const robot = require('robotjs')
let jumpToPreSign = process.argv[2];
openApp = (name) => {
    robot.keyTap("space", "command");
    robot.typeString(`${name}`)
    setTimeout(()=>{
        robot.keyTap("enter")
    },500)

}

openAuthenticatorAndCopy = () => {
    robot.moveMouse(1563, 64)
    robot.mouseClick()
    robot.moveMouseSmooth(1328, 175)
    robot.mouseClick()
    robot.moveMouse(1563, 64)
    robot.mouseClick()
}

openVpnAndConnect = () => {
    robot.moveMouse(542,183)
    if(!jumpToPreSign) {
        robot.mouseClick()
    }
    setTimeout(()=>{
        robot.moveMouse(1136, 439)
        robot.mouseClick()
    },2000)
    setTimeout(()=>{
        robot.keyTap("v", "command")
        robot.moveMouse(979, 408)
        robot.mouseClick()
    },5000)
    setTimeout(()=>{
        robot.moveMouse(1144,442)
        robot.mouseClick()
    },7000)
}

openApp("google chrome")
setTimeout(openAuthenticatorAndCopy, 1000)
setTimeout(() => openApp("pulse secure"), 1500)
setTimeout(() => openVpnAndConnect(), 3500)