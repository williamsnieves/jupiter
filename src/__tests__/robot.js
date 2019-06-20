import Robot from '../Robot'

const robot = new Robot(0, 0, 'N')
describe('Check rotation to right of the robot', () => {
  beforeEach(() => {
    robot.setOrientation('N')
  })
  it('rotate to right one command', () => {
    expect(robot.runCommand('D')).toEqual('0 0 E')
  })

  it('rotate to right two commands', () => {
    expect(robot.runCommand('DD')).toEqual('0 0 S')
  })

  it('rotate to right three commands', () => {
    expect(robot.runCommand('DDD')).toEqual('0 0 O')
  })

  it('rotate to right fourth commands', () => {
    expect(robot.runCommand('DDDD')).toEqual('0 0 N')
  })
})
