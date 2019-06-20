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

describe('Check rotation to left of the robot', () => {
  beforeEach(() => {
    robot.setOrientation('N')
  })
  it('rotate to left one command', async () => {
    expect(robot.runCommand('I')).toEqual('0 0 O')
  })

  it('rotate to left two commands', async () => {
    expect(robot.runCommand('II')).toEqual('0 0 S')
  })

  it('rotate to left three commands', async () => {
    expect(robot.runCommand('III')).toEqual('0 0 E')
  })

  it('rotate to left fourth commands', async () => {
    expect(robot.runCommand('IIII')).toEqual('0 0 N')
  })
})

describe('Move robot forward', () => {
  let robot
  beforeEach(() => {
    robot = new Robot(0, 0, 'N')
    robot.setOrientation('N')
  })
  it('move up robot one time', () => {
    expect(robot.runCommand('A')).toEqual('0 1 N')
  })
  it('move up robot three time', () => {
    expect(robot.runCommand('AAA')).toEqual('0 3 N')
  })
  it('move up robot MAX time', () => {
    expect(robot.runCommand('AAAAA')).toEqual('0 0 N')
  })
})
