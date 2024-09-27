import { Chip, ChipOwnProps } from "@mui/material";

interface IProps {
  status: string;
}

const statusColorMap: Record<string, ChipOwnProps["color"]> = {
  Pending: "info",
  Overdue: "error",
  Paid: "success",
};

export function StatusChip(props: IProps) {
  const { status } = props;

  return (
    <Chip
      data-testid="status"
      component="span"
      size="small"
      label={status}
      color={statusColorMap[status]}
    />
  );
}
