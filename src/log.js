export default class Log {
  log(msg) {
    console.group('Sum of number')
    console.log('=============')
    console.log(msg)
    console.log('=============')
    console.groupEnd()
  }
}