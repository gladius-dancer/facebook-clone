import { createSlice} from "@reduxjs/toolkit";

interface DateState {
    day: number[];
    month: string[];
    year: number[];
}

const initialState: DateState = {
    day: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    month: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    year: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers:{

    }
})

export default dateSlice.reducer;