type BadgeProps = {
  name: string;
  className: string;
};

const Badge = ({ name, className }: BadgeProps) => {
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "Haute":
        return "priority-high";
      case "Moyenne":
        return "priority-medium";
      case "Basse":
        return "priority-low";
      default:
        return "priority-low";
    }
  };

  return <span className={`badge ${getPriorityClass(name)}`}>{name}</span>;
};

export default Badge;
