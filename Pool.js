import React, { Component } from 'react';

class Pool extends Component {

    select1Ref = React.createRef();
    select2Ref = React.createRef();


    state = {
        select1: this.props.datos,
        select2: []
    }



    mostrarOpciones = (key) => {


        return (
            <option key={key} value={this.props.datos[key]}>{this.props.datos[key]}</option>
        );
    }

    addInfo = () => {
        //console.log(this.state.select1)

        const arreglo1 = this.state.select1;
        const arreglo2 = this.state.select2;

        arreglo2.push(this.select1Ref.current.value);
        let pos = arreglo1.indexOf(this.select1Ref.current.value)
        arreglo1.splice(pos, 1);

        this.setState({
            select2: arreglo2,
            select1: arreglo1
        })
       
        

        console.log(arreglo1);

    }

    addInfo2 = () => {
        //console.log(this.state.select1)

        const arreglo1 = this.state.select1;
        const arreglo2 = this.state.select2;

        arreglo1.push(this.select2Ref.current.value);
        let pos = arreglo2.indexOf(this.select2Ref.current.value)
        arreglo2.splice(pos, 1);

        this.setState({
            select2: arreglo2,
            select1: arreglo1
        })
       
        

        console.log(arreglo1);

    }

    render() {


        //console.log("en render" , this.props.datos)
        const datos = Object.keys(this.props.datos);
        //console.log(datos);
        return (
            <div>
                <h1>LLamado desde pool</h1>

                <select size="3" ref={this.select1Ref}>
                    {
                        Object.keys(datos).map(this.mostrarOpciones)
                    }
                </select>

                <br />
                <img src="img/icono.png" width="25" onClick={this.addInfo} />
                <br />
                <img src="img/camisa_7.png" width="25" onClick={this.addInfo2} />
                <br/>
                <select size="3" ref={this.select2Ref}>
                    {
                        Object.keys(this.state.select2).map(key=>{
                            return(
                            <option key={key}>{this.state.select2[key]}</option>
                            )
                        })
                    }
                </select>
                

            </div>

        );
    }


}

export default Pool;