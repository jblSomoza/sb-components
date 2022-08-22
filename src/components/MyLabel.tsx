import React from 'react';
import './mylabel.css';

export interface MyLabelProps{
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamanio de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Si quiere todo capitalizado
    */
    AllCaps?: boolean;
    /**
    * Este es el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
}

export const MyLabel = ({
    AllCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor
} : MyLabelProps) => {
  return (
    <span 
        className={ `label ${size}, text-${color}` }
        style={{ color: fontColor }}
    >
        { (AllCaps) ? label.toUpperCase() : label }
    </span>
  )
}
