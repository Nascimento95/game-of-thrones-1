import React from 'react'

class Character extends React.Component {
	render() {
        console.log(this.props);
        const { name, image, title } = this.props
		return(
            
            <div className="col-4 border border-3 mb-5 ">
                <img className="img-fluid" src={image} alt="personage de game of throne"/>
                <p>{name}</p>
                <p>{title} </p>
            </div>
           
			
		)
	}
}

export default Character