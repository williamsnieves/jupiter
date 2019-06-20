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

describe('Move robot forward with rotation to right', () => {
  let robot
  beforeEach(() => {
    robot = new Robot(0, 0, 'N')
    robot.setOrientation('N')
  })
  it('move right robot one time', () => {
    expect(robot.runCommand('DA')).toEqual('1 0 E')
  })
  it('move right robot four time', () => {
    expect(robot.runCommand('DAAAA')).toEqual('4 0 E')
  })
})

describe('Move robot forward with rotation to left', () => {
  let robot
  beforeEach(() => {
    robot = new Robot(0, 0, 'N')
    robot.setOrientation('N')
  })

  it('move left robot one time', () => {
    expect(robot.runCommand('LA')).toEqual('4 0 O')
  })
  it('move left three time', () => {
    expect(robot.runCommand('LAAA')).toEqual('2 0 O')
  })
})

describe('Move robot (south) with double rotation to left', () => {
  let robot
  beforeEach(() => {
    robot = new Robot(0, 0, 'N')
    robot.setOrientation('N')
  })

  it('rotate double left and move robot one time', () => {
    expect(robot.runCommand('LLA')).toEqual('0 4 S')
  })
  it('rotate double left and move three time', () => {
    expect(robot.runCommand('LLAAA')).toEqual('0 2 S')
  })
})

describe('Jupiter testing suite first', () => {
  it('First example', () => {
    let robot
    robot = new Robot(1, 2, 'N')
    robot.setOrientation('N')
    expect(robot.runCommand('IAIAIAIAA')).toEqual('1 3 N')
  })
})

describe('Jupiter testing suite second', () => {
  it('Second example', () => {
    let robot
    robot = new Robot(3, 3, 'E')
    robot.setOrientation('E')
    expect(robot.runCommand('AADAADADDA')).toEqual('5 1 E')
  })
})
