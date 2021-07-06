import React, { Component } from 'react';

export default class MyCart extends Component {
    render() {
        return (
            <div>
                <div class="ui cards">
                    <div class="ui card centered">
                        <div class="content">
                            <img
                                src="/images/cel.png"
                                class="ui mini right floated image"
                            />
                            <div class="header">Caracteristicas del producto</div>
                            <div class="meta">Precio: 850.000 COP</div>
                            <div class="meta">Bateria 3000 mAh</div>
                            <div class="description">
                                8G RAM, 16G Memoria interna<br />
                                Tamaño de la pantalla: 6,7"<br />
                                Camara frontal: 12 Mpx<br />
                                Camara trasera: 24 Mpx<br />
                                Desbloqueo: Reconocimiento facial
                            </div>
                        </div>
                        <div class="extra content">
                            <div class="ui two buttons">
                                <button class="ui green basic button">Comprar</button>
                                <button class="ui red basic button">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}