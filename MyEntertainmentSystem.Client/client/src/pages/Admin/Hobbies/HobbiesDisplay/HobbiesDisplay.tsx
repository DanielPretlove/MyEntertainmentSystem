import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useHobbiesAdminContext } from "../../../../context/Hobbies/Admin/HobbiesAdminContext";
import { IHobbies } from "../../../../interfaces/IHobbies";

interface HobbiesDisplayProps {
  hobby: IHobbies;
}

export default function HobbiesDisplay({ hobby }: HobbiesDisplayProps) {
  const dialog = useHobbiesAdminContext();

  return (
    <Dialog
      open={dialog.view}
      onClose={() => dialog.dispatch({ type: "close" })}>
      <DialogTitle>
        <Typography variant="h3">{hobby.name}</Typography>
      </DialogTitle>
      <DialogContent>
        {/* <Typography variant="h6">Description: {hobby.description}</Typography>
        <Typography variant="h6">Episodes: {hobby.episodes}</Typography>
        <Typography variant="h6">Description: {hobby.description}</Typography>
        <Typography variant="h6">Description: {hobby.description}</Typography>
        <Typography variant="h6">Description: {hobby.description}</Typography> */}
      </DialogContent>
    </Dialog>
  );
}
