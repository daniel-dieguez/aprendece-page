import { Bounce } from 'react-toastify'
export const OptionsToast = { position: 'bottom-right', transition: Bounce }

export function returnYear(date) {
    var d = new Date(date),
      year = d.getFullYear()
  
    return year + ''
  }



export default {OptionsToast,
     returnYear}
