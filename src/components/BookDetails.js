import React from "react"
import { connect } from "react-redux"


class BookDetails extends React.Component {
    render(){
        return (

            <section>
                {
                    this.props.activeBook.text
                }

            </section>    
        )
    }
}

const mapStateToProp = (state) => {
 return {
   activeBook:state.activeBook
 }
}

export default connect(mapStateToProp, null)(BookDetails)