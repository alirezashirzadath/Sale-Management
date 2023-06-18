import {Box, CircularProgress, Grid, Stack, Typography} from "@mui/material";
import {ArrowBack, GridViewRounded} from "@mui/icons-material";
import {HorizontalSpace, primaryColor, secondaryColor, VerticalSpace} from "../../constans/constans";
import {useEffect} from "react";
import ItemsScroll from "./components/ItemsScroll";
import Title from "./components/Title";
import {HiOutlineHome} from "react-icons/hi";
import {RxPerson} from "react-icons/rx";
import {BiWallet} from "react-icons/bi";
import {BsBarChartFill} from "react-icons/bs";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";

const Main = () => {


    return (
        <Stack sx={{
            minHeight: "100vh",
            minWidth: "100vw",
            background: "linear-gradient(168deg, " + primaryColor + " 0%, " + secondaryColor + " 100%)",
            display:"flex",
            flexDirection:"column",
            backgroundColor:"blueviolet",
            justifyContent:"start",
            alignItems:"center"
        }}>
            <Stack sx={{
                maxHeight:"667px",
                maxWidth:"375px",
                mt:"2rem",
                position:"relative"
            }}>
                <Grid sx={{
                    position:"relative"
                }}  container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        <Title/>
                    </Grid>
                    <Grid item xs={12}>
                        <ItemsScroll items={[
                            {
                                percent: 85,
                                price: 52000,
                                increase: true,
                                mainColor: "rgb(255,147,147)",
                                desc: "مقدار کل فروش ها در حال حاضر",
                                title: "فروش ها"
                            },
                            {
                                percent: 40,
                                price: 46500,
                                increase: true,
                                mainColor: "rgb(246,137,255)",
                                desc: "مقدار کل سود ماهیانه محصولات",
                                title: "سود ماهیانه"
                            },
                            {
                                percent: 55,
                                price: 89000,
                                increase: false,
                                mainColor: "rgb(255,224,131)",
                                desc: "مقدار درآمد خالص فروش",
                                title: "درآمد خالص"
                            },
                            {
                                percent: 70,
                                price: 17500,
                                increase: false,
                                mainColor: "rgb(147,226,255)",
                                desc: "مقدار سفارشات ماهیانه",
                                title: "سفارشات"
                            }

                        ]}/>
                    </Grid>
                    <BottomNav items={[
                        <HiOutlineHome/>,
                        <BiWallet/>,
                        <BsBarChartFill />,
                        <RxPerson/>,
                    ]}/>
                </Grid>


            </Stack>

        </Stack>
    )
}
export default Main;