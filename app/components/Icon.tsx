import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';
import { faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faDragon } from '@fortawesome/free-solid-svg-icons/faDragon';
import { faGun } from '@fortawesome/free-solid-svg-icons/faGun';
import { faExplosion } from '@fortawesome/free-solid-svg-icons/faExplosion';
import { faWandMagic } from '@fortawesome/free-solid-svg-icons/faWandMagic';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faDice } from '@fortawesome/free-solid-svg-icons/faDice';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faBrain} from "@fortawesome/free-solid-svg-icons/faBrain";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
library.add(fab, faSquareCheck, faMugSaucer, faArrowRight, faBook, faGun, faExplosion, faWandMagic, faDragon, faUser, faUsers, faDice, faGlobeEurope, faComment, faStar);


function Icon({icon, color, size}) {
  return (
    <FontAwesomeIcon
      icon={icon}
      color={color}
      size={size}
    />
  );
}

export default Icon;
