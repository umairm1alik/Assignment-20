const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import firestore from "@react-native-firebase/firestore"

// import { db } from "../../config/firebase";

export const fetchData= createAsyncThunk("fetch/data", async () => {
    try {
        const dataFetched=await firestore().collection("dobData").get()   
          
        
        const dataFromFirebase=[]

        dataFetched.forEach(doc => {
            dataFromFirebase.push({
                docId: doc.id,
                ...doc.data()
            })
        })
        return dataFromFirebase
    }catch(error){
        alert(error)
    }
})  

export const addDob= createAsyncThunk("add/Dob", async (data) => {
    try {
        await firestore().collection("dobData").add(data)  
               
        return data

    } catch (error) {
        console.log("error in Dob add action", error);
    }finally{
        
        alert("Data Added Successfuly")
        
    }
})

export const updateDob= createAsyncThunk("update/Dob", async (data) => {
    try {
        await firestore().collection("dobData").doc(data.docId).update(data)  
               
        return data

    } catch (error) {
        console.log("error in Dob update action", error);
    }finally{
        
        alert("Data Updated Successfuly")
        
    }
})

const dobSlicer=createSlice({
    name: "addingDob",
    initialState: {
        data:[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.fulfilled, (state, action) => {
            state.data= action.payload
        })
        .addCase(addDob.fulfilled, (state, action) => {
            state.data= action.payload
        })
        .addCase(updateDob.fulfilled, (state, action) => {
            state.data= action.payload
        })
        
    }
})

export default dobSlicer.reducer