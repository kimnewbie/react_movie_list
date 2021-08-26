import React from 'react'

const Coffee = ({ fav, picture }) => {
    return (
        <div>
            <h2>{fav}는 맛있다.</h2>
            <img src={picture} alt={fav} />
        </div>
    );
}

export default function TestWithSbuxMenu() {
    return (
        <div>
            <Coffee fav="Latte" />
            <Coffee fav="Espresso" />
            <Coffee fav="GreenTea" />
            <br />
            {CoffeeList.map((list, index) => (<Coffee fav={list.name} picture={list.image} key={index} />))}
        </div>
    )
}

const CoffeeList = [
    {
        name: "Latte",
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110569]_2015081322" +
            "1315652.jpg"
    }, {
        name: "Americano",
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_2015081322" +
            "2100303.jpg"
    }, {
        name: "Cappuccino",
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110601]_2015080310" +
            "1742023.jpg"
    }, {
        name: "Caffe Mocha",
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[46]_20150803105115" +
            "048.jpg"
    }, {
        name: "Espresso",
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[20]_20150813221922" +
            "951.jpg"
    }
]