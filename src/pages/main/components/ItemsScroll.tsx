import {Box, CircularProgress, Stack, Typography} from "@mui/material";
import {HorizontalSpace, VerticalSpace} from "../../../constans/constans";
import {ArrowBack} from "@mui/icons-material";
import Item from "./Item";
import {useEffect} from "react";

const ItemsScroll = ({items}: { items: { title: string, desc: string, increase: boolean, mainColor: string, percent: number, price: number }[] }) => {
    useEffect(() => {
    })
    return (
        <Stack id={"item"} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            height: "60vh",
            overflow: "auto",
            boxShadow: "0 0 15px 1px rgba(0,0,0,0.08)",textAlign:"right"

        }}>
            <Box sx={{
                flex: "0 0 auto",
                height: "1rem",
            }}></Box>
            {items.map((item: any) => {
                return <Item increase={item.increase} percent={item.percent} mainColor={item.mainColor}
                             title={item.title} desc={item.desc} price={item.price}/>
            })}

            <Box sx={{
                flex: "0 0 auto",
                height: "4rem"
            }}></Box>


        </Stack>
    )
}
export default ItemsScroll;