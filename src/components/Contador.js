
import React, {useState, useEffect} from 'react'
import LabelCronometro from './LabelCronometro'
import Botao from './Botao'
import InserirTemp from './InserirTemp'
import  Descinput from './LabelInput'


const Contador = (props) => {
    // Variaveis de tempo com seus states zerados
    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [hora, setHora] = useState(0)

    // Botão stop, com lógica "!stop" sendo que o useState é Stop
    const [stop, setStop] = useState(false)
    const [nameStop, setnameStop] = useState("Stop")
    
    // Variaveis para adicionar o tempo
        const[inputhora, setInputhora] = useState(0)
        const [inputseg, setInputseg] = useState(0)
        const [inputmin, setInputmin] = useState(0)


    // Pegar o value dos inputs
        const handleInputhora = (e) => {
            setInputhora(e.target.value)
        }
        const handleInputseg = (e) => {
            setInputseg(e.target.value)
        }
        const handleInputmin = (e) => {
            setInputmin(e.target.value)
        }
   
    // Inserir valor do campo do input para as variaveis de tempo

    const InserirTempo=()=> {
        if(stop===true) {
            setSegundos(inputseg)
            setMinutos(inputmin)
            setHora(inputhora)
        }
        
    }
    // Decrementar o tempo
    const decrementarHoras = () => {
        setHora(hora -1)
    }
    
    const decrementarSegundos = () => {   
        setSegundos(segundos-1)
    }
    
    const decrementarMinutos = () => {
        setMinutos(minutos -1)
    }

    const zerarTempo = () => {
        setSegundos(0)
        setMinutos(0)
        setHora(0)
    }

    // Parar o tempo
    const pararTempo = () => {
        setStop(!stop)
        if(stop)
        {
            setnameStop("Stop")
        }else
        {
            setnameStop("Play")
        } 
    }
    
    
    useEffect(() => {

        if (stop===false){

            let id = setInterval(() => {
                decrementarSegundos()
            }, 1000)
            if (segundos<=0 && minutos>0  ){
                setSegundos(59)
                decrementarMinutos()
            }
            
            if (minutos<=0 && hora>0   ){
                setMinutos(59)
                decrementarHoras()
            }

            // para o tempo apos ficar 00:00:00
    
             if ( hora <= 0 && minutos<=0 && segundos<=0){
                setStop(true)
                setnameStop("Play")
            }
              
            
            
            return () => clearInterval(id);   
        }
        
    }, [segundos,minutos, stop]) // é executado quando o valor de segundos, stop e minutos for alterado

    
    
        let seg = segundos < 10 ? "0" +segundos: segundos
        let min = minutos < 10 ? "0" +minutos: minutos
        let hor = hora < 10 ? "0" +hora: hora

        
        
    
   
    return(
        // InserirTemp: o item value foi utilizado paa enviar o valor do input nas variaveis de tempo
        // InserirTempo: envia o state das variaveis de tempo atualizado
            <div className="container">
                <LabelCronometro name={`${hor}:${min}:${seg}`} />
                <div className="inputs">
                    <Descinput Nome="Horas:"/>
                    <InserirTemp onChange={handleInputhora} value={inputhora} /> 
                    <Descinput Nome="Minutos:"/>
                    <InserirTemp onChange={handleInputmin} value={inputmin}/>
                    <Descinput Nome="Segundos:"/>
                    <InserirTemp onChange={handleInputseg} value={inputseg}/>
                </div>
                <Botao onClick = {zerarTempo} label="Zerar"/>
                <Botao onClick = {InserirTempo} label="Inserir Tempo"/>
                <Botao onClick = {pararTempo} label={nameStop}/>
                
            </div>
        )
}
export default Contador