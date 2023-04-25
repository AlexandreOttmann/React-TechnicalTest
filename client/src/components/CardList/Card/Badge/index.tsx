import { IBadge } from "../../../../@types/apiResults";
import { ActiveBadge } from "./styles";

const Badge = ({ status }: IBadge) => {
  const render = () => {
    switch (status) {
      case "locked":
        return (
          <ActiveBadge color="#b52430" bgcolor="#fdf1f2">
            Locked
          </ActiveBadge>
        );
      case "active":
        return (
          <ActiveBadge color="#068e70" bgcolor="#ecfdf9">
            Active
          </ActiveBadge>
        );
      case "lost":
        return (
          <ActiveBadge color="#fea791" bgcolor="#ffebe6">
            Lost
          </ActiveBadge>
        );
      default:
        return null;
    }
  };
  return <>{render()}</>;
};

export default Badge;
