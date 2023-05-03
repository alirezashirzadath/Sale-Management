import {Box, CircularProgress, Stack, Typography} from "@mui/material";
import {HorizontalSpace, VerticalSpace} from "../../../constans/constans";
import {ArrowBack} from "@mui/icons-material";

const Item = ({mainColor,title,desc,price,percent,increase}:{increase:boolean,percent:number,mainColor:string,title:string,desc:string,price:number}) => {
    return (
        <Box sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            width: "82%",
            borderRadius: "20px",
            p: 2.5,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.5
        }}>
            <Stack sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "end",
                width: "100%"
            }}>
                <Typography sx={{
                    color: "white",
                    fontWeight: "bold"
                }} variant={"h6"}>
                    {title}
                </Typography>
                {VerticalSpace("0.4rem")}
                <Typography sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: "400",
                    fontSize: "0.9rem"
                }}>
                    {desc}
                </Typography>
                {VerticalSpace("0.4rem")}
                <Typography variant={"h5"} dir={"rtl"} sx={{
                    color: mainColor,
                    fontWeight: "400",
                }}>
                    {price} ریال
                </Typography>
            </Stack>
            <Stack sx={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
            }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <CircularProgress sx={{color: mainColor}} thickness={1.5}
                                      variant={"determinate"} size={80} value={percent}/>
                    <Box sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                    }}>
                        <Typography sx={{
                            fontSize: "1.2rem",

                            color: mainColor,
                            fontWeight: "bold"
                        }}>{percent}%</Typography>
                    </Box>
                </Box>
                {HorizontalSpace("0.5rem")}
                <ArrowBack sx={{
                    alignSelf: "start",
                    rotate: increase ?  "45deg" : "-45deg",
                    color: mainColor
                }}/>


            </Stack>
        </Box>
    )
}
export default Item;