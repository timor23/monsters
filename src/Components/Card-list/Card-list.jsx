import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import './card-list.css'

const CardList = (props) => {
    return (
        <div className={'card-list'}>
            {props.filteredMonsters.map((monster) => {
                return (<Card monster={monster} />)
            })}
        </div>
    );
};

export default CardList;


























