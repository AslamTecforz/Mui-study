import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Btnmui() {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="www.facebook.com">
          Text
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Conatined</Button>
      </Stack>

      {/* how to add the color of this project */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary"></Button>
        <Button variant="contained" color="error"></Button>
        <Button variant="contained" color="info"></Button>
        <Button variant="contained" color="inherit"></Button>
        <Button variant="contained" color="success"></Button>
        <Button variant="contained" color="warning"></Button>
      </Stack>

      {/* add the size of this project */}

      <Stack display="block" direction="row" spacing={3}>
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="error" size="medium">
          medium
        </Button>
        <Button variant="contained" color="info" size="large">
          large
        </Button>
      </Stack>

      {/* add icon inside the button */}
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          small
        </Button>
        <Button variant="contained" color="error" endIcon={<SendIcon />}>
          medium
        </Button>
      </Stack>

      {/* create just button that contains only the icons */}
      <Stack spacing={3} direction="row">
        <IconButton color="warning" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* to disable the ripple effect and pass a event listerner */}
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="error" disableRipple>
          Disable ripple
        </Button>
      </Stack>

      {/* to a group of button togather */}
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="success"
          aria-label="alignment button group"
        >
          <Button
            onClick={() => {
              alert("The button was success fully clicked");
            }}
          >
            left
          </Button>
          <Button>Center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default Btnmui;
