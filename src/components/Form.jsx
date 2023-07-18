import { Box, Button, Grid, TextField } from "@mui/material";

const Form = ({ data = {}, handleChange = () => {}, onSubmit = () => {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#445A6F",
        p: "0.825rem",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            placeholder="City"
            onChange={(e) => handleChange(e)}
            name="city"
          />
        </Grid>

        <Grid item xs={4}>
          <Button disabled={!data?.city} onClick={onSubmit}>
            Get Weather
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;

// by using variant='contained' colur will be filled to the Button
//The handleChange function is called whenever there is a change event in the form inputs, such as typing in the city or country input fields.
// It receives the event object and extracts the name and value of the input field from e.target.name and e.target.value, respectively.
// It uses the spread operator ({ ...data }) to create a copy of the existing data object, and then updates the corresponding field with the new value.
// Finally, it calls setData with the updated data object, triggering a re-render of the component with the updated form data.
