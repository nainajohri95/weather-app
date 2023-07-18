import { Box, Button, TextField } from "@mui/material";

const Form = ({ data = {}, handleChange = () => {}, onSubmit = () => {} }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#445A6F",
        p: "0.825rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <TextField
          placeholder="City"
          onChange={(e) => handleChange(e)}
          name="city"
        />

        <TextField
          placeholder="Country"
          onChange={(e) => handleChange(e)}
          name="country"
        />
      </Box>

      <Button disabled={!(data?.city && data?.country)} onClick={onSubmit}>
        Get Weather
      </Button>
    </Box>
  );
};

export default Form;

// by using variant='contained' colur will be filled to the Button
//The handleChange function is called whenever there is a change event in the form inputs, such as typing in the city or country input fields.
// It receives the event object and extracts the name and value of the input field from e.target.name and e.target.value, respectively.
// It uses the spread operator ({ ...data }) to create a copy of the existing data object, and then updates the corresponding field with the new value.
// Finally, it calls setData with the updated data object, triggering a re-render of the component with the updated form data.
