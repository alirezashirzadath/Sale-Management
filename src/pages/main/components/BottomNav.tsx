import {Stack} from "@mui/material";
import {HiOutlineHome} from "react-icons/hi";
import {BiWallet} from "react-icons/bi";
import {BsBarChartFill} from "react-icons/bs";
import {RxPerson} from "react-icons/rx";
import NavItem from "./navItem";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_INDEX} from "../../../services/redux/slices/mainSlice";
import {primaryColor, secondaryColor} from "../../../constans/constans";

const BottomNav = ({items}:{items:JSX.Element[]}) => {


    const navState = useSelector((state:any) => state.mainReducer);
    const dispatch = useDispatch();
    const changeNav = (index:number) => {
        dispatch(CHANGE_INDEX(index))
    }
    return (
        <Stack sx={{
            position:"absolute",
            width:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            m:0,
            bottom:"0",
            backgroundColor:"blue",
            py:1.5,
            background: "linear-gradient(168deg, " + primaryColor + " 0%, " + secondaryColor + " 100%)",
            boxShadow:"0 -20px  30px 1px "+primaryColor
        }}>
            <Stack sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                width:"85%",
            }}>
                {items.map((item:any,index:number)=>{
                    return <NavItem onClick={() => changeNav(index)} icon={item} active={index === navState.activeNav} /> ;
                })}
            </Stack>
        </Stack>
    )
}
export default BottomNav;