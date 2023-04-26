import { Toolbar, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

function Header() {
  return (
    <Toolbar
      sx={{
        background: "#3f51b5",
        color: "white",
        font: "500 20px/32px Roboto,Helvetica Neue,sans-serif",
        display: "flex",
        width: "100%",
        height: "64px",
        padding: "0 16px",
        flexDirection: "row",
        alignItems: "center",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      <span>Angular 9 MutTable CRUD Example</span>
      <span>
        Reload Data:{" "}
        <IconButton color="inherit" aria-label="refresh">
          <RefreshIcon fontSize="medium"></RefreshIcon>
        </IconButton>
      </span>
    </Toolbar>
  );
}

export default Header;
