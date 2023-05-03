import {Box, CircularProgress, Stack, Typography} from "@mui/material";
import {HorizontalSpace, VerticalSpace} from "../../../constans/constans";
import {ArrowBack} from "@mui/icons-material";
import Item from "./Item";
import {useEffect} from "react";

const ItemsScroll = ({items}: { items: { title: string, desc: string, increase: boolean, mainColor: string, percent: number, price: number }[] }) => {
    useEffect(() => {
        let item = document.getElementById("item");
        if (item) {

            item.addEventListener("scroll", (e: any) => {
                if (item) {
                    var array = Array.from(item.children);
                    array.forEach((itemm: any) => {
                        let yPos = itemm.getBoundingClientRect().y

                        if (yPos < 200) {
                            itemm.style.opacity = (yPos - 100).toString() + "%"
                        }

                        if (yPos < 515 && yPos > 500) {
                            var res = ((10 - (yPos - 502)) / 20) * 100;

                            itemm.style.opacity = (res + 27).toString() + "%";
                            itemm.style.mixBlendMode = "lighten";
                        }


                    })
                }
            })
        }

    }, [])
    return (
        <Stack id={"item"} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "60vh",
            overflowX: "auto",
            boxShadow: "0 0 15px 1px rgba(0,0,0,0.08)"

        }}>
            <Box sx={{
                flex: "0 0 auto",
                height: "1rem"
            }}></Box>
            {items.map((item: any) => {
                return <Item increase={item.increase} percent={item.percent} mainColor={item.mainColor}
                             title={item.title} desc={item.desc} price={item.price}/>
            })}

            <Box sx={{
                flex: "0 0 auto",
                height: "2.5rem"
            }}></Box>


        </Stack>
    )
}
export default ItemsScroll;