import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
library.add(fab, faSquareCheck, faMugSaucer, faArrowRight)


function Icon({icon, color}) {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={26}
    />
  )
}

export default Icon
