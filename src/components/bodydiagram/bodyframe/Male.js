import React from 'react';
import './Gender.css';
import male from './male-10.jpg';
import Modal from 'react-modal';
import List from '../List';

const customStyles = {
  overlay : {
   backgroundColor   : 'rgba(0, 0, 0, 0.75)'
 },
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'hsla(194, 100%, 5%, 1)'

  }
};


export default class Male extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#9b8e37';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
      console.log(this.props.addList)
    return(

      <div className="gendermap">
      <img src={male} className="genderpics" alt="male" useMap="#bodycoordinates" />
      <map name="bodycoordinates">
      <area shape="circle" coords="90,65,35" alt="headfront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="270,65,35" alt="headback" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="180,150,37" alt="ShouldersMerge" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="20,150,37" alt="ShouldersFront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="350,150,37" alt="ShouldersBack" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="180,285,43" alt="armHandsMerge" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="20,285,37" alt="armHandsFront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="350,285,37" alt="armHandsBack" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="90,150,35" alt="chest" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="268,150,35" alt="back" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="90,270,35" alt="waistAreaFront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="268,270,35" alt="waistAreaBack" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="90,400,70" alt="legsFront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="268,400,70" alt="legsBack" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="90,520,45" alt="feetFront" onClick={this.openModal} href="#"/>
      <area shape="circle" coords="268,520,45" alt="feetBack" onClick={this.openModal} href="#"/>
      </map>
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >
          <h2 className="title" ref="subtitle">SELECT INJURIES</h2>
          <List addList={this.props.addList}/>
        </Modal>
      </div>
     </div>
    );
  }
}
