import {
  MdMonitor,
  MdOutlinePalette,
  MdVideogameAsset,
  MdCamera,
  MdAirplanemodeActive,
} from "react-icons/md";

export function Icon({ style }: { style: string }) {
  switch (style) {
    case "notebook":
      return <MdMonitor />;
    case "colors":
      return <MdOutlinePalette />;
    case "joystick":
      return <MdVideogameAsset />;
    case "camera":
      return <MdCamera />;
    case "plane":
      return <MdAirplanemodeActive />;
    default:
      return <></>;
  }
}
