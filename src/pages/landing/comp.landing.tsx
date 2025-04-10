import { IPost } from "common/types/types.profile";
import { Div, LinkBase, Image } from "components/base";
import { AllProps } from "components/base/interface.base";
import { AvatarContainer, AvatarContainer2 } from "components/elements/element.avatar";
import { PostChip } from "components/elements/element.chip";
import { IconBookmark, IconComment, IconHeart, IconRecycle } from "components/icons";
import { IoIosMore } from "react-icons/io";
import { styled } from "styled-components";
import Ripples from 'react-ripples';
import { MobileDiv, TxT3 } from "components/elements/element.box";
import { IFeedData } from "common/types/types.home";
import { formatNumber, formatXP, timeAgo } from "common/utils";

const CardDiv = styled(MobileDiv)`
 border-bottom: 1px solid #333333;
 `;

const TxT1 = styled(Div)`
font-family: 'Anybody', sans-serif;
`;
TxT1.defaultProps = {
    fontSize: "15px",
    fontWeight: "600",
    textAlign: "left",
};
const TxT2 = styled(Div)`
font-family: 'Anybody', sans-serif;
`;
TxT2.defaultProps = {
    fontSize: "15px",
    fontWeight: "400",
    textAlign: "left",
    color: "bg_5"
};

const TxT4 = styled(Div)`
font-family: 'Sharpie', sans-serif;
font-size: 14px;
font-style: italic;
font-weight: 400;
line-height: 24px;
text-align: center;

`;
TxT4.defaultProps = {
    textAlign: "left",
    color: "bg_5"
};

interface AvatarContainerProps {
    src?: string;
}
export const ImageDiv = styled.div<AvatarContainerProps>`
    width: 100%;
    height: 300px;
    background-image: url(${(props) => props.src || require(`assets/image/post.png`)});
    background-size: cover; /* Ensures the image covers the entire container */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `;

interface PostCardProps extends AllProps {
    post: IFeedData;
}
export const PostCard: React.FC<PostCardProps> = ({
    post,
    ...props
}) => {
    return (
        <CardDiv
            {...props}>
            <AvatarContainer2 src={post.user.avatar} size={"52px"}/>
            <Div
                pl={"1em"}
                width={"100%"}
                flexDirection={"column"}>
                <Div
                    flexDirection={"column"}
                    position={"relative"}
                    width={"100%"}
                    mb={"1em"}>
                    <Div
                        flexWrap={'wrap'}
                        alignItems={'center'}
                        mb={"0.5em"}>
                        <Div flexWrap={'wrap'} pr={"100px"} pt={["25px", "15px", "0px", "0px"]}>
                            <TxT1>{post.user.displayName}</TxT1>
                            <TxT2 ml={"10px"}>
                                <LinkBase href={`https://x.com/${post.user.username}`} target="_blank">@{post.user.username}</LinkBase>
                            </TxT2>
                            <TxT2 ml={"10px"}>
                               - {post.createdAt}
                            </TxT2>
                        </Div>
                        <PostChip txt={`WIN ${formatNumber(post.points)} PTS`} />
                    </Div>
                    <TxT3>{post.relatedTweet.text}</TxT3>
                </Div>
                {
                    post.relatedTweet.preview_image_url !== '' && <ImageDiv src={post.relatedTweet.preview_image_url} />
                }
                <Div
                    p={"1em"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Div alignItems={"center"}>
                        <IconComment color={post.type === 'comment' ? '#E0245E' : "#7F818B"} />
                        <TxT4 ml={"1em"} color={post.type === 'comment' ? '#E0245E' : "bg_5"}>{post.relatedTweet.public_metrics.reply_count}</TxT4>
                    </Div>
                    <Div alignItems={"center"}>
                        <IconRecycle color={post.type === 'retweet' ? '#E0245E' : "#7F818B"} />
                        <TxT4 ml={"1em"} color={post.type === 'retweet' ? '#E0245E' : "bg_5"}>{post.relatedTweet.public_metrics.retweet_count}</TxT4>
                    </Div>
                    <Div alignItems={"center"}>
                        <IconHeart color={post.type === 'like' ? '#E0245E' : "#7F818B"} />
                        <TxT4 ml={"1em"} color={post.type === 'like' ? '#E0245E' : "bg_5"}>{post.relatedTweet.public_metrics.like_count}</TxT4>
                    </Div>
                    <IconBookmark />
                    <Ripples>
                        <IoIosMore color={"#7F818B"} />
                    </Ripples>
                </Div>
            </Div>
        </CardDiv>
    );
};
