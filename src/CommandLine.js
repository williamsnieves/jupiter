import Plane from './Plane'
import Robot from './Robot'
class CommandLine {
  constructor () {
    this.readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  handleQuestions () {
    let robot
    const question1 = () => {
      return new Promise((resolve, reject) => {
        this.readline.question(
          `Please enter your plane dimensions: `,
          planeDimensions => {
            const dimensions = {
              width: planeDimensions.split('')[0],
              height: planeDimensions.split('')[1]
            }
            const plane = new Plane(dimensions.width, dimensions.height)

            resolve()
          }
        )
      })
    }

    const question2 = () => {
      return new Promise((resolve, reject) => {
        this.readline.question(
          `Please introduce the coordinates: `,
          robotCoordinates => {
            const coordinates = {
              x: robotCoordinates.split('').filter(res => res !== ' ')[0],
              y: robotCoordinates.split('').filter(res => res !== ' ')[1],
              orientation: robotCoordinates
                .split('')
                .filter(res => res !== ' ')[2]
            }

            robot = new Robot(
              parseInt(coordinates.x, 10),
              parseInt(coordinates.y, 10),
              coordinates.orientation
            )
            resolve()
          }
        )
      })
    }

    const question3 = () => {
      return new Promise((resolve, reject) => {
        this.readline.question(
          `Please introduce the sequence: `,
          robotSequence => {
            robot.runCommand(robotSequence)
            robot.printToTerminal()
            resolve()
          }
        )
      })
    }

    return [question1, question2, question3]
  }

  async runQuestions (question) {
    await question[0]()
    await question[1]()
    await question[2]()

    this.readline.close()
  }
}

export default CommandLine
