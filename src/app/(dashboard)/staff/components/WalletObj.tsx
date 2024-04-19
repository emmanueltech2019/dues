import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {
  faCubes,
  faDollarSign,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { faGem} from "@fortawesome/free-regular-svg-icons";

export const wallet = [
    {
      icon: <FontAwesomeIcon icon={faDollarSign} className="h-[30px] w-[30px] text-[#ff9b44]" />,
      stat: '$112',
      name: "Next Paid Amount",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faDollarSign}
          className="h-[30px] text-[#55ce63]"
        />
      ),
      stat: '$104',
      name: "Last Paid Amount",
    },
    {
      icon: <CalendarMonthIcon className="h-[30px] text-[#ff9b44]" />,
      stat: "06/04/2024",
      name: "Next Pay Date",
    },
    {
      icon: <EventAvailableIcon className="h-[30px] text-[#55ce63]" />,
      stat: "06/03/2024",
      name: "Last Paid Date",
    },
  ];