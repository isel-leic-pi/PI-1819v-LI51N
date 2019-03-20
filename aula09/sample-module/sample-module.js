


module.exports = function (initArg) {
  return {
    m1: m1Impl,
    m2: m2Impl
  }

  function m1Impl(a) {
    console.log(`initArg: ${initArg}; a: ${a}`)
  }

  function m2Impl() {

  }
}
