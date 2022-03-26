import {createSlice} from '@reduxjs/toolkit';

export const clickSlice=createSlice({
    name:"clicks",
    initialState:{  
        showOverlay:false, 
        showSingleProjectComponent:false, 
        showMobileNav:false, 
        nightMode:false, 
        SelectedProject:null, 


    },
    reducers:{

        ShowSingleProjectComponentFN:(state)=>{     

            state.showOverlay=true;   
            state.showSingleProjectComponent=true; 
        },
        ShowMobileNavFN:(state)=>{     

            state.showOverlay=true;   
            state.showMobileNav=true; 
        },
        AllComponentHideFN:(state)=>{
            state.showOverlay=false;
            state.showSingleProjectComponent=false;

        },
        TurnOnOFFNigtModeFN:(state)=>{
            state.nightMode=!state.nightMode;

        },
        SelectProject:(state,action)=>{
            state.SelectedProject=action.payload;

        },
    }
});



export const {ShowSingleProjectComponentFN,AllComponentHideFN,ShowMobileNavFN,TurnOnOFFNigtModeFN,SelectProject} =clickSlice.actions; 

//selectors
export const selectClicks=(state)=>state.clicks;

export default clickSlice.reducer;

