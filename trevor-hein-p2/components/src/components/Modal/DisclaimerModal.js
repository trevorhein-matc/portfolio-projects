import React, { Component } from 'react'
import Modal from './Modal'

class DisclaimerModal extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: true };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleModal}>
                    Open the Modal
                </button>

                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Are you of legal age to purchase these producst?
                </Modal>
            </div>
        )
    }
}

export default DisclaimerModal;