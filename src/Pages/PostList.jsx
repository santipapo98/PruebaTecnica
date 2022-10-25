import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WacoHeaderImage from '../Assets/WacoHeaderImage.png'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GetPosts } from '../Services/Posts';
import { db } from '../Firebase/Firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {collection, getDocs, setDoc, updateDoc, doc, arrayUnion} from 'firebase/firestore';

const theme = createTheme ({
  palette: {
      background: {
          default: "#0E0E0E"
      },
      primary: {
        main: '#000'
    }
  }
})

export default function PostList() {

    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [updateCollection, setUpdateCollection] = useState(false)
    const [showFavs, setShowFavs] = useState(false)
    const navigate = useNavigate()
    const userFavsCollection = collection(db, 'users')
    const uid = useSelector(state => state.user_info.auth_token)

    useEffect(() => {
        GetPosts.then((response) => {
            if(!showFavs){
                setPosts(response.data.data)
            } else {
                setPosts(response.data.data.filter((post) => users[0].favs.includes(post.id)))
            }
            
        }).catch((error) => {
            console.log(error)
        })
    }, [users, showFavs])

    useEffect(() => {
        const getFavorites = async () => {
            const data = await getDocs(userFavsCollection)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})).filter((doc) => doc.id === uid))
        }
        getFavorites()
    }, [updateCollection])
    

    const addToFavourites = async (userId, postId) => {
        if(users.find((user) => user.id === userId)){
            await updateDoc(doc(db, 'users', userId), {
                favs: arrayUnion(postId)
            })
        } else {
            await setDoc(doc(db, 'users', userId), {
                favs: [postId]
            })
        }
        setUpdateCollection(!updateCollection)
    }
    

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" sx={{textAlign: 'center'}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Waco Posts
            </Typography>
            <Box onClick={() => {navigate('/')}} sx={{cursor: 'pointer'}} component='img' src={WacoHeaderImage}/>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{backgroundColor: '#00E6E3'}} variant="contained" onClick={() => {setShowFavs(!showFavs)}}>{!showFavs ? 'Mostrar Favoritos' : 'Mostar Posts'}</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                     {post.body}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {!showFavs && <Button size="small" sx={{color: '#00E6E3'}} onClick={() => {addToFavourites(uid, post.id)}}>Add to Favs</Button>}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}