import { DivConf } from "../styles";
import Buttons from "./Buttons";

function Conf(props){
    
    return(
        <DivConf>
            <h1>{props.ConfName}</h1>
            <div>
                <Buttons ButName='Curto' Temp={props.TimeCurto} TempName={props.ConfName} Tip='SetTemp' />
                <Buttons ButName='Longo' Temp={props.TimeLongo} TempName={props.ConfName} Tip='SetTemp'/>
            </div>
        </DivConf>
    );
}

export default Conf;