import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
const initialState = {
    cardItems:[],
    amount:0,
    totalPrice:0,
    isLoaded : false
}

export const fetchPokemonByName = createAsyncThunk(
    'pokemon/fetchByName',
    async (name, { rejectWithValue }) => {
        const response = await fetch(`https://course-api.com/react-useReducer-cart-project`)
        const data = await response.json()
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data)
        }
        return data
    }
)
const cardSlice = createSlice({
    name:"card",
    initialState,
    reducers : {
        increase:(state,action) => {
           const selected= state.cardItems.find(item => item.id == action.payload)
            if (selected.amount >=1) {
             selected.amount++;
         }
        },
        decrease:(state,action) => {
           const selected= state.cardItems.find(item => item.id == action.payload)
            if (selected.amount>1) {
              selected.amount--;
          }
        },
        removeItem:(state,action)=> {
            state.cardItems = state.cardItems.filter(item => item.id !== action.payload)
        },
        calculateTotals: (state,action) => {
            let amount = 0;
            let TotalPrice=0 
            state.cardItems.forEach(item => {
                amount += item.amount
                TotalPrice+= item.amount * item.price
             
            })
            state.amount = amount;
            state.totalPrice = TotalPrice
        },clear:(state)=> {
            state.cardItems = []
        }
    },extraReducers:(builder)=>{
        builder.addCase(fetchPokemonByName.pending, (state, action) => {
            state.isLoaded = true
        })
        builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
            state.isLoaded = false
            state.cardItems = action.payload
            
        })
       
        builder.addCase(fetchPokemonByName.rejected, (state, action) => {
            state.isLoaded = true
        })
    }
})
export const {increase,decrease,calculateTotals,removeItem,clear} = cardSlice.actions
export default cardSlice.reducer