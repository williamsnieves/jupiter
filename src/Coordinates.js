class Coordinates {
  constructor (x, y) {
    this._x = x
    this._y = y
  }

  get x () {
    return this._x
  }

  set x (xValue) {
    this._x = xValue
  }

  get y () {
    return this._y
  }

  set y (yValue) {
    this._y = yValue
  }
}

export default Coordinates
