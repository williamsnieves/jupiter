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
      if (commandElement === 'I' || commandElement === 'L') {
        this.orientation = orientation[this.orientation].left
      }

      if (commandElement === 'A') {
        this.coordinates = this.move()
      }
    })

    return `${this.coordinates.x} ${this.coordinates.y} ${this.orientation}`
  }

  setOrientation (orientation) {
    this.orientation = orientation
  }

  move () {
    let y = this.coordinates.y
    let x = this.coordinates.x

    if (this.orientation === orientation.N.value) {
      y = (y + 1) % this.dimensions.height
    }

    if (this.orientation === orientation.E.value) {
      x = x < this.dimensions.width ? x + 1 : (x + 1) % this.dimensions.width
    }

    if (this.orientation === orientation.O.value) {
      x = x > 0 ? x - 1 : this.dimensions.width - 1
    }

    if (this.orientation === orientation.S.value) {
      y = y > 0 ? y - 1 : this.dimensions.height - 1
    }

    return new Coordinates(x, y)
  }
}

export default Robot
