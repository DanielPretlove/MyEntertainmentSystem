import { Chip, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useHobbiesAdminContext } from "../../../../context/Hobbies/Admin/HobbiesAdminContext";
import { HobbyEnum, IHobbies } from "../../../../interfaces/IHobbies";
import "./HobbyDisplay.less";
import CloseIcon from '@mui/icons-material/Close';
import { getCompletionStatusValue, getHobbyTypeValue } from "../../../../utils/enumConverter";

interface HobbiesDisplayProps {
  hobby: IHobbies;
}

export default function HobbiesDisplay({ hobby }: HobbiesDisplayProps) {
  const dialog = useHobbiesAdminContext();

  return (
    <Dialog
      className="dialog-display"
      open={dialog.view}
      onClose={() => dialog.dispatch({ type: "close" })}
    >
      <DialogTitle>
        <div className="close">
          <CloseIcon onClick={() => {dialog.dispatch({type: "close"})}} />
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="display-container">
          <img
            className="hobbyImage"
            alt={hobby.name}
            src={process.env.PUBLIC_URL + hobby.imagePath}
          />
          <div className="content-container">
            <Typography variant="h2" gutterBottom>{hobby.name}</Typography>
            <div className="tags">
              {hobby.categories.split(",").map((c, key) => {
                return <Chip key={key} label={c} color="primary" style={{ marginRight: "5px", marginBottom: "10px"}}></Chip>;
                
              })}
            </div>
            {!!hobby.episodes ? (
              <Typography variant="h6" gutterBottom>Epsisodes: {hobby.episodes}</Typography>
            ) : null}
            <Typography variant="h6" gutterBottom>Featured: {`${hobby.featured}`}</Typography>
            <Typography variant="h6" gutterBottom>Hobby Type: {getHobbyTypeValue(hobby.hobbyType)}</Typography>
            <Typography variant="h6" gutterBottom>Completion State: {getCompletionStatusValue(hobby.completionState)}</Typography>
              <Typography variant="h6">Synopsis:</Typography>
              {hobby.description.map((h, key) => {
                  return <Typography key={key} variant="h6" gutterBottom>{h.content}</Typography>;
              })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
