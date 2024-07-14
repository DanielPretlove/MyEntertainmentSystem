import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useHobbiesAdminContext } from "../../../../context/Hobbies/Admin/HobbiesAdminContext";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./HobbiesCreate.less";
import { useHobbiesCreateContext } from "../../../../context/Hobbies/CreateAndUpload/HobbiesCreateAndUploadContext";
import {
  CompletionStateEnum,
  HobbyEnum,
} from "../../../../interfaces/IHobbies";
import { getHobbyTypeValue } from "../../../../utils/enumConverter";

export default function HobbiesCreate() {
  const dialog = useHobbiesAdminContext();
  const hobbies = useHobbiesCreateContext();

  return (
    <Dialog
      className="dialog"
      open={dialog.create}
      onClose={() => dialog.dispatch({ type: "close" })}
    >
      <DialogTitle>
        <div className="close">
          <CloseIcon
            onClick={() => {
              dialog.dispatch({ type: "close" });
            }}
          />
        </div>
        <Typography variant="h3" textAlign={"center"}>
          Add New Hobby
        </Typography>
      </DialogTitle>
      <DialogContent>
        <div className="container">
          <div className="content-container">
            <Box mb={5} display="flex" alignItems="center">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                onChange={hobbies.handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                </Button>
              </label>
              {hobbies.data.imagePath && (
                <Typography variant="body1" ml={2}>
                  {hobbies.data.name}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={hobbies.data.name}
                onChange={hobbies.handleChange}
                variant="outlined"
              />
            </Box>

            <Box mb={3}>
              <TextField
                fullWidth
                label="Categories"
                name="categories"
                value={hobbies.data.categories}
                onChange={hobbies.handleChange}
                variant="outlined"
                multiline
              />
            </Box>

            <Box mb={3}>
              {hobbies.data.description.map((desc, index) => (
                <FormControl
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  key={index}
                >
                  <TextField
                    fullWidth
                    label={`Description Content ${index + 1}`}
                    name={`description${index}`}
                    value={desc.content}
                    onChange={(event) => hobbies.handleDescriptionChange(index, event)}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </FormControl>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={hobbies.addDescription}
              >
                Add Description
              </Button>
            </Box>

            <Box mb={3}>
              <TextField
                fullWidth
                label="Episodes"
                name="episodes"
                value={hobbies.data.episodes}
                onChange={hobbies.handleChange}
                variant="outlined"
                multiline
              />
            </Box>

            <Box mb={3}>
              <FormControlLabel
                label="Featured"
                control={
                  <Checkbox
                    checked={hobbies.data.featured}
                    onChange={hobbies.handleChange}
                    name="featured"
                    color="primary"
                  />
                }
              />
            </Box>

            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="hpbby-type">Hobby Type</InputLabel>
                <Select
                  labelId="hobby Type"
                  name="Hobby Type"
                  value={hobbies.data.hobbyType}
                  onChange={() => hobbies.handleChange}
                  label="Hobby Type"
                >
                  {Object.values(HobbyEnum).map((ht) => (
                    <MenuItem key={ht} value={ht}>
                      {ht}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mb={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="completion-state">Completion State</InputLabel>
                <Select
                  labelId="Completion State"
                  name="Completion State"
                  value={hobbies.data.completionState}
                  onChange={() => hobbies.handleChange}
                  label="Completion State"
                >
                  {Object.values(CompletionStateEnum)
                    .filter((value) => typeof value !== "string")
                    .map((cs) => (
                      <MenuItem key={cs} value={cs}>
                        {cs}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => hobbies.AddNewHobby(hobbies.data)}>Add</Button>
        <Button onClick={() => dialog.dispatch({ type: "close" })}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
