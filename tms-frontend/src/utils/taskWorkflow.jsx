export const validTransition = (current, next) => {
  const flow = {
    Pending: "In Progress",
    "In Progress": "Completed",
    Completed: null
  };

  return flow[current] === next;
};
