import {Stack} from "@mui/material";

const NavItem = ({icon,active,onClick}:{icon:JSX.Element,active:boolean,onClick:() => void}) => {
    return (
        <Stack onClick={onClick} sx={{
            color : active ? "white" : "rgba(255,255,255,0.6)",
            fontSize:"1.5rem"
        }}>
            {icon}
        </Stack>
    )
}
export default NavItem;