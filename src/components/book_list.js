import React from "react"
import { connect } from "react-redux"

class BookList extends React.Component {
    render(){
        return (

            <section>
                    {
                        this.props.books.map((bookItem, index) => {
                            return <li key={index}>
                               <span onClick={() => {
                                    this.props.selectBook(bookItem.text)
                                   }}>{bookItem.text}</span>  
                               <button onClick={() => {
                                  this.props.removeBook(index)
                                }}>Remove</button>  
                           </li>    
                        })
                    }

            </section>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      books:state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeBook:(index) => {
        dispatch({
            type:"REMOVE_TODO",
            index
        })
      },
       selectBook:(text) => {
        dispatch({
            type:"BOOK_SELECTED",
            text
        })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)