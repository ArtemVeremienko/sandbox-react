import Log from './log'
import Calc from './calc'

import img from './react-logo.jpg'

const calc = new Calc()
const log = new Log()

log.log(calc.add(1, 2, 3))

const el = document.createElement('img')
el.src = img
document.body.append(el)