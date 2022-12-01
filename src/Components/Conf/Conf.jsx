import Buttons from "./Buttons";
import { DivConf, Title } from "./stylesConf";

function Conf(props){
    
    return(
        <DivConf>
            <Title>{props.ConfName}</Title>

            <div>
                <Buttons ButName='Curto' Temp={props.TimeCurto} TempName={props.ConfName} Tip='SetTemp' />
                <Buttons ButName='Longo' Temp={props.TimeLongo} TempName={props.ConfName} Tip='SetTemp'/>
            </div>
            
        </DivConf>
    );
}

export default Conf;