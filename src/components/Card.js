import React, { Component } from 'react'

import { FaCartPlus } from "react-icons/fa6";

export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            annotationTextDisplay: false
        }

        this.ShowAnnotation = this.ShowAnnotation.bind(this)
    }

    ShowAnnotation() {
        this.state.annotationTextDisplay ? this.setState({ annotationTextDisplay: false }) : this.setState({ annotationTextDisplay: true })
    }

    render() {
        return (
            <div className='card'>

                <div className='annotation' onClick={this.ShowAnnotation}>i</div>

                <div className={this.state.annotationTextDisplay ? "annotationText" : "annotationTextNone"}>
                    <h2 className='typeBook'>жанр: {this.props.book.type}</h2>
                    <p>{this.props.book.annotation}</p>
                </div>

                <div className='imgSize'>
                    <img src={this.props.book.image} />
                </div>

                <h1 className='nameBook'>{this.props.book.name}</h1>

                <div className='byuBook'>
                    <h3>Цена: {this.props.book.price} руб.</h3>
                    <div className='styleFaCartPlus' onClick={() => this.props.AddBookInCardOfBook(this.props.book)}>
                        <FaCartPlus className='FaCartPlus' />
                    </div>
                </div>

            </div>

        )
    }
}
