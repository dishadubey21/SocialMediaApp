
import { BiDislike ,BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import {Avatar,IconButton,Card,HStack,Stack,Strong,Text,Container} from "@chakra-ui/react"
import { useState, useEffect } from "react";

function PostCard({post,setPosts}){

    const [liked,setLiked]=useState('unliked');


    useEffect(() => {
        console.log(post);
    },[post])

    function setLikeState(likestate){
        console.log(likestate);
        switch(likestate){
            case 'unliked' :

                if(liked === 'disliked'){
                    setPosts((prev) => prev.map(p => p.id === post.id ? {...post,reactions : {...p.reactions, 
                    dislikes : post.reactions.dislikes -1}} : p));
                }

                else if(liked === 'liked'){
                    setPosts((prev) => prev.map(p=> p.id === post.id ? {...post,reactions : {...p.reactions, 
                    likes : post.reactions.likes -1}} : p));
                }

                setLiked(()=> 'unliked');
                break;

            case 'liked' :

                if(liked === 'disliked'){
                    setPosts((prev) => prev.map(p => p.id === post.id ? { ...post, reactions: { ...p.reactions, dislikes: p.reactions.dislikes - 1 } } : p));
                }

                setPosts((prev) => prev.map(p=> p.id === post.id ? {...post,reactions : {...p.reactions, 
                    likes : p.reactions.likes +1}} : p));

                setLiked(()=> 'liked');
                break;

            case 'disliked' :
                if(liked === 'liked'){
                    setPosts((prev) => prev.map(p=> p.id === post.id ? {...post,reactions : {...p.reactions, 
                    likes : post.reactions.likes -1}} : p))
                }

                setPosts((prev) => prev.map(p=> p.id === post.id ? {...post,reactions : {...p.reactions, 
                    dislikes : post.reactions.dislikes +1}} : p))

                setLiked(()=> 'disliked');
                break;
        }
    }

    return (
        <Container mx="auto" sm={{maxW:"10/12"}} md={{maxW:"3/5"}} lg={{maxW:"2/3"}} > 
        <Card.Root mt="2" >
        <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Image src="C:\Users\Acer\OneDrive\Desktop\reactClass\SocialMediaApp\src\assets\image.png" />
            <Avatar.Fallback name="User"/>
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              User-{post.userId}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @user{post.userId}
            </Text>
          </Stack>
        </HStack>
        <Card.Description color="gray.900">
          <Strong fontSize="md" color="blue.600">{post.title}  </Strong><br/>
          {post.body}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap={4} justifyContent="center">
        
          <HStack gap={2}>
            {
                liked === "liked"
                ?
                <IconButton variant="ghost" onClick={() => setLikeState("unliked")}> 
                    <BiSolidLike />
                </IconButton>
                :
                <IconButton variant="ghost" onClick={() => setLikeState("liked")}> 
                    <BiLike />
                </IconButton>
            }
            <Text>{post.reactions.likes}</Text>
          </HStack>

          <HStack gap={2}>
            {
                liked === "disliked"
                ?
                <IconButton variant="ghost" onClick={() => setLikeState("unliked")}> 
                    <BiSolidDislike />
                </IconButton>
                :
                <IconButton variant="ghost" onClick={() => setLikeState("disliked")}> 
                    <BiDislike />
                </IconButton>
            }
            <Text>{post.reactions.dislikes}</Text>
          </HStack>

        </Card.Footer>
      </Card.Root>
      </Container>
  );
};

export default PostCard;