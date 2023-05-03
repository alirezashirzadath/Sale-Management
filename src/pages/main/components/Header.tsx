import {Box, Stack} from "@mui/material";
import {GridViewRounded} from "@mui/icons-material";

const Header = () => {
    return (
        <Stack sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
            px: 2.5
        }}>
            <GridViewRounded sx={{
                color: "white",
                fontSize: "1.8rem"
            }}/>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "white",
                height: "3rem",
                width: "3rem",
                borderRadius: "18px"
            }}>
                <Box sx={{
                    height: "75%",
                    width: "75%",
                }}>
                    <img style={{
                        objectFit: "cover",
                        borderRadius: "15px",
                    }} height={"100%"} width={"100%"} src={"/images/profile.jpg"}></img>
                </Box>
            </Box>
        </Stack>
    )
}
export default Header;