import React from 'react'
import ModalChart from './modals/Chart'
import ModalLoginSignUp from './modals/LoginSignUp'

const Modals = props => {
    return props.isOpen === true ? (
	    	<div className="modal-container">
				{
				props.type === 'checkout' ?
					<ModalChart 
					close={props.close} 
					items={props.items} 
					filter={props.filter} 
					/>
					: 
					<ModalLoginSignUp 
						type={props.type} 
						changeType={props.changeType} 
						close={props.close} 
					/>
				}
	       	</div>
	    ): null
    
}
export default Modals
