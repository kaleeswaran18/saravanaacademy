import {
  FaGraduationCap,
  FaBriefcase,
  FaHeartbeat,
  FaUsers,
  FaHandsHelping,
  FaBook,
  FaTools,
  FaBullhorn,
  FaBookOpen,
  FaSchool,
  FaStar,
  FaHome,
  FaUserClock,
  FaLeaf,
  FaSeedling,
  FaCalendarCheck,
  FaClipboardList,
  FaChartBar,
  FaCalendarAlt,
  FaCamera,
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaCheck,
    FaHospital,     // ✅ Add
  FaAward,        // ✅ Add
   FaBrain,
  FaCode,
} from "react-icons/fa";

const ICON_MAP = {
  graduationCap: FaGraduationCap,
  briefcase: FaBriefcase,
  heartbeat: FaHeartbeat,
  users: FaUsers,
  handsHelping: FaHandsHelping,
  book: FaBook,
  tools: FaTools,
  bullhorn: FaBullhorn,
  bookOpen: FaBookOpen,
  school: FaSchool,
  star: FaStar,
  home: FaHome,
  userClock: FaUserClock,
  leaf: FaLeaf,
  seedling: FaSeedling,
  calendarCheck: FaCalendarCheck,
  clipboardList: FaClipboardList,
  chartBar: FaChartBar,
  calendarAlt: FaCalendarAlt,
  camera: FaCamera,
  questionCircle: FaQuestionCircle,
  phone: FaPhone,
  envelope: FaEnvelope,
  mapMarker: FaMapMarkerAlt,
  clock: FaClock,
  times: FaTimes,
  check: FaCheck,
   hospital: FaHospital,
  award: FaAward,
  brain: FaBrain,
code: FaCode,
};

function TrustIcon({ name, size = 22, className, ...props }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" {...props} />;
}

export default TrustIcon;
