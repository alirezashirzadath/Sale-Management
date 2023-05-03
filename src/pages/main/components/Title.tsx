import {VerticalSpace} from "../../../constans/constans";
import {Stack, Typography} from "@mui/material";

const Title = () => {
return (
    <>
        {VerticalSpace("1.2rem")}
        <Stack sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "end",
            px: 2
        }}>
            <Typography dir={"rtl"} sx={{color: "white"}} variant={"h4"}>
                سلام علیرضا !
            </Typography>
            <Typography dir={"rtl"} sx={{color: "rgba(255,255,255,0.8)"}} variant={"h6"} fontWeight={"200"}>
                خوش اومدی
            </Typography>
        </Stack>
        {VerticalSpace("1.2rem")}
    </>
)
}
export default Title;