import React from 'react'
// import { render } from 'react-dom'
import Modal from 'react-responsive-modal'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class DisclaimerModal extends React.Component {
    state = {
        open: true
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div style={styles}>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>This is a Modal test</h2>
                    <button onClick={this.onCloseModal}>Close Modal</button>
                </Modal>
            </div>
        )
    }
}

export default DisclaimerModal;