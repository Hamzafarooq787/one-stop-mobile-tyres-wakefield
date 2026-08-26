import {
  Phone,
  Mail,
  Disc,
  ShieldCheck,
  Zap,
  MapPin,
  Timer,
  Award,
  Handshake,
  ArrowRight,
  Home,
  Wallet,
  BadgeCheck,
  Map,
  Star,
  ChevronDown,
  LocateFixed,
  Clock,
  Siren,
  Menu,
  X,
  CheckCircle2,
  ScrollText,
  Cpu,
  Eye,
  Wrench,
  Factory,
  Truck,
  Unlock,
  RefreshCw,
  Hammer,
  Settings2,
  Sparkles,
  Search,
  CircleDot,
  Route,
  Gauge,
  Network,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  call: Phone,
  mail: Mail,
  tire_repair: Disc,
  verified_user: ShieldCheck,
  bolt: Zap,
  location_on: MapPin,
  timer: Timer,
  workspace_premium: Award,
  handshake: Handshake,
  arrow_forward: ArrowRight,
  home: Home,
  payments: Wallet,
  verified: BadgeCheck,
  map: Map,
  star: Star,
  expand_more: ChevronDown,
  my_location: LocateFixed,
  schedule: Clock,
  emergency_share: Siren,
  menu: Menu,
  close: X,
  check_circle: CheckCircle2,
  history_edu: ScrollText,
  memory: Cpu,
  visibility: Eye,
  engineering: Wrench,
  factory: Factory,
  local_shipping: Truck,
  lock_open: Unlock,
  build: Wrench,
  sync_alt: RefreshCw,
  handyman: Hammer,
  settings_suggest: Settings2,
  new_releases: Sparkles,
  search: Search,
  trip_origin: CircleDot,
  route: Route,
  speed: Gauge,
  hub: Network,
};

export default function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = icons[name] ?? CircleDot;
  return (
    <Cmp
      className={`inline-block shrink-0 ${className}`}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
