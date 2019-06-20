import orientation from './modules/Orientation'
import Coordinates from './Coordinates'
import Plane from './Plane'
class Robot {
  constructor (x, y, orientationValue) {
    this.orientation =
      orientationValue !== undefined ? orientationValue : orientation.N.value
    this.coordinates = new Coordinates(x, y)
    this.dimensions = new Plane(5, 5)
  }

  runCommand (command) {
    const commandToList = command.split('')

    commandToList.forEach(commandElement => {
      if (commandElement === 'D' || commandElement === 'R') {
        this.orientation = orientation[this.orientation].right
      }
    })

    return `${this.coordinates.x} ${this.coordinates.y} ${this.orientation}`
  }

  setOrientation (orientation) {
    this.orientation = orientation
  }
}

export default Robot
