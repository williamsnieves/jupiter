class Plane {
  constructor (width, height) {
    this._width = width
    this._height = height
  }

  get width () {
    return this._width
  }

  set width (widthValue) {
    this._width = widthValue
  }

  get height () {
    return this._height
  }

  set height (heightValue) {
    this._height = heightValue
  }
}

export default Plane
