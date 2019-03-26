class LDJ {
  constructor(data) {
    this.type = "changed"
    this.message = data,
    this.timestamp = Date.now()  
  }

  toJson() {
    return JSON.stringify(this) + "\n"
  }
}


module.exports = LDJ




// function LDJ(data) {
//   this.type = "changed"
//   this.message = data,
//   this.timestamp = Date.now()

//   this.toJson = () => JSON.stringify(this) + "\n"
// }


