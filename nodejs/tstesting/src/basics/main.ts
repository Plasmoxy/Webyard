import { hello, hi } from '../stuff/greeters'

(async () => {
    await hello()
    await hi()
})()
.catch(console.log)