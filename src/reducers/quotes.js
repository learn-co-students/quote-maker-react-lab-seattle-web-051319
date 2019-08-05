export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let upQuote = state.find(quote => quote.id === action.quoteId)
        ++upQuote.votes
      return [...state]
    case "DOWNVOTE_QUOTE":
      let downQuote = state.find(quote => quote.id === action.quoteId)
      if (downQuote.votes !== 0) {
        --downQuote.votes
      }
      return [...state]
    default:
      return state;
  }
}
