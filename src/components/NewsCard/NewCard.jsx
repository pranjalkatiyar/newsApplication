import React, { useEffect, useState, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  typography: {
    bold: {
      fontWeight: 600,
    },
    body: {
      color: "white",
    },
  },
  styleOverrides: {
    MuiCard: {
      root: {
        backgroundColor: "#1e1e1e",
        color: "white",
      },
    },
  },
});

const NewsCard = ({ article, i }) => {
  const active = { borderBottom: "10px solid #22289a" };
  const [elRefs, setElRefs] = useState([]);
  // const scrollRef=(ref)=>window.scroll(0,ref.current.offsetTop-50);
  // const activate=activeArticle===i?active:null;
  // useEffect(()=>{
  //   setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j] || createRef()));
  // });
  // useEffect(()=>{
  //   scrollRef(elRefs[i]);
  // },[i,elRefs])
  var d = new Date(article[i].publishedAt).toString();
  var index = d.lastIndexOf(":") + 3;
  var date = d.substring(0, index);

  console.log("article", article[i]);
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ height: 250 }}
            image={
              article[i].urlToImage ||
              "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
            }
          />
          <div>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "space-between",
              }}
            >
              <Typography color="textSecondary" variant="body" component="h3">
                {date}
              </Typography>
              <Typography variant="body" color="textSecondary" component="h3">
                {article[i].source.name}
              </Typography>
            </div>
            <Typography gutterBottom variant="h3" sx={{fontWeight:"bold",fontSize:"25px"}}>
              {article[i].title}
            </Typography>
            <CardContent>
              <Typography color="textSecondary" variant="p">
                {article[i].content}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions styles={{}}>
           <Button size="small" color="primary">
              Learn More
            </Button>
            <Typography color="textSecondary" variant="h5">
              {1 + i}
            </Typography>
         </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default NewsCard;
