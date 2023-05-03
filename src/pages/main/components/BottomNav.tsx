import {Stack} from "@mui/material";
import {HiOutlineHome} from "react-icons/hi";
import {BiWallet} from "react-icons/bi";
import {BsBarChartFill} from "react-icons/bs";
import {RxPerson} from "react-icons/rx";
import NavItem from "./navItem";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_INDEX} from "../../../services/redux/slices/mainSlice";

const BottomNav = ({items}:{items:JSX.Element[]}) => {


    const navState = useSelector((state:any) => state.mainReducer);
    const dispatch = useDispatch();
    const changeNav = (index:number) => {
        dispatch(CHANGE_INDEX(index))
    }
    return (
        <Stack sx={{
            position:"fixed",
            width:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            bottom:"1.5rem"
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