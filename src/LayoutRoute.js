import React from "react";
import { Route } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./screens/ResponsiveAppBar";
import Footer from "./screens/Footer";


function LayoutRoute(props) {
    return(
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
            <ResponsiveAppBar{...props}/>
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer />
        </Box>
    )
}

export default LayoutRoute;