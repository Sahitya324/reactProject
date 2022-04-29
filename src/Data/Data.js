//  Sidebar imports
import{HiUser, HiTrendingUp} from 'react-icons/hi';
import{BsAppIndicator} from 'react-icons/bs';
import{SiShopify} from 'react-icons/si';
import{RiCalendarCheckFill } from 'react-icons/ri';
import{BsCartDashFill} from 'react-icons/bs';
import{ImBlogger2} from 'react-icons/im';
import{MdQueryStats, MdOutlineTrendingDown} from 'react-icons/md';
import{GrMail} from 'react-icons/gr';
import{BsBank} from 'react-icons/bs';
import{RiBarChartGroupedFill } from 'react-icons/ri';



export const SidebarData = [
    {
      icon: BsAppIndicator,
      heading: "App",
    },
    {
        icon: SiShopify,
        heading: "E-Commerce",
      },
      {
        icon: MdQueryStats,
        heading: "Analytics",
      },
      {
        icon: BsBank,
        heading: "Banking",
      },
      {
        icon: RiCalendarCheckFill,
        heading: "Booking",
      },
];
export const SideData = [
  {
    icons: HiUser,
      headings: "User",
  },
 {
        icons: BsCartDashFill,
        headings: "E-Commerce",
    },
      {
        icons: ImBlogger2,
        headings: "Blog",
      },
];
export const Side = [
  {
    icon1: GrMail,
    heading1: "Mail",
  },
];


export const CardsData =[
{
  title: "Total Active Users",
  color: {
    backGround: "linear-gradient(180deg, white 0%, white 100%)",
    boxShadow: "0px 10px 20px 0px #e0c6f5",
    backGround1: " rgba(146, 255, 146, 0.7)",
    Text: "green",
  },
  barValue: 70,
  value: "18,765",
  percent: "+2.6%",
  png: HiTrendingUp,
  series:RiBarChartGroupedFill,
},
{
  title: "Total installed",
  color: {
    backGround: "linear-gradient(180deg, white 0%, white 100%)",
    boxShadow: "0px 10px 20px 0px #FDC0C7",
    backGround1: " rgba(146, 255, 146, 0.7)",
    Text: "green",
  },
  barValue: 80,
  value: "4,876",
  percent: "+0.2%",
  png: HiTrendingUp,
},
{
  title: "Total Downloads",
  color: {
    backGround: "linear-gradient(180deg, white 0%, white 100%)",
    boxShadow: "0px 10px 20px 0px #F9D59B",
    backGround1: " rgba(247, 219, 215, 0.7)",
    Text: "red",
  },
  barValue: 60,
  value: "678",
  percent: "-0.1%",
  png: MdOutlineTrendingDown,
},
]