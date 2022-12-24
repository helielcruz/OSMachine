<template>
    <div></div>
</template>
<style>
/* Colors */
    /* Forms */
        .inputForm{
            margin-top: 20%;
            border: 1px solid transparent;
            border-color: rgb(62,142,208);
            border-radius: 3.5px;
            padding-top: 12px;
            padding-bottom: 12px;
            font-size:small;
            font-weight: 450;  
        }
        .inputForm:focus{
            outline: none;
            box-shadow: 0 0.0625em 3px 0.5px rgb(62,142,208);
        }
        .placeholder::placeholder{
            color: rgb(115, 116, 116)!important;
        }
    /* End Forms */
/* End Colors */
/* Login */
    .pageLogin{
        
    }
    #columnFormLogin{
        padding-top: 20%;
        background-color: black;
        
    }
    .blockFormLogin{
        display: block;
        padding-right:15%;
        padding-left: 15%;
    }
    .inputLogin{
        width: 100%;
        margin:1%;
        background-color: black!important;
        color: aliceblue!important;
    }
    .buttonFormLogin{
        margin-left: 83%;
        transition: 1s!important;
    }
    .buttonFormLogin:hover{
        transform: scale(1) translate(30%)!important;
    }
/* End Login */
</style>