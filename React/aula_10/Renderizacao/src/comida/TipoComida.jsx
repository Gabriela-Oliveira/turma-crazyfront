import Salgado from "./Salgado";
import Doce from "./Doce";
import Amargo from "./Amargo";

function TipoComida(props) {
    // ATENÇÃO
    // Quando temos mais de dois caminhos a seguir(tomada de decição),
    // é melhor utilizar um switch.

    // switch (props.tipo) {
    //     case "Salgado":
    //         return <Salgado/>
    //         break;
    //     case "Doce":
    //         return <Doce/>
    //         break;
    //     case "Amargo":
    //         return <Amargo/>
    //         break;
    
    //     default:
    //         break;
    // }

    /////////////////////////////////////////////////////////////////////////

    return (
        <div>
            {props.tipo === "Doce" && <Doce/>}
            {props.tipo === "Salgado" && <Salgado/>}
            {props.tipo === "Amargo" && <Amargo/>}
        </div>
    );

    ////////////////////////////////////////////////////////////////////////

    // if (props.tipo === "Salgado") {
    //     return <Salgado/>
    // } else {
    //     return <Doce/>
    // }

    ////////////////////////////////////////////////////////////////////////

    // if (props.tipo === "Salgado") return <Salgado/>

    // return <Doce/>

    ///////////////////////////////////////////////////////////////////////

    // return <div>
    //     {props.tipo === "Doce" ? <Doce/> : <Salgado/>}
    // </div>
}

export default TipoComida;