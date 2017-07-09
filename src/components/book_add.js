import React from "react"
import { connect } from "react-redux"

class AddBook extends React.Component {
    render(){
        return (
            <section>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addBook(this.textInp.value);
                        this.textInp.value = ""
                    }}>
                    <input type="text" ref={(input) => this.textInp = input } />
                    <button type="submit">Add Books</button>
                </form>

            </section>     
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addBook:(text) => {
          dispatch({
              type:"ADD_BOOK",
              text
          })
      }
  }
}

export default connect(null, mapDispatchToProps)(AddBook)