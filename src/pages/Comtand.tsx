import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { apiGetAllUsers,selectUser, Users } from "../features/Login/UsersSlice";
import ComtandUI from "./ComtandUI";
export default function Comtand(){
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllUsers());
    });

    const users = useAppSelector(selectUser);
    let navigate = useNavigate();
    let {Username} = useParams();
    let movie_list = `/${Username}/movie-list`
    let shop = `/${Username}/shop`
    let Title ="Admin"
    let widths = "120px"
    let margin = "0px"
    if (Username !== "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    return(
        <div>
                                        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
<script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <div className={"home"}>
        <li className="nav-item active">
            <div >
            <li className="w3-xxlarge">
                <i className="fa fa-home"></i></li>
                </div>
            </li>
            </div>
            <li className="nav-item active">
            <li className="nav-item active">
            <div className={"ProfileIcon"}>
            <li className="w3-xxlarge">
                <i className="fa fa-bitcoin" onClick={()=>{
                    navigate(movie_list)
                }}></i></li>
                </div>
            </li>
            </li>
            <li className="nav-item active">
            <li className="nav-item active">
            <div className={"ProfileIcon_Shop"} onClick={()=>{ navigate(shop)}}>
            <li>
            <i className='fa-solid fa-shop'></i></li>
                </div>
            </li>
            </li>
            <div className={"Admin_title"} style={{width:widths, boxShadow:"0 10px 10px 0 rgba(0, 0, 0, 0.2)"}} onClick={()=>{
                if(Username === "Aung Nyi Thant"){
                    navigate(`/admin/${Username}/shop`)
                }
            }}>
            <h3 className={"Title__"} id={"title"} style={{marginLeft:margin}} >{Title}</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
            <i className='fas fa-comment-alt' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate(`/${Username}/message`)
            }}></i>
            <div className="profile" onClick={()=>{
                navigate(`/${Username}/profile`)
            }}>

            </div>
            
            {/*{
            useAuthentication()
            && <li className="nav-item">
                <Link className="nav-link" to="/movie-list">Movie List</Link>
            </li>
        }

        {useAuthentication() && <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
        </li>}*/}


        </ul>

    </div>
    </nav>
    {
                        users.map((users:Users)=>
                        <ComtandUI 
                            users={users}
                        />)
                    }
        </div>
    )
}